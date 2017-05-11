export default function createStore(helper) {
  let state = {
    searching: false,
    searchParameters: helper.getState(),
    searchResults: null,
    searchError: null,
  };
  const listeners = [];
  const dispatch = () => {
    listeners.forEach(listener => listener());
  };

  helper.on('change', searchParameters => {
    const { coucou, ...otherProps } = searchParameters;
    dispatch(coucou, otherProps);
  });

  helper.on('search', () => {
    state = {
      ...state,
      searching: true,
    };
    dispatch();
  });

  helper.on('result', searchResults => {
    state = {
      ...state,
      searching: false,
      searchResults,
    };
    dispatch();
  });

  helper.on('error', searchError => {
    state = {
      ...state,
      searching: false,
      searchError,
    };
    dispatch();
  });

  return {
    getHelper: () => helper,
    getState: () => state,
    subscribe: listener => {
      listeners.push(listener);
      return function unsubscribe() {
        listeners.splice(listeners.indexOf(listener));
      };
    },
  };
}

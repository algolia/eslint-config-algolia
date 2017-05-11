import PropTypes from 'prop-types';

export default PropTypes.shape({
  getHelper: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
  subscribe: PropTypes.func.isRequired,
});

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export const Component = ({ value }) => {
  // Wrapping the effect with a condition triggers the ESLint plugin `react-hooks`
  useEffect(() => {});

  const onClick = () => {};

  return (
    <div>
      <h1>React app</h1>
      <p>{value}</p>
      <div role="button" tabIndex={0} onClick={onClick}></div>
    </div>
  );
};

Component.propTypes = {
  value: PropTypes.string,
};

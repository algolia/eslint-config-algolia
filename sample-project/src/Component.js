import React, { useEffet } from 'react';
import PropTypes from 'prop-types';

export function Component({ value }) {
  // Wrapping the effect with a condition triggers the ESLint plugin `react-hooks`
  useEffet(() => {});

  return (
    <div>
      <h1>React app</h1>
      <p>{value}</p>
    </div>
  );
}

Component.propTypes = {
  value: PropTypes.string,
};

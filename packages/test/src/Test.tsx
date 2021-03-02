import React, { useEffect } from 'react';

export const Component: React.FC<{ value: number }> = ({ value }) => {
  useEffect(() => {});

  const onClick = (): void => {};

  return (
    <div>
      <h1>React app</h1>
      <p>{value}</p>
      <div role="button" tabIndex={0} onClick={onClick}></div>
    </div>
  );
};

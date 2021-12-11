import React from 'react';

export const Counter = () => {
  const state = {
    count: 100,
  };
  return (
    <div>
      <h3>I am a counter</h3>
      <p>I have a state of {state.count}</p>
    </div>
  );
};

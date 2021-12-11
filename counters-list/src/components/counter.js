import React from 'react';

export const Counter = () => {
  const state = {
    count: 100,
  };
  // render the counter-object count and add an increment button next to it
  // set styling using bootstrap
  return (
    <>
      <span className='badge badge-primary m-2'>{state.count}</span>
      <button className='btn btn-secondary btn-sm'>Increment</button>
    </>
  );
};

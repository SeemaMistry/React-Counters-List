import React from 'react';

export const Counter = () => {
  const state = {
    count: 0,
  };
  // render the counter-object count and add an increment button next to it
  // set styling using bootstrap

  // for btns, render styling conditionally - if count > 0 or not add warning or primary badge
  return (
    <>
      <span className={getBtnColour()}> {getCount()} </span>
      <button className='btn btn-secondary btn-sm'>Increment</button>
      <br></br>
    </>
  );

  function getBtnColour() {
    let classes = 'badge m-2 badge-';
    return (classes += state.count === 0 ? 'warning' : 'primary');
  }

  function getCount() {
    return state.count === 0 ? 'Zero' : state.count;
  }
};

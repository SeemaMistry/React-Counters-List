import React from 'react';

export const Counter = () => {
  const state = {
    count: 0,
    fruit: ['apples', 'bananas', 'cherry'],
  };
  // render the counter-object count and add an increment button next to it
  // set styling using bootstrap

  // for btns, render styling conditionally - if count > 0 or not add warning or primary badge
  return (
    <>
      <span className={getBtnColour()}>{state.count}</span>
      <button className='btn btn-secondary btn-sm'>Increment</button>
      <ul>
        {state.fruit.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </>
  );

  function getBtnColour() {
    let classes = 'badge m-2 badge-';
    return (classes += state.count === 0 ? 'warning' : 'primary');
  }
};

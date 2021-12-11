import React from 'react';
import { Counter } from './counter';

// initalize a set of counters as an array in the counters-object
// render a list of counters only if counters array > 0
export const Counters = () => {
  const state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  const renderCounters = () => {
    if (state.counters.length === 0) return <h3>List is empty</h3>;
    return state.counters.map((counter) => <Counter key={counter.id} />);
  };

  return <>{renderCounters()}</>;
};

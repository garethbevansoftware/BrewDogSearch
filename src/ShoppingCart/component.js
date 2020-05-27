import React from 'react';

export const Component = ({ item, IncrementItemCount}) => (
  <div>
    <button onClick={() => IncrementItemCount(item)}>Add To Cart</button>
  </div>
);

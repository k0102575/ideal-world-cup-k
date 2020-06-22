import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { plusAction, minusAction } from 'redux/actions/testActions';

function Count() {
  const count = useSelector((state) => {
    return state.test.count;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(plusAction());
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          dispatch(minusAction());
        }}
      >
        Minus
      </button>
    </div>
  );
}

export default Count;

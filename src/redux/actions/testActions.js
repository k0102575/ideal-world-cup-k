import { PLUS, MINUS } from 'redux/type';

export const plusAction = () => (dispatch) => {
  dispatch({ type: PLUS });
};

export const minusAction = () => (dispatch) => {
  dispatch({ type: MINUS });
};

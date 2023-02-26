import { INCREMENT, DECREMENT } from "../constant";
// 加
export const addaction = (data) => ({ type: INCREMENT, data });
// 减
export const delaction = (data) => ({ type: DECREMENT, data });
// 异步加
export const asyncaddaction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addaction(data));
    }, time);
  };
};

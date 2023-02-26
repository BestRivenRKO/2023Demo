// 加
export const addAction = (data) => ({ type: "increment", data });
// 减
export const delAction = (data) => ({ type: "decrement", data });
// 异步加
export const asyncaddAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addAction(data));
    }, time);
  };
};

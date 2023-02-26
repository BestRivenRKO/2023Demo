// countReducer
const init = 0;

const countReducer = (preState = init, action) => {
  const { type, data } = action;
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState;
  }
};

export default countReducer;

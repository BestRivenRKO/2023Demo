// 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
// reducer函数会接到两个参数，一个是之前的状态，一个是动作对象
const init = 0;
const countReducer = (preState = init, action) => {
  console.log(preState, action);
  // 从action上解构出type和data
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

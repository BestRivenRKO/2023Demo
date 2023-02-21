import { DECREMENT, INCREMENT } from "./constant";

const init = 0;
export default function countReducer(pre = init, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return pre + Number(data);
    case DECREMENT:
      return pre - Number(data);
    default:
      return pre;
  }
}

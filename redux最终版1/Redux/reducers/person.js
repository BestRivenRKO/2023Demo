import { ADD_PERSON } from "../constant";

const init = [{ id: 1, name: "tom", age: 18 }];

export default function personReducer(preState = init, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      preState.unshift(data);
      console.log(preState);
      return preState;
    // return [data, ...preState];
    default:
      return preState;
  }
}

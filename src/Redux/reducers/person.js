const init = [{ id: Date.now(), name: "tom", age: 22 }];

export default function personReducer(preState = init, action) {
  const { type, data } = action;
  switch (type) {
    case "addPerson":
      return [data, ...preState];
    default:
      return preState;
  }
}

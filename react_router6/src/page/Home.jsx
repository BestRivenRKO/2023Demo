import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [sum, setSum] = useState(0);
  const handleSum = () => {
    setSum(2);
  };
  return (
    <>
      <div>Home组件222</div>
      {sum === 2 ? <Navigate to={"/about"} /> : <h1>sum值：{sum}</h1>}
      <button onClick={handleSum}>点击</button>
    </>
  );
}

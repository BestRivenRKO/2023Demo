import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

export default function Index() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("@@@");
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const unmount = () => {
    createRoot(document.getElementById("box1")).unmount();
  };
  return (
    <div id='box1'>
      <h2>当前和是：{count}</h2>
      <button onClick={handleClick}>点击加1</button>
      <button onClick={unmount}>点击卸载</button>
    </div>
  );
}

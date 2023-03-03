import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Message = () => {
  const navigate = useNavigate();
  const [mes, setMes] = useState([
    { id: 1, title: "消息1", content: "锄禾日当午" },
    { id: 2, title: "消息2", content: "汗滴禾下土" },
    { id: 3, title: "消息3", content: "谁之盘中餐" },
    { id: 4, title: "消息4", content: "粒粒皆辛苦" },
  ]);
  const handleaction = (item) => {
    navigate(`detail`, {
      state: {
        id: item.id,
        title: item.title,
        content: item.content,
      },
    });
  };
  return (
    <div>
      <ul>
        {mes.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={`detail`}
                state={{
                  id: item.id,
                  title: item.title,
                  content: item.content,
                }}
              >
                {item.title}
              </Link>
              <button
                onClick={() => {
                  handleaction(item);
                }}
              >
                点击
              </button>
            </li>
          );
        })}
      </ul>
      <hr />
      <h2>
        <Outlet />
      </h2>
    </div>
  );
};

export default Message;

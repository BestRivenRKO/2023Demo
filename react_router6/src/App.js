import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  // 路由表
  const elements = useRoutes(routes);

  const handleClass = ({ isActive }) => {
    return isActive ? "list-group-item box" : "list-group-item";
  };
  return (
    <div>
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8'>
          <div className='page-header'>
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-2 col-xs-offset-2'>
          <div className='list-group'>
            <NavLink className={handleClass} to='/about'>
              About
            </NavLink>
            <NavLink className={handleClass} to='/home'>
              Home
            </NavLink>
          </div>
        </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
              {/* 路由表 */}
              {elements}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

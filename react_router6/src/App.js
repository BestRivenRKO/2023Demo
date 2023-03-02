import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
export default function App() {
  const handleClass = (isAction) => {
    return isAction ? "list-group-item box" : "list-group-item";
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
            <NavLink
              className={(isAction) => {
                return isAction ? "list-group-item box" : "list-group-item";
              }}
              to='/about'
            >
              About
            </NavLink>
            <NavLink className='list-group-item' to='/home'>
              Home
            </NavLink>
          </div>
        </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Navigate to='/home' />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

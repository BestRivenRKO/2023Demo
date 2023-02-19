// import React from "react";
// import { Link, NavLink, Route, Routes } from "react-router-dom";
// import TodoList from "./Page/TodoList";
// import Box from "./Page/Box";
// import GitHub from "./Page/GitHub";
// import About from "./Page/Route/About";
// import Home from "./Page/Route/Home";
// class View extends React.Component {
//   render() {
//     return (
//       <>
//         {/* <TodoList /> */}
//         {/* <Box /> */}
//         {/* <GitHub /> */}

//         <div>
//           <div className='row'>
//             <div className='col-xs-offset-2 col-xs-8'>
//               <div className='page-header'>
//                 <h2>React Router Demo</h2>
//               </div>
//             </div>
//           </div>
//           <div className='row'>
//             <div className='col-xs-2 col-xs-offset-2'>
//               <div className='list-group'>
//                 {/* <a className='list-group-item' href='./about.html'>
//                   About
//                 </a>
//                 <a className='list-group-item active' href='./home.html'>
//                   Home
//                 </a> */}
//                 <Link className='list-group-item' to='/about'>
//                   About
//                 </Link>
//                 <Link className='list-group-item active' to='/home'>
//                   Home
//                 </Link>
//               </div>
//             </div>
//             <div className='col-xs-6'>
//               <div className='panel'>
//                 <div className='panel-body'>
//                   <Routes>
//                     <Route path='/about' element={<About />} />
//                     <Route path='/home' element={<Home />} />
//                   </Routes>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default View;

import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"; //导入路由包
const Home = lazy(() => import("./Page/Route/Home")); //代码分割 测试

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    );
  }
}

export default App;

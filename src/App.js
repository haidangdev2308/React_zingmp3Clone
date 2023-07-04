import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { Home, Login, Public } from './pages/public/Index'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";
import * as actions from './store/actions'

function App() {
  const dispatch = useDispatch()
//gửi action gọi api trang home khi render lần đầu
  useEffect( () => {
    dispatch(actions.getHome()) //dispatch nhu người đưa thư đến reducer
  },[])

  
  //store đã được thêm vào từ file index
  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public/>}>
            <Route path={path.HOME} element={<Home/>} />
            <Route path={path.LOGIN} element={<Login/>} />

            <Route path={path.STAR} element={<Home/>} /> 
          </Route>
        </Routes>
      </div>

    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    {/* Same as */}
    <ToastContainer />
    </>
  );
}

export default App;

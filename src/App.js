import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { Home, Public } from './pages/public/Index'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";

function App() {
  const {homeData} = useSelector(state => state.app) //state đại diện các states của store lưu giữ
  //store đã được thêm vào từ file index
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/*" element={<Public/>}>

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

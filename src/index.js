import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Cấu hình react router dom
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'; // import 3 thẻ của react-router-dom
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ReactForm from './Pages/ReactForm/ReactForm';
import Page404 from './Pages/Page404/Page404';
import ReactLifeCycle from './Pages/ReactLifeCycle/ReactLifeCycle';


// jsx: javascript extension
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Định nghĩa đường link để hiển thị ra component tương ứng
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />}>
        {/* path = rỗng là mặc định khi load sẽ load lên coponent tương ứng trong element */}
        {/* nếu trong path có nội dung thì đương link phải / + "nội dung đó" thì mới load lên element đó được */}


        {/* Viết theo kiểu kế thừa link: ở App.js thêm thẻ <Outlet />, ở index.js viết lồng các link con vào trong Route của <App /> */}
        {/* 2 cách định nghĩa trang chủ: để path = '' hoặc thêm index */}
        {/* <Route path='' element={<Home />}></Route> */}
        <Route index element={<Home />}></Route>

        <Route path='contact' element={<Contact />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='reactform' element={<ReactForm />}></Route>
        <Route path='lifecycle' element={<ReactLifeCycle />}></Route>

        {/* xử lý khi người dùng nhập link không hợp lệ */}
        {/* Cách 1: tạo 1 trang 404 và link tới trang đó, path='*' */}
        {/* <Route path='*' element={<Page404 />}></Route> */}
        {/* Cách 2: điều hướng trực tiếp về trang chủ khi link sai --> thêm <Navigate to="" /> vào element */}
        <Route path='*' element={<Navigate to="" />}></Route>
      </Route>
      {/* <Route path='contact' element={<Contact />}>

      </Route> */}
    </Routes>
  </BrowserRouter >
);
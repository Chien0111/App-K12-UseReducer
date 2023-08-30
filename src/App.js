import { Routes, Route } from "react-router-dom";
import Test from "./test";
import Home from "./home";
import Layout from "./layout";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </div>
  );
};

// cai dat thu vien router: npm i -D react-router-dom

// config
// <BrowserRouter> // boc cac component vao router

// <Routes> // boc nhieu router voi nhau

// <Route path="duong link dan den component" element={component}/>

// </Routes>

// </BrowserRouter>

// viet component layout
// boc tat ca route thanh 1 route chinh va co chung component layout

// hook trong react

// useState

export default App;

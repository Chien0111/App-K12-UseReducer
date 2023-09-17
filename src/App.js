import { Routes, Route } from "react-router-dom";
import Test from "./test";
import Home from "./home";
import Layout from "./layout";

const App = () => {
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

export default App;

// useReducer => redux
// redux: quan state cho toan du an, state global
// react - thu vien - libarly
// npm i redux react-redux

// dung redux vao project
// file index: boc component chinh vao provider truyen store
// store: khoi tao ra store cho du an
// reducer: login de cap nhat lai state global
// action: cac action de gui den reducer

// useSelector : lay state ra
// useDispatch: lay function action

// react: useEffect, useState
// redux: useState = global

// cau truc du an
// hook
// thu vien:
// + UI: antsdesign, mater, mui
// + CSS: tailwin
// + API: axios
// + state: redux

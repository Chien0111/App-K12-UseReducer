import { Routes, Route } from "react-router-dom";
import Test from "./test";
import Home from "./home";
import Layout from "./layout";
import LoginPage from "./page/login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  const LogOut = () => {
    navigation("/login");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (!token) {
      navigation("/login");
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;

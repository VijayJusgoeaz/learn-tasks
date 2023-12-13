import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Comp/Home";
import Login from "./Comp/Login";
import Register from "./Comp/Register";

const App = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <button onClick={()=>navigate(1)}>Forward</button>
      <button onClick={()=>navigate(-1)}>Backward</button>
    </div>
  );
};

export default App;

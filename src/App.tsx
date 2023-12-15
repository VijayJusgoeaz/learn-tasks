import SignupPage from "./Comp/Screens/Signup.page";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./Comp/Screens/Dashboard.page";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/dashboard/:first_name" element={<DashboardPage />} />
      </Routes>
    </div>
  );
};

export default App;

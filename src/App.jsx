
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUP from "./components/SignUP";
import AccountSettings from "./components/AccountSettings";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/account-settings" element={<AccountSettings />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./assets/pages/Announcement";
import Login from "./assets/pages/Login";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import './App.css'
import Register from "./assets/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='register' element={<Register/>}/>
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcement />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./assets/pages/Announcement";
import Login from "./assets/pages/Login";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcement />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

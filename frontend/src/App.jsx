import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminDashboard from "./admin/AdminDashboard";
import CreatePost from "./admin/CreatePost";
import SinglePost from "./pages/SinglePost";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-[1400px] p-5 mx-auto flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          <Routes>
            <Route path="/admin/create" element={<CreatePost />} />
          </Routes>
          <Routes>
            <Route path="/post/:id" element={<SinglePost />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

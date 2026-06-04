import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import Churchs from "./pages/Churchs";
import Classes from "./pages/Classes";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Formation from "./pages/Formation";
import Users from "./pages/Users/Users";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="h-full flex sm:flex-row flex-col">
        <Sidebar />
        <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<Churchs />} path="/churchs" />
          <Route element={<Calendar />} path="/calendar" />
          <Route element={<Classes />} path="/classes" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Formation />} path="/formations" />
          <Route element={<Users />} path="/users" />
        </Routes>
      </div>
    </div>
  );
}

export default App;

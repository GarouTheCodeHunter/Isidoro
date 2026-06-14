import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import Classes from "./pages/Classes";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Formation from "./pages/Formation";
import Churchs from "./pages/Chuch/Churchs";
import CreateChurch from "./pages/Chuch/CreateChurch";
import EditChurch from "./pages/Chuch/EditChurch";
import Users from "./pages/Users/Users";
import CreateUser from "./pages/Users/CreateUser";
import EditUser from "./pages/Users/EditUser";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div>
      <div className="h-full min-h-screen flex sm:flex-row flex-col bg-gray-200">
        {!isLandingPage && <Sidebar />}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route element={<Index />} path="/" />
            
            <Route element={<Dashboard />} path="/dashboard" />
            
            <Route element={<Users />} path="/users" />
            <Route element={<CreateUser />} path="/users/create" />
            <Route element={<EditUser />} path="/users/edit/:id" />
            
            <Route element={<Churchs />} path="/churchs" />
            <Route element={<CreateChurch />} path="/churchs/create" />
            <Route element={<EditChurch />} path="/churchs/edit/:id" />
            
            <Route element={<Calendar />} path="/calendar" />
            <Route element={<Classes />} path="/classes" />
            <Route element={<Formation />} path="/formations" />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;


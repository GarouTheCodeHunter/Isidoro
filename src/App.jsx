import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import Classes from "./pages/Classes";
import CreateClass from "./pages/Classes/CreateClass";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Formation from "./pages/Formation";
import CreateFormation from "./pages/Formation/CreateFormation";
import Churchs from "./pages/Chuch/Churchs";
import CreateChurch from "./pages/Chuch/CreateChurch";
import EditChurch from "./pages/Chuch/EditChurch";
import Users from "./pages/Users/Users";
import CreateUser from "./pages/Users/CreateUser";
import EditUser from "./pages/Users/EditUser";
import Operators from "./pages/Operators/Operators";
import CreateOperator from "./pages/Operators/CreateOperator";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0">
        <Routes>
          <Route element={<Index />} path="/" />

          <Route element={<Dashboard />} path="/dashboard" />

          <Route element={<Operators />} path="/operators" />
          <Route element={<CreateOperator />} path="/operators/create" />

          <Route element={<Users />} path="/users" />

          <Route element={<CreateUser />} path="/users/create" />
          <Route element={<EditUser />} path="/users/edit/:id" />

          <Route element={<Churchs />} path="/churchs" />
          <Route element={<CreateChurch />} path="/churchs/create" />
          <Route element={<EditChurch />} path="/churchs/edit/:id" />

          <Route element={<Calendar />} path="/calendar" />

          <Route element={<Classes />} path="/classes" />
          <Route element={<CreateClass />} path="/classes/create" />

          <Route element={<Formation />} path="/formations" />
          <Route element={<CreateFormation />} path="/formations/create" />
        </Routes>
      </main>
    </div>
  );
}

export default App;




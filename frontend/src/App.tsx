import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import { Home } from "./components/Home";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard">
            <Route
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<div>Library</div>} />
              <Route path="library" element={<div>Library</div>} />
              <Route path="projects" element={<div>Projects</div>} />
              <Route path="tools" element={<div>Tools</div>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

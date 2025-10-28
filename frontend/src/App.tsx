import { Route, Routes } from "react-router-dom";
import { ConnectRavelry } from "./components/ConnectRavelry";
import DashboardLayout from "./components/DashboardLayout";
import { Home } from "./components/Home";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import { useCurrentUser } from "./lib/hooks/useAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              isLoading ? (
                <p>Loading...</p>
              ) : user?.id ? (
                <DashboardLayout />
              ) : (
                <Home />
              )
            }
          />
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
              <Route index path="library" element={<div>Library</div>} />
              <Route path="projects" element={<div>Projects</div>} />
              <Route path="tools" element={<div>Tools</div>} />
              <Route path="connect-ravelry" element={<ConnectRavelry />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

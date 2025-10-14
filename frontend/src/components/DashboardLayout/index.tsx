import { Outlet } from "react-router-dom";
import { TabsList } from "../TabsList";

export default function DashboardLayout() {
  return (
    <div>
      <TabsList />
      <Outlet />
    </div>
  );
}

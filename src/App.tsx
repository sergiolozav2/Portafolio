import { Outlet } from "react-router-dom";
import { Navbar } from "./modules/Shared/components/Navbar";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

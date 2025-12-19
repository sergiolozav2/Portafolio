import { Navbar } from "./modules/Shared/components/Navbar";
import { HomePage } from "./modules/Home/HomePage";
import Clarity from "@microsoft/clarity";

const projectId = "uo5tzg3uw8";

Clarity.init(projectId);

function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;

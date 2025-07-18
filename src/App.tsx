import { Navbar } from "./modules/Shared/components/Navbar";
import { HomePage } from "./modules/Home/HomePage";

function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;

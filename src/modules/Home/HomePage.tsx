import { StarsBackground } from "../Shared/components/StarsBackground";
import { WelcomePage } from "../Welcome/Welcome";
import './styles.css'

export function HomePage() {
  return (
    <div className="radial-background min-h-screen">
      <WelcomePage />
      <StarsBackground />
    </div>
  );
}

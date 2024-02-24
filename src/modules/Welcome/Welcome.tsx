import { TypeAnimationText } from "./Components/TypeAnimationText";

export function WelcomePage() {
  return (
    <div className="flex flex-col">
      <TypeAnimationText
        className="text-lg"
        text="1234567890123456789"
        duration={5000}
      />
    </div>
  );
}

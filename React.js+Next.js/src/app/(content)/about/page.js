import TheInstructions from "@/components/TheInstructions";
import AboutEffects from "./effects";

export const metadata = {
  title: 'Sobre',
};

export default function About() {
  return (
    <>
      <AboutEffects />
      <TheInstructions />
    </>
  );
}
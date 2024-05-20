import TheInstructions from "@/components/TheInstructions";
import TheSubheader from "@/components/TheSubheader";

export const metadata = {
  title: 'Sobre',
};

export default function About() {
  return (
    <>
      <TheSubheader title="Sobre"/>
      <TheInstructions />
    </>
  );
}
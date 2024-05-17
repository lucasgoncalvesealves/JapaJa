import TheNearby from "@/components/TheSearch";
import NearbyEffects from "./effects";

export const metadata = {
  title: 'Sobre',
};

export default function About() {
  return (
    <>
      <NearbyEffects />
      <TheNearby />
    </>
  );
}
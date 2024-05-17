import TheNearby from "@/components/TheSearch";
import NearbyEffects from "./effects";

export const metadata = {
  title: 'Por Perto',
};

export default function About() {
  return (
    <>
      <NearbyEffects />
      <TheNearby />
    </>
  );
}

import TheNearby from "@/components/TheSearch";
import TheSubheader from "@/components/TheSubheader";

export const metadata = {
  title: 'Por Perto',
};

export default function About() {
  return (
    <>
      <TheSubheader title="Por Perto" />
      <TheNearby />
    </>
  );
}
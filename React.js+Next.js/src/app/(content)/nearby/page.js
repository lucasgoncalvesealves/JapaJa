import TheNearby from "@/components/TheNearby";
import TheSubheader from "@/components/TheSubheader";

export const metadata = {
  title: 'Por Perto',
};

export default function Nearby() {
  return (
    <>
      <TheSubheader title="Por Perto" />
      <TheNearby />
    </>
  );
}

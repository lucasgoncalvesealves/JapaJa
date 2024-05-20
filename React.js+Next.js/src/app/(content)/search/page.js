import TheSearch from "@/components/TheSearch";
import TheSubheader from "@/components/TheSubheader";

export const metadata = {
  title: 'Resultados',
};

export default function About() {
  return (
    <>
      <TheSubheader title="Resultados" />
      <TheSearch />
    </>
  );
}
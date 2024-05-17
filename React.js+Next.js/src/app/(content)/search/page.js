import TheSearch from "@/components/TheSearch";
import SearchEffects from "./effects";

export const metadata = {
  title: 'Resultados',
};

export default function About() {
  return (
    <>
      <SearchEffects />
      <TheSearch />
    </>
  );
}

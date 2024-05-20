import TheContactForm from "@/components/TheContactForm";
import TheSubheader from "@/components/TheSubheader";

export const metadata = {
  title: 'Contato',
};

export default function Contact() {
  return (
    <>
      <TheSubheader title="Contato" />
      <TheContactForm />
    </>
  );
}
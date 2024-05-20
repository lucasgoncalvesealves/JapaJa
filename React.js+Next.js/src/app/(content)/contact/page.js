import TheContactForm from "@/components/TheContactForm";
import TheSubheader from "@/components/TheSubheader";

export const metadata = {
  title: 'Contato',
};

export default function Contact({defineTitle}) {
  return (
    <>
      <TheSubheader title="Contato" />
      <TheContactForm />
    </>
  );
}
import TheContactForm from "@/components/TheContactForm";
import ContactEffects from "./effects";

export const metadata = {
  title: 'Contato',
};

export default function Contact({defineTitle}) {
  return (
    <>
      <ContactEffects />
      <TheContactForm />
    </>
  );
}
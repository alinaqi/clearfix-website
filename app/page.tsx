import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reviews } from "@/components/Reviews";
import { QuoteForm } from "@/components/QuoteForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <BeforeAfter />
        <Reviews />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}

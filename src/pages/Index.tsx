import { useRef } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Audience from "@/components/landing/Audience";
import About from "@/components/landing/About";
import PilotForm from "@/components/landing/PilotForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onRequestAccess={scrollToForm} />
      <main>
        <Hero onRequestAccess={scrollToForm} />
        <Problem />
        <HowItWorks />
        <Features />
        <Audience />
        <About />
        <PilotForm ref={formRef} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

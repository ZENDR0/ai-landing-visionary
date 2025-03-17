
"use client";

import { Background } from "@/components/ui/background";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";

import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import BlogSection from "@/components/sections/BlogSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import AiChatSection from "@/components/sections/AiChatSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      
      <main className="content-container">
        <HeroSection />
        <AiChatSection />
        <ClientsSection />
        <ServicesSection />
        <StatsSection />
        <CaseStudiesSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppWidget phoneNumber="1234567890" />
    </div>
  );
};

export default Index;

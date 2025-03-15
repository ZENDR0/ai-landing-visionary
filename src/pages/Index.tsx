
"use client";

import { Hero } from "@/components/ui/animated-hero";
import { Background } from "@/components/ui/background";
import { Navbar } from "@/components/ui/navbar";
import { Logos3 } from "@/components/ui/logos3";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section";
import { Gallery4 } from "@/components/ui/gallery4";
import { CTASection } from "@/components/ui/cta-section";
import { Testimonials } from "@/components/ui/testimonials";
import { Stats } from "@/components/ui/stats";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      
      <main>
        <section id="hero" className="pt-24">
          <Hero />
        </section>
        
        <section id="clients" className="py-10">
          <Logos3 heading="Trusted by Industry Leaders" />
        </section>
        
        <section id="services" className="py-16">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our AI Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive suite of AI and ML solutions to help your business harness the power of artificial intelligence.
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </section>
        
        <section id="stats" className="py-8">
          <Stats />
        </section>
        
        <section id="case-studies">
          <Gallery4 />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="cta">
          <CTASection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

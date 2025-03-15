
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
          {/* Using the default items from the Gallery4 component by passing the imported data */}
          <Gallery4 
            title="Case Studies" 
            description="See how our AI solutions have transformed businesses across industries with measurable, impactful results."
            items={[
              {
                id: "case-1",
                title: "Predictive Maintenance for Manufacturing",
                description: "Implemented ML algorithms to predict equipment failures, reducing downtime by 37% and maintenance costs by 25% for a global manufacturing company.",
                href: "#",
                image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=1470&auto=format&fit=crop"
              },
              {
                id: "case-2",
                title: "Computer Vision for Retail Analytics",
                description: "Developed a vision system to analyze customer behavior and optimize store layouts, increasing sales conversion by 18% for a retail chain.",
                href: "#",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop"
              },
              {
                id: "case-3",
                title: "NLP for Customer Support Automation",
                description: "Created an intelligent chat system that resolved 75% of customer inquiries without human intervention, improving response time by 90%.",
                href: "#",
                image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1470&auto=format&fit=crop"
              },
              {
                id: "case-4",
                title: "AI-Driven Financial Forecasting",
                description: "Built predictive models for financial markets, achieving 22% better performance than traditional forecasting methods for an investment firm.",
                href: "#",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
              },
              {
                id: "case-5",
                title: "Healthcare Diagnostics System",
                description: "Developed an AI system that analyzes medical images to assist diagnosis, improving accuracy by 28% and reducing time to diagnosis by 50%.",
                href: "#",
                image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1528&auto=format&fit=crop"
              }
            ]}
          />
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


"use client";

import { Hero } from "@/components/ui/animated-hero";
import { Background } from "@/components/ui/background";
import { Navbar } from "@/components/ui/navbar";
import { Logos3 } from "@/components/ui/logos3";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section";
import { Gallery6 } from "@/components/ui/gallery6";
import { CTASection } from "@/components/ui/cta-section";
import { Testimonial } from "@/components/ui/testimonial-card";
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
          <Gallery6 
            heading="Case Studies" 
            demoUrl="#contact"
            items={[
              {
                id: "case-1",
                title: "Predictive Maintenance for Manufacturing",
                summary: "Implemented ML algorithms to predict equipment failures, reducing downtime by 37% and maintenance costs by 25% for a global manufacturing company.",
                url: "#",
                image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=1470&auto=format&fit=crop"
              },
              {
                id: "case-2",
                title: "Computer Vision for Retail Analytics",
                summary: "Developed a vision system to analyze customer behavior and optimize store layouts, increasing sales conversion by 18% for a retail chain.",
                url: "#",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop"
              },
              {
                id: "case-3",
                title: "NLP for Customer Support Automation",
                summary: "Created an intelligent chat system that resolved 75% of customer inquiries without human intervention, improving response time by 90%.",
                url: "#",
                image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1470&auto=format&fit=crop"
              },
              {
                id: "case-4",
                title: "AI-Driven Financial Forecasting",
                summary: "Built predictive models for financial markets, achieving 22% better performance than traditional forecasting methods for an investment firm.",
                url: "#",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
              },
              {
                id: "case-5",
                title: "Healthcare Diagnostics System",
                summary: "Developed an AI system that analyzes medical images to assist diagnosis, improving accuracy by 28% and reducing time to diagnosis by 50%.",
                url: "#",
                image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1528&auto=format&fit=crop"
              }
            ]}
          />
        </section>
        
        <section id="testimonials" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Client Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from our clients about how our AI solutions have transformed their businesses.
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Testimonial 
                name="Sarah Johnson"
                role="CTO"
                company="TechInnovate"
                testimonial="Their AI solutions have completely transformed our manufacturing processes. The predictive maintenance system they built has saved us millions in downtime costs and extended the life of our equipment."
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop"
                rating={5}
              />
              <Testimonial 
                name="Michael Chen"
                role="Director of Innovation"
                company="RetailPlus"
                testimonial="The computer vision system implemented by the team has given us unprecedented insights into customer behavior. We've been able to optimize our store layouts and increase sales by double digits."
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop"
                rating={5}
              />
              <Testimonial 
                name="Elena Rodriguez"
                role="VP of Customer Experience"
                company="ServiceFirst"
                testimonial="Our customer support has been revolutionized by the NLP system they built. Response times are down 90%, customer satisfaction is up, and we've actually reduced costs while handling more inquiries."
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
                rating={5}
              />
            </div>
          </div>
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


import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Our AI Services</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-center">
          We offer a comprehensive suite of AI and ML solutions to help your business harness the power of artificial intelligence.
        </p>
      </div>
      <FeaturesSectionWithHoverEffects />
    </section>
  );
};

export default ServicesSection;

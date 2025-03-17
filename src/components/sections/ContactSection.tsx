
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleContactClick = () => {
    const subject = "Inquiry about AI Solutions";
    const body = `
Hello AIVision Team,

I'm interested in learning more about your AI solutions for my business. 

My specific area of interest is: [please specify your industry/needs]

Could you please provide more information about your services and how they might benefit my organization?

Thank you,
[Your Name]
[Your Company]
[Your Contact Information]
    `.trim();

    const mailtoLink = `mailto:contact@aivision.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl my-12 light-theme:bg-black/5 light-theme:border-black/10">
      <div className="content-container flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 light-theme:text-gray-900">Contact Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 light-theme:text-gray-600">
          Ready to leverage AI for your business? Our team of experts is ready to help you
          implement cutting-edge AI solutions tailored to your specific needs.
        </p>
        <Button onClick={handleContactClick} size="lg" className="gap-2 light-theme:bg-gray-900 light-theme:text-white">
          Send us a message <Mail className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;

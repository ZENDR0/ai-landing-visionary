
import { Gallery6 } from "@/components/ui/gallery6";

const CaseStudiesSection = () => {
  return (
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
  );
};

export default CaseStudiesSection;


import { Testimonial } from "@/components/ui/testimonial-card";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Client Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center">
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
  );
};

export default TestimonialsSection;

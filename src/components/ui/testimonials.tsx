
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO, TechInnovate",
    content: "Their AI solutions have completely transformed our manufacturing processes. The predictive maintenance system they built has saved us millions in downtime costs and extended the life of our equipment.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    title: "Director of Innovation, RetailPlus",
    content: "The computer vision system implemented by the team has given us unprecedented insights into customer behavior. We've been able to optimize our store layouts and increase sales by double digits.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    title: "VP of Customer Experience, ServiceFirst",
    content: "Our customer support has been revolutionized by the NLP system they built. Response times are down 90%, customer satisfaction is up, and we've actually reduced costs while handling more inquiries.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Client Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our clients about how our AI solutions have transformed their businesses.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 pointer-events-auto hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 pointer-events-auto hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-8 p-8 md:p-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0, 
                  x: index === activeIndex ? 0 : 100,
                  display: index === activeIndex ? 'flex' : 'none'
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-spektr-cyan-50/50"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <svg className="h-10 w-10 text-spektr-cyan-50 mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="text-lg md:text-xl mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-spektr-cyan-50" : "bg-white/20"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonials };

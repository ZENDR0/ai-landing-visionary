
"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="px-4 py-1.5 text-xs font-medium border border-white/20 rounded-full bg-white/5 backdrop-blur-sm inline-block mb-6">
            Ready to transform your business?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's build the future with <span className="text-spektr-cyan-50">AI</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Partner with us to leverage the power of artificial intelligence and machine learning
            to solve your most complex business challenges and unlock new opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Schedule a consultation <MessagesSquare className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 rounded-full bg-spektr-cyan-50/20 blur-[100px] pointer-events-none" 
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </section>
  );
};

export { CTASection };

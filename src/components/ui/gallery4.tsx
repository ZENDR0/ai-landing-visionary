
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "case-1",
    title: "Predictive Maintenance for Manufacturing",
    description:
      "Implemented ML algorithms to predict equipment failures, reducing downtime by 37% and maintenance costs by 25% for a global manufacturing company.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "case-2",
    title: "Computer Vision for Retail Analytics",
    description:
      "Developed a vision system to analyze customer behavior and optimize store layouts, increasing sales conversion by 18% for a retail chain.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "case-3",
    title: "NLP for Customer Support Automation",
    description:
      "Created an intelligent chat system that resolved 75% of customer inquiries without human intervention, improving response time by 90%.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "case-4",
    title: "AI-Driven Financial Forecasting",
    description:
      "Built predictive models for financial markets, achieving 22% better performance than traditional forecasting methods for an investment firm.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
  },
  {
    id: "case-5",
    title: "Healthcare Diagnostics System",
    description:
      "Developed an AI system that analyzes medical images to assist diagnosis, improving accuracy by 28% and reducing time to diagnosis by 50%.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1528&auto=format&fit=crop",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description = "See how our AI solutions have transformed businesses across industries with measurable, impactful results.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-center text-center md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="mt-8 hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[280px] pl-[20px] lg:max-w-[320px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[22rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/6] lg:aspect-[3/4]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black via-black/70 to-transparent mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-5 text-primary-foreground md:p-6">
                      <div className="mb-2 text-lg font-semibold md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-6 line-clamp-3 text-sm text-gray-200">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm text-white/90">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-spektr-cyan-50" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };

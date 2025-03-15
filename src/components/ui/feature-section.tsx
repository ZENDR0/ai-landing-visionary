
import { cn } from "@/lib/utils";
import {
  IconBrain,
  IconRobot,
  IconChartBar,
  IconServer,
  IconDeviceAnalytics,
  IconCode,
  IconCloudComputing,
  IconDatabase,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Machine Learning",
      description:
        "Advanced ML models to extract insights and identify patterns from complex data.",
      icon: <IconBrain className="w-6 h-6" />,
    },
    {
      title: "Computer Vision",
      description:
        "Powerful visual recognition systems for object detection and image analysis.",
      icon: <IconRobot className="w-6 h-6" />,
    },
    {
      title: "Predictive Analytics",
      description:
        "Accurate forecasting and trend analysis to inform strategic business decisions.",
      icon: <IconChartBar className="w-6 h-6" />,
    },
    {
      title: "NLP & Text Analysis",
      description: "Sophisticated language processing for understanding and generating human text.",
      icon: <IconCode className="w-6 h-6" />,
    },
    {
      title: "AI Integration",
      description:
        "Seamless AI integration into existing systems and business processes.",
      icon: <IconServer className="w-6 h-6" />,
    },
    {
      title: "Data Engineering",
      description:
        "Robust data pipelines and infrastructure to support AI/ML applications.",
      icon: <IconDatabase className="w-6 h-6" />,
    },
    {
      title: "Custom AI Solutions",
      description:
        "Tailor-made AI systems designed for your specific business needs and challenges.",
      icon: <IconDeviceAnalytics className="w-6 h-6" />,
    },
    {
      title: "Cloud AI Services",
      description: "Scalable cloud-based AI solutions for flexible deployment and scaling.",
      icon: <IconCloudComputing className="w-6 h-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-spektr-cyan-50">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-spektr-cyan-50 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

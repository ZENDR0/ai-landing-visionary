
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="content-container flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center w-full sm:text-left">
          Latest articles
        </h4>
        <Link to="/articles">
          <Button className="gap-4">
            View all articles <MoveRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">AI in Healthcare</h3>
          <p className="text-muted-foreground text-base">
            How artificial intelligence is revolutionizing diagnostics, patient care, and treatment planning.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">Machine Learning Basics</h3>
          <p className="text-muted-foreground text-base">
            An introduction to machine learning concepts and applications for businesses of all sizes.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">NLP Breakthroughs</h3>
          <p className="text-muted-foreground text-base">
            Recent advancements in natural language processing changing how businesses interact with data.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">AI Ethics</h3>
          <p className="text-muted-foreground text-base">
            Exploring ethical considerations and best practices for responsible AI development and implementation.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export { Blog };

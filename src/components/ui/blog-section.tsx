
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center w-full sm:text-left">
          Latest articles
        </h4>
        <Button className="gap-4">
          View all articles <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4">
            <img 
              src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1470&auto=format&fit=crop" 
              alt="AI-powered facial recognition" 
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl tracking-tight">The Future of AI in Facial Recognition</h3>
          <p className="text-muted-foreground text-base">
            Exploring how advanced neural networks are revolutionizing security systems and identity verification.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4">
            <img 
              src="https://images.unsplash.com/photo-1677442135968-6f8865ad0c95?q=80&w=1632&auto=format&fit=crop" 
              alt="Machine learning algorithms" 
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl tracking-tight">Machine Learning Breakthroughs</h3>
          <p className="text-muted-foreground text-base">
            How recent advancements in ML algorithms are creating more accurate predictive models.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1631&auto=format&fit=crop" 
              alt="AI in healthcare" 
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl tracking-tight">AI Transforming Healthcare</h3>
          <p className="text-muted-foreground text-base">
            Case studies on how our AI diagnostic tools are helping medical professionals save lives.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4">
            <img 
              src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1632&auto=format&fit=crop" 
              alt="Natural language processing" 
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl tracking-tight">NLP: Beyond Chatbots</h3>
          <p className="text-muted-foreground text-base">
            Exploring the advanced applications of natural language processing in business intelligence.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export { Blog };

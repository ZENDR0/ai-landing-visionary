
import { Background } from "@/components/ui/background";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    summary: "Discover how artificial intelligence is revolutionizing medical diagnostics, patient care, and treatment planning.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
    date: "June 15, 2023"
  },
  {
    id: 2,
    title: "Machine Learning: From Theory to Practice",
    summary: "A comprehensive guide to implementing machine learning algorithms in real-world business scenarios.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1465&auto=format&fit=crop",
    date: "July 3, 2023"
  },
  {
    id: 3,
    title: "Computer Vision: Seeing the World Through AI",
    summary: "How computer vision technology is transforming industries from retail to manufacturing with image recognition capabilities.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1632&auto=format&fit=crop",
    date: "August 22, 2023"
  },
  {
    id: 4,
    title: "Natural Language Processing Breakthroughs",
    summary: "Recent advancements in NLP are changing how businesses interact with customers and analyze text data.",
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=1470&auto=format&fit=crop",
    date: "September 10, 2023"
  },
  {
    id: 5,
    title: "AI Ethics and Responsible Innovation",
    summary: "Exploring the ethical considerations and best practices for developing AI systems that benefit society.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1474&auto=format&fit=crop",
    date: "October 5, 2023"
  },
  {
    id: 6,
    title: "Predictive Analytics for Business Growth",
    summary: "How predictive models can help businesses forecast trends, optimize operations, and drive strategic decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    date: "November 18, 2023"
  },
  {
    id: 7,
    title: "Deep Learning: Going Beyond Traditional ML",
    summary: "An in-depth look at neural networks and how they're enabling unprecedented capabilities in AI systems.",
    image: "https://images.unsplash.com/photo-1563722718828-df285bed8a5f?q=80&w=1469&auto=format&fit=crop",
    date: "December 7, 2023"
  },
  {
    id: 8,
    title: "AI-Powered Customer Experience",
    summary: "Transforming customer interactions through intelligent automation, personalization, and 24/7 support capabilities.",
    image: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=1470&auto=format&fit=crop",
    date: "January 14, 2024"
  }
];

const Articles = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      
      <main className="content-container py-16">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">AI Insights & Articles</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-16">
            Explore our collection of in-depth articles, case studies, and industry insights on artificial intelligence and machine learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="flex flex-col overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all cursor-pointer group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 text-sm text-muted-foreground">{article.date}</div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-spektr-cyan-50 transition-colors">{article.title}</h2>
                <p className="text-muted-foreground mb-6">{article.summary}</p>
                <div className="mt-auto">
                  <span className="text-spektr-cyan-50 text-sm font-medium group-hover:underline">Read more</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <Pagination className="mt-16">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Background } from "@/components/ui/background";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <Background />
      <div className="text-center z-10 glass-morphism p-12 rounded-xl max-w-lg">
        <h1 className="text-7xl font-bold mb-4 text-spektr-cyan-50">404</h1>
        <p className="text-2xl mb-8">Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild>
          <a href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

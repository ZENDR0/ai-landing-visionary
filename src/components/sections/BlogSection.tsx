
import { Blog } from "@/components/ui/blog-section";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section id="blog" className="py-16">
      <Blog />
      <div className="text-center mt-8">
        <Link to="/articles" className="text-spektr-cyan-50 hover:underline">
          View all articles
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;

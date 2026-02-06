import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

interface HeroProps {
  onRequestAccess: () => void;
}

const Hero = ({ onRequestAccess }: HeroProps) => {
  const handleRequestAccess = () => {
    trackCtaClick("request_pilot_access", "hero");
    onRequestAccess();
  };

  return (
    <section className="section bg-background">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <h1 className="mb-6 text-balance">
              Navigate codes with{" "}
              <span className="text-primary">absolute certainty</span>
            </h1>
            <p className="mb-4 text-lg text-secondary-foreground md:text-xl">
              Upload your AEC codes, chat with your documents, and verify every answer with direct, side-by-side PDF previews.
            </p>
            <p className="mb-8 text-muted-foreground">
              Built for engineering consultancies that need fast, defensible answers from building codes and specifications.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleRequestAccess}
                className="group"
              >
                Book a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* Right: Product Illustration */}
          <div className="rounded-lg overflow-hidden border border-border shadow-xl scale-140 origin-top-left">
            <img
              src="/prototype-demo.gif"
              alt="Project Machine prototype demo - Code Compliance Tool showing PDF and chat interface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

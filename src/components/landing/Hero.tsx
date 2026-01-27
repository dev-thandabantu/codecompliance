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
              Design code compliance.{" "}
              <span className="text-primary">Instantly.</span>{" "}
              <span className="text-muted-foreground">With sources.</span>
            </h1>
            <p className="mb-4 text-lg text-secondary-foreground md:text-xl">
              Ask design code questions — get cited answers you can trust.
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
                Request pilot access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Pilot with limited firms · No training on your data
              </p>
            </div>
          </div>

          {/* Right: Product Illustration */}
          <div className="mockup-window">
            <div className="mockup-titlebar">
              <div className="mockup-dot bg-destructive/60" />
              <div className="mockup-dot bg-yellow-400/60" />
              <div className="mockup-dot bg-green-500/60" />
              <span className="ml-3 text-xs text-muted-foreground">Code Compliance Tool</span>
            </div>
            <div className="grid gap-0 lg:grid-cols-2">
              {/* PDF Panel */}
              <div className="border-r border-border p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
                    PDF
                  </div>
                  <span className="text-xs text-muted-foreground">AS 3600 — Concrete Structures</span>
                </div>
                <div className="space-y-2 text-xs">
                  <p className="text-muted-foreground">Section 8.1.6 — Cover requirements</p>
                  <div className="rounded bg-highlight p-2 border-l-2 border-primary">
                    <p className="font-medium text-foreground">8.1.6.1 Minimum cover</p>
                    <p className="mt-1 text-muted-foreground">
                      The cover to reinforcement shall be not less than the values given in Table 4.10.3.2...
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    For exposure classification B1, the minimum cover shall be 40mm for beams and 25mm for slabs...
                  </p>
                </div>
              </div>

              {/* Chat Panel */}
              <div className="p-4">
                <div className="mb-4">
                  <p className="mb-2 text-xs text-muted-foreground">Your question</p>
                  <div className="rounded-lg bg-secondary p-3">
                    <p className="text-sm text-secondary-foreground">
                      What is the minimum cover for reinforcement in a B1 exposure slab?
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs text-muted-foreground">Response</p>
                  <div className="rounded-lg border border-border bg-background p-3">
                    <p className="text-sm text-foreground">
                      For exposure classification B1, the minimum cover for slabs is <strong>25mm</strong>.
                    </p>
                    <p className="mt-2 text-xs text-primary">
                      Source: AS 3600, Section 8.1.6.1, Table 4.10.3.2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

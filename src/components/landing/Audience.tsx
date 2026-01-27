import { CheckCircle2 } from "lucide-react";

const Audience = () => {
  const audiences = [
    "Structural and civil engineering consultancies",
    "Multidisciplinary engineering firms",
  ];

  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="mb-8 text-center">Who this is for</h2>
        <p className="mb-8 text-center text-muted-foreground">
          This pilot is designed for:
        </p>

        <div className="mx-auto max-w-md space-y-4">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 rounded-lg border border-border bg-background p-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-secondary-foreground">{audience}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;

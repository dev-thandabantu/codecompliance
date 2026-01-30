import { Link2, Workflow, ShieldCheck, Building2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Link2,
      title: "Source-linked answers",
      description: "Every response is backed by the exact design code clause shown in a PDF previewer.",
    },
    {
      icon: Workflow,
      title: "Follows your existing workflows",
      description: "Mirrors how AEC professionals already interpret and apply codes.",
    },
    {
      icon: ShieldCheck,
      title: "No training on your data or queries",
      description: "Your data and queries are not used to train our agents.",
    },
    {
      icon: Building2,
      title: "Designed by and for the construction industry",
      description: "Our team brings decades of experience working in the AEC industry.",
    },
  ];

  return (
    <section className="section-alt">
      <div className="container-wide">
        <h2 className="mb-12 text-center">Built to give confidence in working with AI</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h4 className="mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

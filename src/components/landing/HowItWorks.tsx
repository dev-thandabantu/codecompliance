const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Select your jurisdiction and design context",
      description: "Choose the relevant building codes and project parameters",
    },
    {
      number: 2,
      title: "Ask a design code or specification question",
      description: "Type your question in plain language, as you would ask a colleague",
    },
    {
      number: 3,
      title: "Receive an answer with highlighted source clauses",
      description: "Get a clear response with direct links to the original code sections",
    },
    {
      number: 4,
      title: "Export requirements into your checklist or report",
      description: "Integrate findings directly into your documentation workflow",
    },
  ];

  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="mb-4 text-center">How it works</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          No black-box answers. Every output is traceable to the original code.
        </p>

        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-4 top-8 hidden h-[calc(100%-4rem)] w-px bg-border md:left-[1.875rem] md:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-6">
                <div className="step-number shrink-0 relative z-10">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h4 className="mb-1">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

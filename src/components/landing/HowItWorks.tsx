const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload your standards and design codes",
      description: "Import your AEC documents, standards, and specifications",
    },
    {
      number: 2,
      title: "Chat with your documents",
      description: "Type your questions in plain language as you would ask a colleague",
    },
    {
      number: 3,
      title: "Receive an answer with highlighted source clauses",
      description: "Get a clear view of where the references come from with a PDF previewer with highlighted sections",
    },
    {
      number: 4,
      title: "Export requirements into a checklist or report",
      description: "Navigation of codes always results in a to-do list for AEC professionals to implement",
    },
  ];

  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="mb-4 text-center">How it works</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          No black-box answers, every output is traceable to the original code without window switching.
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

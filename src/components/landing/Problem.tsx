import { Search, Copy, AlertCircle } from "lucide-react";

const Problem = () => {
  const painPoints = [
    {
      icon: Search,
      text: "Searching through PDFs to find the relevant clause",
    },
    {
      icon: Copy,
      text: "Copy-pasting text into ChatGPT and double-checking anyway",
    },
    {
      icon: AlertCircle,
      text: "Worrying whether a requirement was missed or misinterpreted",
    },
  ];

  return (
    <section className="section-alt">
      <div className="container-narrow">
        <h2 className="mb-4 text-center text-balance">
          Why design code compliance is still slow and risky
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Every engineer knows this workflow:
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <div key={index} className="feature-card flex flex-col items-start gap-4">
              <div className="rounded-lg bg-muted p-3">
                <point.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-secondary-foreground">{point.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          Compliance work is daily, unavoidable, and high-risk — yet poorly tooled.
        </p>
      </div>
    </section>
  );
};

export default Problem;

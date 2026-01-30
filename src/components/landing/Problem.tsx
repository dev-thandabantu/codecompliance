import { Zap, GitBranch, Eye, Cpu } from "lucide-react";

const Problem = () => {
  const risks = [
    {
      icon: Zap,
      title: "Hallucinations create mistrust",
      text: "PDF search with AI remains slow due to hallucinations that undermines confidence in the answers.",
    },
    {
      icon: GitBranch,
      title: "Reference switching ignored",
      text: "Existing AI document software doesn't account for the switching between references that AEC professionals undertake.",
    },
    {
      icon: Eye,
      title: "Source verification is mandatory",
      text: "AEC professionals will always need to view the source even if AI summaries have no hallucinations.",
    },
    {
      icon: Cpu,
      title: "Generic AI training",
      text: "Existing AI agents are not trained with specific AEC context and workflows.",
    },
  ];

  return (
    <section className="section-alt">
      <div className="container-wide">
        <h2 className="mb-4 text-center text-balance">
          Why design code search is still slow and risky with AI
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Every AEC professional knows this workflow
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {risks.map((risk, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4 rounded-lg bg-destructive/10 p-3 w-fit">
                <risk.icon className="h-5 w-5 text-destructive" />
              </div>
              <h4 className="mb-2 text-foreground">{risk.title}</h4>
              <p className="text-sm text-muted-foreground">{risk.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-background p-6 text-center">
          <p className="text-muted-foreground">
            <strong>The reality:</strong> Human-in-the-loop will always be needed and our tools need to reflect that.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;

import { Users } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Adam",
      role: "Machine Learning / AI Engineer",
    },
    {
      name: "Brighton",
      role: "Full Stack Web Dev + Repeat Founder",
    },
    {
      name: "Nicholas",
      role: "Professional Registered Bridge Engineer & Project Manager",
    },
  ];

  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="mb-4 text-center">About us</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Project Machine is built by engineers, for engineers. Our team brings deep expertise across AI, full-stack development, and the AEC industry.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h4 className="mb-2">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

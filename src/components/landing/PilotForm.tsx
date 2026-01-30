import { useState, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { trackFormSubmission, trackRoleSelection } from "@/lib/analytics";

interface FormData {
  fullName: string;
  company: string;
  role: string;
  email: string;
  designCodes: string;
}

const PilotForm = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    role: "",
    email: "",
    designCodes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Track role selection
    if (name === "role" && value) {
      trackRoleSelection(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Track form submission with role
      trackFormSubmission("pilot_form", {
        role: formData.role,
      });

      const { error: submitError } = await supabase
        .from("pilot_submissions")
        .insert({
          full_name: formData.fullName.trim(),
          company: formData.company.trim(),
          role: formData.role.trim(),
          email: formData.email.trim().toLowerCase(),
          design_codes: formData.designCodes.trim() || null,
        });

      if (submitError) {
        throw submitError;
      }

      setIsSubmitted(true);
      toast({
        title: "Request submitted",
        description: "We'll be in touch shortly.",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again.");
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section ref={ref} id="pilot-form" className="section-alt">
        <div className="container-narrow">
          <div className="mx-auto max-w-lg rounded-lg border border-border bg-background p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2">Demo request received</h3>
            <p className="text-muted-foreground">
              Thank you for your interest. We'll be in touch shortly to book your demo.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Limited 5 pilot spaces available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="pilot-form" className="section-alt">
      <div className="container-narrow">
        <div className="mx-auto max-w-lg">
          <h2 className="mb-4 text-center">Get in touch</h2>
          <p className="mb-2 text-center text-muted-foreground">
            Free your team from the drudgery of searching through codes:
          </p>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Fill out the form below to get a demo with our team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-background p-6 md:p-8">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="form-label">
                Full name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
                placeholder="Jane Smith"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="form-label">
                Company <span className="text-destructive">*</span>
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="form-input"
                placeholder="Smith Engineering Pty Ltd"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="form-label">
                Role <span className="text-destructive">*</span>
              </Label>
              <Input
                id="role"
                name="role"
                type="text"
                required
                value={formData.role}
                onChange={handleChange}
                className="form-input"
                placeholder="Senior Structural Engineer"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="form-label">
                Work email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="jane@smithengineering.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="designCodes" className="form-label">
                Which design codes do you work with? <span className="text-muted-foreground">(Optional)</span>
              </Label>
              <Textarea
                id="designCodes"
                name="designCodes"
                value={formData.designCodes}
                onChange={handleChange}
                className="form-input min-h-[80px] resize-none"
                placeholder="e.g., AS 3600, AS 4100, NCC, etc."
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="xl" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book a demo"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
});

PilotForm.displayName = "PilotForm";

export default PilotForm;

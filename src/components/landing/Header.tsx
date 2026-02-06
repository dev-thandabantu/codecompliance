import { Button } from "@/components/ui/button";

interface HeaderProps {
  onRequestAccess: () => void;
}

const Header = ({ onRequestAccess }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-wide flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Project Machine" className="h-10 w-10" />
          <span className="font-medium text-foreground">Project Machine</span>
        </div>
        <Button variant="default" size="sm" onClick={onRequestAccess}>
          Book a demo
        </Button>
      </div>
    </header>
  );
};

export default Header;

import { Button } from "@/components/ui/button";

interface HeaderProps {
  onRequestAccess: () => void;
}

const Header = ({ onRequestAccess }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-wide flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-semibold text-primary-foreground">CN</span>
          </div>
          <span className="font-medium text-foreground">CodeNav</span>
        </div>
        <Button variant="default" size="sm" onClick={onRequestAccess}>
          Book a demo
        </Button>
      </div>
    </header>
  );
};

export default Header;

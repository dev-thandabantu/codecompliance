const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container-wide">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Project Machine" className="h-6 w-6" />
            <span className="text-sm text-muted-foreground">Project Machine</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Project Machine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

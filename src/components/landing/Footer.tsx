const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container-wide">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <span className="text-xs font-semibold text-primary-foreground">CC</span>
            </div>
            <span className="text-sm text-muted-foreground">CodeCompass</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeCompass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

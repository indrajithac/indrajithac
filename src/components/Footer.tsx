export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          <span className="text-primary">&lt;</span>Indrajith A C<span className="text-primary">/&gt;</span>
          {" "}© {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs">Built with React + Tailwind CSS</p>
      </div>
    </footer>
  );
}

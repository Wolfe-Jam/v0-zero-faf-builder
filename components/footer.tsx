export function Footer() {
  return (
    <footer className="py-12 px-4 text-center border-t border-border/50">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-lg text-foreground/90">
          Built with love by{' '}
          <a 
            href="https://twitter.com/wolfe_jam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[oklch(0.75_0.18_60)] hover:text-[oklch(0.85_0.18_60)] font-bold transition-colors"
          >
            @wolfe_jam
          </a>
        </p>
        <p className="text-lg text-foreground/90">
          Dedicated to{' '}
          <a 
            href="https://twitter.com/elonmusk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[oklch(0.75_0.18_60)] hover:text-[oklch(0.85_0.18_60)] font-bold transition-colors"
          >
            @elonmusk
          </a>
          {' '}and the #1 model
        </p>
        <div className="pt-2">
          <span className="pulse-heart text-3xl">🧡</span>
        </div>
      </div>
    </footer>
  )
}

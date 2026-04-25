import QuantumSphere from '../components/QuantumSphere';

export default function Hero() {
  const handleGetQuote = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <QuantumSphere />

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-6 animate-fade-in-up">
          China Sourcing Experts
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-medium text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Connecting Global Brands
          <br />
          <span className="text-[#FF5722]">to Elite Manufacturing</span>
        </h1>
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          From factory floor to your doorstep — we handle sourcing, quality control, and global logistics. Direct access to verified Chinese manufacturers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <button
            onClick={handleGetQuote}
            className="px-8 py-4 bg-[#FF5722] text-white font-semibold text-sm tracking-wide hover:bg-[#E64A19] transition-all duration-300 hover:scale-105"
          >
            Start Sourcing
          </button>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border border-white/30 text-white font-medium text-sm tracking-wide hover:border-[#FF5722] hover:text-[#FF5722] transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}

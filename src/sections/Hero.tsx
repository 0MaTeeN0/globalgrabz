import { Suspense, lazy } from 'react';
const QuantumSphere = lazy(() => import('../components/QuantumSphere'));
const showSphere = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;

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
      {showSphere && <Suspense fallback={null}><QuantumSphere /></Suspense>}<div className="absolute inset-0 z-[8] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.2) 100%)' }} />

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-medium text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          China Sourcing Experts
          <br />
          <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] text-[#E64A19]">We Source. We Locate. We Deliver.</span>
        </h1>
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          We find verified factories, inspect every order on the ground and deliver right to your door. Trusted by buyers across the USA, Europe, Australia, Asia and the Middle East.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <button
            onClick={handleGetQuote}
            className="px-8 py-4 bg-[#E64A19] text-white font-semibold text-sm tracking-wide hover:bg-[#D84315] transition-all duration-300 hover:scale-105"
          >
            Start Sourcing
          </button>
          <a
            href="/track"
            className="px-8 py-4 border border-white/30 text-white font-medium text-sm tracking-wide hover:border-[#E64A19] hover:text-[#E64A19] transition-all duration-300"
          >
            Track Shipment
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}

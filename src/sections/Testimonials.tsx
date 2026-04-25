import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'CEO, TechVault Electronics',
    content: 'Global Grabz has been instrumental in scaling our electronics line. Their factory network in Shenzhen is unmatched and the quality control is rigorous.',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Founder, Lumina Home',
    content: 'We were nervous about sourcing from China for the first time. Global Grabz held our hand through the entire process and delivered beyond expectations.',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'Director, Nexureco',
    content: 'The team at Global Grabz understands the apparel business. They found us factories that deliver consistent quality at prices that keep us competitive.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Procurement Head, AutoGear International',
    content: 'From sourcing auto parts to managing complex logistics, Global Grabz handles it all. Their on-ground presence in China gives us complete confidence.',
    rating: 5,
  },
  {
    name: 'Emily Zhang',
    role: 'Brand Manager, PlayWell Toys',
    content: 'Safety certifications were our top priority for kids products. Global Grabz ensured every item met international standards before shipping.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'COO, Nordic Living Co.',
    content: "We have worked with Global Grabz for 3 years now. Their reliability and transparency have made them our exclusive sourcing partner for all China manufacturing.",
    rating: 5,
  },
];

export default function Testimonials() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative w-full bg-black py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20" ref={headerRef}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-4">
            Client Feedback
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-5">
            What Our Clients Say
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Trusted by businesses worldwide for reliable China sourcing and quality manufacturing.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={gridRef}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-panel p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-500 group"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#FF5722]" fill="#FF5722" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

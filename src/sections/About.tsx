import { useScrollReveal } from '../hooks/useScrollReveal';
import { Globe, Shield, Truck } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Factories Visited' },
  { number: '50+', label: 'Countries Served' },
  { number: '10K+', label: 'Products Sourced' },
  { number: '98%', label: 'Client Satisfaction' },
];

const highlights = [
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Serving clients across 50+ countries with seamless international logistics.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    desc: 'Rigorous on-ground inspections at every stage of production.',
  },
  {
    icon: Truck,
    title: 'End-to-End Delivery',
    desc: 'From factory audit to doorstep delivery — we handle everything.',
  },
];

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const statsRef = useScrollReveal<HTMLDivElement>();
  const contentRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative w-full bg-black py-24 lg:py-32" ref={sectionRef}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 lg:mb-28"
          ref={statsRef}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <p className="font-display text-4xl lg:text-5xl xl:text-6xl text-white mb-2">
                {stat.number}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" ref={contentRef}>
          {/* Text */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-4">
              About Global Grabz
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-8">
              Behind Every Product
              <br />
              <span className="text-white/60">Is a Journey</span>
            </h2>
            <div className="space-y-5 text-white/70 leading-relaxed">
              <p>
                We personally visit factories across China, inspect quality at every stage, and ensure every shipment meets our rigorous standards.
              </p>
              <p>
                From Shanghai to Shenzhen, we're on the ground making sure your products exceed expectations. Our team speaks the language, understands the culture, and works closely with top manufacturers.
              </p>
              <p>
                Whether you're an eCommerce brand, wholesaler, or startup — we simplify China sourcing so you can focus on growing your business.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group glass-panel p-6 lg:p-8 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#FF5722]/30 text-[#FF5722] shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF5722] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

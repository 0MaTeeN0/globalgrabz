import { useScrollReveal } from '../hooks/useScrollReveal';
import { Factory, ClipboardCheck, TrendingDown, Layers, Network, Globe } from 'lucide-react';

const reasons = [
  {
    icon: Factory,
    title: 'Direct Factory Access',
    desc: 'Skip the middlemen. We connect you directly with verified manufacturers for better pricing and control.',
  },
  {
    icon: ClipboardCheck,
    title: 'On-Ground Inspections',
    desc: 'Our team is physically present in China, visiting factories and inspecting production runs in real-time.',
  },
  {
    icon: TrendingDown,
    title: 'Competitive Pricing',
    desc: 'Leverage our factory relationships and bulk negotiation power to get the best possible prices.',
  },
  {
    icon: Layers,
    title: 'End-to-End Service',
    desc: 'From sourcing to shipping — one partner handles everything. No need to coordinate multiple vendors.',
  },
  {
    icon: Network,
    title: 'Strong Supplier Network',
    desc: 'Years of relationship-building across China give you access to the best factories, including exclusive ones.',
  },
  {
    icon: Globe,
    title: 'Global Shipping',
    desc: 'We handle logistics to any destination — air, sea, or express. Full tracking and customs support.',
  },
];

export default function WhyChooseUs() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative w-full bg-black py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20" ref={headerRef}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-4">
            Why Global Grabz
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-5">
            Why Choose Us
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            We don't just source products — we deliver peace of mind with every shipment.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
          ref={gridRef}
        >
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group bg-black p-8 lg:p-10 hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-[#FF5722] mb-6 group-hover:bg-[#FF5722]/10 group-hover:border-[#FF5722]/30 transition-all duration-500">
                <reason.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#FF5722] transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

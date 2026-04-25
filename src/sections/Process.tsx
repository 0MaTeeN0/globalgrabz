import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageSquare, Search, CheckCircle, Ship, Package } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Consultation',
    desc: 'Understanding your product requirements, target pricing, quality standards, and delivery timeline.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Sourcing',
    desc: 'Finding the best factories and suppliers. We tap our verified network and conduct new factory audits as needed.',
  },
  {
    num: '03',
    icon: CheckCircle,
    title: 'Quality Check',
    desc: 'On-site inspection and verification at every production stage. We catch issues before they become problems.',
  },
  {
    num: '04',
    icon: Ship,
    title: 'Logistics',
    desc: 'Handling all shipping, documentation, customs clearance, and compliance paperwork for smooth delivery.',
  },
  {
    num: '05',
    icon: Package,
    title: 'Delivery',
    desc: 'Safe and timely delivery worldwide. Your products arrive ready for sale — inspected, packaged, and compliant.',
  },
];

export default function Process() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const stepsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="process" className="relative w-full bg-black py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20" ref={headerRef}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-4">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-5">
            Our Process
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            A streamlined 5-step process from idea to delivery. Transparent, efficient, and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto" ref={stepsRef}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex gap-6 lg:gap-10 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 lg:left-8 top-16 bottom-0 w-px bg-white/10" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 shrink-0 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-black border border-white/20 group-hover:border-[#FF5722] group-hover:bg-[#FF5722]/10 transition-all duration-500">
                <step.icon size={20} className="text-white/60 group-hover:text-[#FF5722] transition-colors" />
              </div>

              {/* Content */}
              <div className="pt-1 lg:pt-2 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-sm text-[#FF5722]">
                    {step.num}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-[#FF5722] transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm lg:text-base text-white/60 leading-relaxed max-w-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

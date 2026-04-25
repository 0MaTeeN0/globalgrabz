import { useScrollReveal } from '../hooks/useScrollReveal';
import { Warehouse, Box, Wrench } from 'lucide-react';

const capabilities = [
  {
    icon: Warehouse,
    title: 'Factory Stock Access',
    desc: 'Immediate availability from our partner factories. Get products shipped within days, not weeks.',
  },
  {
    icon: Box,
    title: 'Bulk Production',
    desc: 'Handle large volume orders with ease. Our network scales from hundreds to millions of units.',
  },
  {
    icon: Wrench,
    title: 'Custom Manufacturing',
    desc: 'Bespoke designs, private labeling, and OEM/ODM services tailored to your specifications.',
  },
];

const images = [
  { src: './images/factory-real-1.jpg', alt: 'Chinese factory production line workers assembling products' },
  { src: './images/factory-real-2.jpg', alt: 'China logistics warehouse with shipping containers' },
  { src: './images/factory-6.jpg', alt: 'Quality control inspection of manufactured products' },
  { src: './images/factory-5.jpg', alt: 'International shipping port at dawn' },
];

export default function Factory() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const contentRef = useScrollReveal<HTMLDivElement>();
  const galleryRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative w-full bg-black py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mb-16 lg:mb-20" ref={headerRef}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-4">
            Manufacturing Power
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-5">
            Direct From Factory
          </h2>
          <p className="text-white/60 max-w-xl">
            Real factory relationships. Real production capacity. Real quality control — on the ground in China.
          </p>
        </div>

        {/* Content + Gallery */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: capabilities */}
          <div className="space-y-8" ref={contentRef}>
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex gap-5 group"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-white/20 text-[#FF5722] group-hover:bg-[#FF5722]/10 group-hover:border-[#FF5722]/30 transition-all duration-500">
                  <cap.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF5722] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-8 py-4 border border-[#FF5722] text-[#FF5722] font-semibold text-sm tracking-wide hover:bg-[#FF5722] hover:text-white transition-all duration-300"
              >
                Discuss Your Project
              </a>
            </div>
          </div>

          {/* Right: image gallery */}
          <div className="grid grid-cols-2 gap-4" ref={galleryRef}>
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${
                  i === 0 ? 'col-span-2 h-56' : 'h-40'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

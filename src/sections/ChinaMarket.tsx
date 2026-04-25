import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin } from 'lucide-react';

const locations = [
  {
    image: './images/market-4.jpg',
    title: 'Shanghai',
    subtitle: 'Financial Hub & Trade Center',
  },
  {
    image: './images/market-1.jpg',
    title: 'Yiwu',
    subtitle: 'World\'s Largest Wholesale Market',
  },
  {
    image: './images/market-2.jpg',
    title: 'Guangzhou',
    subtitle: 'Electronics & Manufacturing Hub',
  },
  {
    image: './images/market-3.jpg',
    title: 'Guangdong',
    subtitle: 'Textile & Apparel District',
  },
];

export default function ChinaMarket() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative w-full bg-black py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mb-16 lg:mb-20" ref={headerRef}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-4">
            On The Ground
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-5">
            China Markets We Cover
          </h2>
          <p className="text-white/60 max-w-xl">
            From Shanghai skyscrapers to Yiwu wholesale alleys — our team operates across China's major manufacturing and trading hubs.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6" ref={gridRef}>
          {locations.map((loc, i) => (
            <div
              key={i}
              className="group relative overflow-hidden h-64 lg:h-80"
            >
              <img
                src={loc.image}
                alt={`${loc.title} - ${loc.subtitle}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Location info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-[#FF5722]" />
                  <span className="text-xs uppercase tracking-[0.15em] text-[#FF5722] font-medium">
                    {loc.title}
                  </span>
                </div>
                <p className="text-white text-lg font-medium">{loc.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

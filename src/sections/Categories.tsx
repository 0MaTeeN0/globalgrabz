import { useScrollReveal } from '../hooks/useScrollReveal';
import { Shirt, Cpu, Car, Baby, Sofa, Settings } from 'lucide-react';

const categories = [
  {
    icon: Shirt,
    title: 'Apparel & Clothing',
    desc: 'Streetwear, activewear, formal wear, and custom fashion from certified garment factories.',
    image: './images/factory-3.jpg',
  },
  {
    icon: Cpu,
    title: 'Tech Accessories',
    desc: 'Phone cases, charging cables, audio devices, and smart gadgets with quality assurance.',
    image: './images/cat-tech.jpg',
  },
  {
    icon: Car,
    title: 'Automobiles & Parts',
    desc: 'Auto components, accessories, and aftermarket parts from specialized manufacturers.',
    image: './images/cat-auto.jpg',
  },
  {
    icon: Baby,
    title: 'Toys & Kids Products',
    desc: 'Educational toys, plush items, and children\'s products meeting international safety standards.',
    image: './images/cat-toys.jpg',
  },
  {
    icon: Sofa,
    title: 'Home & Lifestyle',
    desc: 'Decor, kitchenware, furniture, and lifestyle products for modern living brands.',
    image: './images/cat-home.jpg',
  },
  {
    icon: Settings,
    title: 'Custom Sourcing',
    desc: 'Have a unique product? We find manufacturers for any custom specification or design.',
    image: './images/factory-2.jpg',
  },
];

export default function Categories() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="categories" className="relative w-full bg-black py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20" ref={headerRef}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-4">
            What We Source
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-5">
            Product Categories
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            From apparel to electronics, we source a wide range of products from trusted Chinese manufacturers.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={gridRef}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden border border-white/10 hover:border-[#FF5722]/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-[#FF5722] text-white">
                  <cat.icon size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-black">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF5722] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

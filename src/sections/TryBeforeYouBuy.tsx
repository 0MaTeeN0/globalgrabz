import { useScrollReveal } from '../hooks/useScrollReveal';
import { Gift, CheckCircle } from 'lucide-react';

const benefits = [
  'Inspect material quality in person',
  'Verify sizing and specifications',
  'Test product functionality before bulk order',
  'Compare multiple factory samples side by side',
  'No obligation — sample cost only',
];

export default function TryBeforeYouBuy() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const contentRef = useScrollReveal<HTMLDivElement>();

  const handleRequest = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full bg-[#FF5722] py-20 lg:py-28 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" ref={contentRef}>
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white/20 flex items-center justify-center">
                <Gift size={28} className="text-white" />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                Risk-Free Ordering
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-6">
              Try Before You Buy!
            </h2>

            <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              We offer <strong className="text-white">FREE product samples</strong> so you can verify quality before placing bulk orders. See, touch, and test your products before committing to large quantities.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-white shrink-0" />
                  <span className="text-sm text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleRequest}
              className="px-8 py-4 bg-white text-[#FF5722] font-semibold text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              Request Free Sample
            </button>
          </div>

          {/* Right - Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 lg:h-48 overflow-hidden">
                  <img
                    src="./images/factory-real-1.jpg"
                    alt="Chinese factory production line"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-48 lg:h-56 overflow-hidden">
                  <img
                    src="./images/market-3.jpg"
                    alt="Chinese textile wholesale market"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 lg:h-56 overflow-hidden">
                  <img
                    src="./images/market-1.jpg"
                    alt="Yiwu wholesale market China"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-40 lg:h-48 overflow-hidden">
                  <img
                    src="./images/factory-real-2.jpg"
                    alt="China logistics warehouse"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

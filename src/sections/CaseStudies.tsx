import { useScrollReveal } from '../hooks/useScrollReveal';


const caseStudies = [
  {
    client: 'Nexureco',
    logo: './images/nexureco-logo.png',
    image: './images/case-nexureco.jpg',
    industry: 'Apparel & Clothing',
    challenge: 'Nexureco needed a reliable partner to source premium streetwear from China — consistent quality, on-time delivery, and competitive pricing for their growing eCommerce brand.',
    solution: 'We identified certified garment factories in Guangdong, conducted on-site quality audits, and established a streamlined production pipeline with weekly QC checks.',
    results: [
      '40% reduction in sourcing costs',
      '99.2% on-time delivery rate',
      'Zero quality complaints in 12 months',
    ],
    quote: 'Global Grabz transformed our supply chain. Their on-ground presence in China gives us confidence every order will meet our standards.',
  },
  {
    client: 'TechVault Electronics',
    logo: '',
    image: './images/factory-4.jpg',
    industry: 'Tech Accessories',
    challenge: 'A European electronics retailer needed 50,000+ units of wireless charging products with CE certification and custom branding within 8 weeks.',
    solution: 'We sourced a Shenzhen-based electronics manufacturer with CE certification, managed the OEM branding process, and conducted pre-shipment inspections.',
    results: [
      '50,000 units delivered in 7 weeks',
      'Full CE & RoHS compliance achieved',
      '15% under target budget',
    ],
    quote: 'The team at Global Grabz handled everything from factory vetting to customs documentation. Truly end-to-end service.',
  },
  {
    client: 'Lumina Home',
    logo: '',
    image: './images/cat-home.jpg',
    industry: 'Home & Lifestyle',
    challenge: 'A US home decor startup needed sustainable, high-quality ceramic and textile products with eco-friendly packaging for their launch.',
    solution: 'We connected them with eco-certified factories in Jingdezhen for ceramics and Nantong for textiles, managing sustainable packaging design.',
    results: [
      '12 unique SKUs developed',
      '100% eco-friendly packaging',
      'Launched on schedule for Q4 sales',
    ],
    quote: 'Global Grabz understood our sustainability vision and found factories that shared our values. The product quality exceeded expectations.',
  },
];

export default function CaseStudies() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="case-studies" className="relative w-full bg-black py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mb-16 lg:mb-20" ref={headerRef}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-4">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-5">
            Client Case Studies
          </h2>
          <p className="text-white/60 max-w-xl">
            Real results for real clients. See how we've helped businesses like yours succeed with China sourcing.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16 lg:space-y-24" ref={cardsRef}>
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#FF5722] text-white text-xs font-medium uppercase tracking-wider">
                  {study.industry}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                {/* Logo or Client name */}
                {study.logo ? (
                  <img
                    src={study.logo}
                    alt={study.client}
                    className="h-10 w-auto mb-6 bg-white/10 p-2"
                  />
                ) : (
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                    {study.client}
                  </h3>
                )}

                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#FF5722] mb-2">The Challenge</p>
                    <p className="text-sm text-white/60 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#FF5722] mb-2">Our Solution</p>
                    <p className="text-sm text-white/60 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {study.results.map((result, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 border border-white/20 text-xs text-white/80 font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-[#FF5722] pl-5 pt-2">
                    <p className="text-sm text-white/70 italic leading-relaxed">
                      "{study.quote}"
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

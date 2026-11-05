import { useState, createElement as h } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  { q: 'What does a China sourcing agent do?', a: 'A sourcing agent finds and verifies factories in China, negotiates prices and MOQs, follows production, checks quality and arranges shipping, so you deal with one team instead of many suppliers.' },
  { q: 'How do you find reliable factories in China?', a: 'We work from a verified supplier network and run new factory audits when needed. Our team visits factories in person and checks their capacity, certificates and track record before we recommend them.' },
  { q: 'What is MOQ and can it be negotiated?', a: 'MOQ is the minimum order quantity a factory accepts. It is often negotiable, especially for first orders, samples and private label products. We negotiate it for you.' },
  { q: 'Can I get samples before placing a bulk order?', a: 'Yes. You can request samples to check material, sizing and function, and compare several factories side by side before you commit to a large quantity.' },
  { q: 'How do you control product quality?', a: 'We combine on-site factory audits, in-production checks and pre-shipment inspections, so defects are caught before goods leave China.' },
  { q: 'Which countries do you ship to?', a: 'We arrange air, sea and express shipping to destinations worldwide, including consolidation, documentation and customs clearance support.' },
  { q: 'Can you help with product certifications like CE, RoHS or FDA?', a: 'Yes. We support certification and compliance paperwork for your destination market, and we work with factories that already hold the certificates you need.' },
  { q: 'Can you make custom or private label products?', a: 'Yes. We handle OEM and ODM production, custom packaging and your own branding, from sample development to mass production.' },
  { q: 'How do I get started?', a: 'Send us your product details, target price and quantity using the quote form. We will review your request and reply with the next steps.' },
  ];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return h('section', { id: 'faq', className: 'relative w-full bg-black py-24 lg:py-32' },
           h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(schema) } }),
           h('div', { className: 'absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' }),
           h('div', { className: 'w-full px-6 lg:px-12 xl:px-20' },
             h('div', { className: 'mb-12 lg:mb-16', ref: headerRef },
               h('p', { className: 'text-xs font-medium uppercase tracking-[0.2em] text-[#E64A19] mb-4' }, 'FAQ'),
               h('h2', { className: 'text-3xl md:text-4xl lg:text-[50px] font-medium text-white leading-[1.2] tracking-tight mb-5' }, 'Questions About Sourcing From China'),
               h('p', { className: 'text-white/60 max-w-xl' }, 'Straight answers to what importers ask us most before they start.')
               ),
             h('div', { className: 'max-w-3xl border-t border-white/10', ref: listRef },
               faqs.map((f, i) =>
                 h('div', { key: i, className: 'border-b border-white/10' },
                   h('button', { type: 'button', onClick: () => setOpen(open === i ? null : i), 'aria-expanded': open === i, className: 'w-full flex items-center justify-between gap-6 py-6 text-left' },
                     h('h3', { className: 'text-lg font-medium text-white' }, f.q),
                     h(ChevronDown, { size: 20, className: 'shrink-0 text-[#E64A19] transition-transform duration-300 ' + (open === i ? 'rotate-180' : '') })
                     ),
                   open === i ? h('p', { className: 'pb-6 pr-10 text-white/60 leading-relaxed' }, f.a) : null
                   )
                        )
               )
             )
           );
}

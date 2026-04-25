import { Mail, Linkedin, Instagram, MessageCircle, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Product Categories', href: '#categories' },
  { label: 'Our Process', href: '#process' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Request Quote', href: '#contact' },
];

const categories = [
  'Apparel & Clothing',
  'Tech Accessories',
  'Automobiles & Parts',
  'Toys & Kids Products',
  'Home & Lifestyle',
  'Custom Sourcing',
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black border-t border-white/10">
      {/* Main footer */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="./images/globalgrabz-logo.png"
              alt="Global Grabz"
              className="h-14 w-auto mb-6"
            />
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Your trusted China sourcing partner. We connect global brands with premium manufacturers for seamless product sourcing.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/globalgrabz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#FF5722] hover:text-[#FF5722] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com/globalgrabz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#FF5722] hover:text-[#FF5722] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/923040370389"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#FF5722] hover:text-[#FF5722] transition-all duration-300"
                aria-label="WeChat / WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-[#FF5722] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-6">
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#categories"
                    onClick={(e) => handleNavClick(e, '#categories')}
                    className="text-sm text-white/60 hover:text-[#FF5722] transition-colors duration-300"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@globalgrabz.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FF5722] transition-colors"
              >
                <Mail size={16} />
                contact@globalgrabz.com
              </a>
              <a
                href="tel:+923040370389"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FF5722] transition-colors"
              >
                <Phone size={16} />
                +92 304 0370389
              </a>
              <a
                href="tel:+8613018991840"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FF5722] transition-colors"
              >
                <Phone size={16} />
                +86 130 1899 1840
              </a>
              <a
                href="https://wa.me/923040370389"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FF5722] transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp: +92 304 0370389
              </a>
            </div>

            <div className="mt-8 p-4 border border-[#FF5722]/30 bg-[#FF5722]/5">
              <p className="text-xs text-white/50 mb-2">Response Time</p>
              <p className="text-sm font-semibold text-white">Within 1 Hour</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-6 lg:px-12 xl:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Global Grabz. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Large watermark */}
      <div className="overflow-hidden pb-4 pointer-events-none select-none">
        <p className="font-display text-[120px] lg:text-[200px] text-white/[0.02] text-center leading-none whitespace-nowrap">
          Global Grabz
        </p>
      </div>
    </footer>
  );
}

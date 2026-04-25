import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Send, CheckCircle, Phone, Mail } from 'lucide-react';

const productCategories = [
  'Apparel & Clothing',
  'Tech Accessories',
  'Automobiles & Parts',
  'Toys & Kids Products',
  'Home & Lifestyle Products',
  'Custom Product Sourcing',
];

const countryCodes = [
  { code: '+92', flag: '🇵🇰', country: 'Pakistan' },
  { code: '+86', flag: '🇨🇳', country: 'China' },
  { code: '+1', flag: '🇺🇸', country: 'USA' },
  { code: '+44', flag: '🇬🇧', country: 'UK' },
  { code: '+971', flag: '🇦🇪', country: 'UAE' },
  { code: '+966', flag: '🇸🇦', country: 'Saudi Arabia' },
  { code: '+65', flag: '🇸🇬', country: 'Singapore' },
  { code: '+60', flag: '🇲🇾', country: 'Malaysia' },
  { code: '+91', flag: '🇮🇳', country: 'India' },
  { code: '+49', flag: '🇩🇪', country: 'Germany' },
  { code: '+33', flag: '🇫🇷', country: 'France' },
  { code: '+61', flag: '🇦🇺', country: 'Australia' },
  { code: '+90', flag: '🇹🇷', country: 'Turkey' },
  { code: '+82', flag: '🇰🇷', country: 'South Korea' },
  { code: '+81', flag: '🇯🇵', country: 'Japan' },
  { code: '+7', flag: '🇷🇺', country: 'Russia' },
  { code: '+39', flag: '🇮🇹', country: 'Italy' },
  { code: '+34', flag: '🇪🇸', country: 'Spain' },
  { code: '+31', flag: '🇳🇱', country: 'Netherlands' },
  { code: '+41', flag: '🇨🇭', country: 'Switzerland' },
  { code: '+46', flag: '🇸🇪', country: 'Sweden' },
  { code: '+47', flag: '🇳🇴', country: 'Norway' },
  { code: '+45', flag: '🇩🇰', country: 'Denmark' },
  { code: '+32', flag: '🇧🇪', country: 'Belgium' },
  { code: '+43', flag: '🇦🇹', country: 'Austria' },
  { code: '+972', flag: '🇮🇱', country: 'Israel' },
  { code: '+20', flag: '🇪🇬', country: 'Egypt' },
  { code: '+27', flag: '🇿🇦', country: 'South Africa' },
  { code: '+234', flag: '🇳🇬', country: 'Nigeria' },
  { code: '+254', flag: '🇰🇪', country: 'Kenya' },
  { code: '+84', flag: '🇻🇳', country: 'Vietnam' },
  { code: '+66', flag: '🇹🇭', country: 'Thailand' },
  { code: '+62', flag: '🇮🇩', country: 'Indonesia' },
  { code: '+63', flag: '🇵🇭', country: 'Philippines' },
  { code: '+48', flag: '🇵🇱', country: 'Poland' },
  { code: '+55', flag: '🇧🇷', country: 'Brazil' },
  { code: '+52', flag: '🇲🇽', country: 'Mexico' },
  { code: '+58', flag: '🇨🇦', country: 'Canada' },
  { code: '+353', flag: '🇮🇪', country: 'Ireland' },
  { code: '+30', flag: '🇬🇷', country: 'Greece' },
  { code: '+351', flag: '🇵🇹', country: 'Portugal' },
  { code: '+354', flag: '🇮🇸', country: 'Iceland' },
  { code: '+98', flag: '🇮🇷', country: 'Iran' },
  { code: '+964', flag: '🇮🇶', country: 'Iraq' },
  { code: '+963', flag: '🇸🇾', country: 'Syria' },
  { code: '+961', flag: '🇱🇧', country: 'Lebanon' },
  { code: '+962', flag: '🇯🇴', country: 'Jordan' },
  { code: '+965', flag: '🇰🇼', country: 'Kuwait' },
  { code: '+974', flag: '🇶🇦', country: 'Qatar' },
  { code: '+973', flag: '🇧🇭', country: 'Bahrain' },
  { code: '+968', flag: '🇴🇲', country: 'Oman' },
  { code: '+961', flag: '🇱🇧', country: 'Lebanon' },
  { code: '+216', flag: '🇹🇳', country: 'Tunisia' },
  { code: '+212', flag: '🇲🇦', country: 'Morocco' },
  { code: '+213', flag: '🇩🇿', country: 'Algeria' },
  { code: '+218', flag: '🇱🇾', country: 'Libya' },
  { code: '+249', flag: '🇸🇩', country: 'Sudan' },
  { code: '+252', flag: '🇸🇴', country: 'Somalia' },
  { code: '+251', flag: '🇪🇹', country: 'Ethiopia' },
  { code: '+256', flag: '🇺🇬', country: 'Uganda' },
  { code: '+255', flag: '🇹🇿', country: 'Tanzania' },
  { code: '+260', flag: '🇿🇲', country: 'Zambia' },
  { code: '+263', flag: '🇿🇼', country: 'Zimbabwe' },
  { code: '+267', flag: '🇧🇼', country: 'Botswana' },
  { code: '+264', flag: '🇳🇦', country: 'Namibia' },
  { code: '+265', flag: '🇲🇼', country: 'Malawi' },
  { code: '+258', flag: '🇲🇿', country: 'Mozambique' },
  { code: '+261', flag: '🇲🇬', country: 'Madagascar' },
  { code: '+230', flag: '🇲🇺', country: 'Mauritius' },
  { code: '+242', flag: '🇨🇬', country: 'Congo' },
  { code: '+243', flag: '🇨🇩', country: 'DR Congo' },
  { code: '+225', flag: '🇨🇮', country: 'Ivory Coast' },
  { code: '+223', flag: '🇲🇱', country: 'Mali' },
  { code: '+221', flag: '🇸🇳', country: 'Senegal' },
  { code: '+233', flag: '🇬🇭', country: 'Ghana' },
  { code: '+229', flag: '🇧🇯', country: 'Benin' },
  { code: '+227', flag: '🇳🇪', country: 'Niger' },
  { code: '+235', flag: '🇹🇩', country: 'Chad' },
  { code: '+236', flag: '🇨🇫', country: 'CAR' },
  { code: '+237', flag: '🇨🇲', country: 'Cameroon' },
  { code: '+240', flag: '🇬🇶', country: 'Equatorial Guinea' },
  { code: '+241', flag: '🇬🇦', country: 'Gabon' },
  { code: '+239', flag: '🇸🇹', country: 'Sao Tome' },
  { code: '+244', flag: '🇦🇴', country: 'Angola' },
  { code: '+238', flag: '🇨🇻', country: 'Cape Verde' },
  { code: '+245', flag: '🇬🇼', country: 'Guinea-Bissau' },
  { code: '+224', flag: '🇬🇳', country: 'Guinea' },
  { code: '+232', flag: '🇸🇱', country: 'Sierra Leone' },
  { code: '+231', flag: '🇱🇷', country: 'Liberia' },
  { code: '+220', flag: '🇬🇲', country: 'Gambia' },
  { code: '+222', flag: '🇲🇷', country: 'Mauritania' },
  { code: '+211', flag: '🇸🇸', country: 'South Sudan' },
  { code: '+257', flag: '🇧🇮', country: 'Burundi' },
  { code: '+250', flag: '🇷🇼', country: 'Rwanda' },
  { code: '+256', flag: '🇺🇬', country: 'Uganda' },
];

export default function ContactForm() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+92',
    phone: '',
    email: '',
    category: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        countryCode: '+92',
        phone: '',
        email: '',
        category: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="relative w-full bg-white py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20" ref={headerRef}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5722] mb-4">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-black leading-[1.2] tracking-tight mb-5">
            Request a Quote
          </h2>
          <p className="text-black/60 max-w-xl mx-auto">
            Tell us what you need and we will get back to you within an hour with pricing and availability.
          </p>
        </div>

        {/* Contact Info Bar */}
        <div className="max-w-2xl mx-auto mb-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="tel:+923040370389"
            className="flex items-center gap-2 text-sm text-black/60 hover:text-[#FF5722] transition-colors"
          >
            <Phone size={14} />
            +92 304 0370389
          </a>
          <a
            href="tel:+8613018991840"
            className="flex items-center gap-2 text-sm text-black/60 hover:text-[#FF5722] transition-colors"
          >
            <Phone size={14} />
            +86 130 1899 1840
          </a>
          <a
            href="mailto:contact@globalgrabz.com"
            className="flex items-center gap-2 text-sm text-black/60 hover:text-[#FF5722] transition-colors"
          >
            <Mail size={14} />
            contact@globalgrabz.com
          </a>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto" ref={formRef}>
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 flex items-center justify-center bg-[#FF5722] text-white mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">
                Your request has been submitted
              </h3>
              <p className="text-black/60">
                Our representative will contact you within an hour.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] text-black/50 mb-3">
                  Full Name <span className="text-[#FF5722]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 text-black py-3 focus:outline-none focus:border-[#FF5722] transition-colors placeholder:text-black/30"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone with Country Code */}
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] text-black/50 mb-3">
                  WhatsApp / Phone Number <span className="text-[#FF5722]">*</span>
                </label>
                <div className="flex gap-0 border-b border-black/20 focus-within:border-[#FF5722] transition-colors">
                  {/* Country Code Select */}
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="bg-transparent text-black py-3 pr-2 pl-0 focus:outline-none text-sm cursor-pointer shrink-0"
                    style={{ maxWidth: '140px' }}
                  >
                    {countryCodes.map((c) => (
                      <option key={`${c.code}-${c.country}`} value={c.code} className="text-black">
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <span className="text-black/30 py-3 select-none">|</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 bg-transparent text-black py-3 pl-3 focus:outline-none placeholder:text-black/30"
                    placeholder="304 0370389"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] text-black/50 mb-3">
                  Email <span className="text-black/30">(optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 text-black py-3 focus:outline-none focus:border-[#FF5722] transition-colors placeholder:text-black/30"
                  placeholder="your@email.com"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] text-black/50 mb-3">
                  Product Category <span className="text-[#FF5722]">*</span>
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 text-black py-3 focus:outline-none focus:border-[#FF5722] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a category</option>
                  {productCategories.map((cat) => (
                    <option key={cat} value={cat} className="text-black">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] text-black/50 mb-3">
                  Product Details <span className="text-[#FF5722]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 text-black py-3 focus:outline-none focus:border-[#FF5722] transition-colors resize-none placeholder:text-black/30"
                  placeholder="Describe the product, quantity, specifications, and any requirements..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-[#FF5722] text-white font-semibold text-sm tracking-wide hover:bg-[#E64A19] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Request Quote
              </button>

              <p className="text-center text-xs text-black/40">
                We will respond within 1 hour via WhatsApp
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

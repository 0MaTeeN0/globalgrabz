import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Send, CheckCircle, Mail } from 'lucide-react';

const productCategories = [
  'Apparel & Clothing',
  'Tech Accessories',
  'Automobiles & Parts',
  'Toys & Kids Products',
  'Home & Lifestyle Products',
  'Custom Product Sourcing',
  'Machinery & Equipment',
  'Beauty & Personal Care',
  'Sports & Outdoor',
  'Electronics & Gadgets',
  'Packaging & Printing',
  'Furniture & Home Decor',
  'Jewelry & Accessories',
  'Bags, Shoes & Luggage',
  'Health & Medical Supplies',
  'Industrial & Building Materials',
  'LED Lighting & Solar',
  'Pet Supplies',
  'Office & Stationery',
  'Gifts & Promotional Items', 'Other',
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
  { code: '+1', flag: '🇨🇦', country: 'Canada' },
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
];

type Field = { name: string; label: string; type?: "text" | "select" | "textarea"; options?: string[]; required?: boolean; placeholder?: string };
type ServiceForm = { value: string; fields: Field[] };
const inputCls = "w-full bg-transparent border-b border-black/20 text-black py-3 focus:outline-none focus:border-[#E64A19] transition-colors placeholder:text-black/30";
const labelCls = "block text-xs uppercase tracking-[0.1em] text-black/50 mb-3";
const destinations = Array.from(new Set(countryCodes.map((c) => c.country))).sort();
const catField: Field = { name: "category", label: "Product category", type: "select", options: productCategories, required: true };
const SERVICES: ServiceForm[] = [];
SERVICES.push({ value: "Product Sourcing from China", fields: [{ name: "product", label: "Product name", required: true, placeholder: "e.g. stainless steel water bottle" }, catField, { name: "quantity", label: "Target quantity", placeholder: "e.g. 1000 pcs" }, { name: "targetPrice", label: "Target price per unit", placeholder: "e.g. USD 2.50" }, { name: "reference", label: "Reference link", placeholder: "Alibaba, 1688 or any product link" }] });
SERVICES.push({ value: "Supplier Verification and Factory Audit", fields: [{ name: "supplier", label: "Supplier or company name", required: true, placeholder: "Name of the supplier or factory" }, { name: "supplierCity", label: "Supplier city or province", placeholder: "e.g. Shenzhen, Guangdong" }, { name: "supplierLink", label: "Supplier website or Alibaba link", placeholder: "Link to the supplier page" }, { name: "verify", label: "What do you need checked", type: "select", required: true, options: ["Business licence check", "Factory or trading company check", "On site visit with photos and video", "Full factory audit report"] }] });
SERVICES.push({ value: "Quality Inspection and AQL Checks", fields: [{ name: "product", label: "Product name", required: true, placeholder: "What should we inspect" }, { name: "supplierCity", label: "Factory city or province", required: true, placeholder: "e.g. Yiwu, Zhejiang" }, { name: "quantity", label: "Order quantity", placeholder: "e.g. 5000 pcs" }, { name: "stage", label: "Inspection stage", type: "select", required: true, options: ["Pre-production check", "During production", "Pre-shipment inspection", "Container loading check"] }, { name: "aql", label: "AQL level", type: "select", options: ["AQL 1.5", "AQL 2.5", "AQL 4.0", "Not sure, please advise"] }, { name: "date", label: "Preferred inspection date", placeholder: "e.g. 15 December" }] });
SERVICES.push({ value: "Sample Management and Try Before You Buy", fields: [{ name: "product", label: "Product or products to sample", required: true, placeholder: "List the items you want to test" }, catField, { name: "samples", label: "Number of samples or suppliers", placeholder: "e.g. 3 suppliers, 2 samples each" }, { name: "courier", label: "Courier preference", type: "select", options: ["DHL", "FedEx", "UPS", "Cheapest option", "Not sure, please advise"] }] });
SERVICES.push({ value: "Private Label and OEM Manufacturing", fields: [{ name: "product", label: "Product name", required: true, placeholder: "What do you want to brand or manufacture" }, catField, { name: "custom", label: "What do you want to customize", type: "select", required: true, options: ["Logo only", "Logo and packaging", "Custom design", "Full OEM or ODM product"] }, { name: "artwork", label: "Do you have artwork or a design", type: "select", options: ["Yes, ready to share", "In progress", "No, I need help"] }, { name: "quantity", label: "Target order quantity", placeholder: "e.g. 2000 pcs" }] });
SERVICES.push({ value: "International Shipping and Logistics", fields: [{ name: "cargo", label: "Cargo description", required: true, placeholder: "What are you shipping" }, { name: "origin", label: "Pickup city in China or Hong Kong", placeholder: "e.g. Shenzhen, Yiwu, Hong Kong" }, { name: "destination", label: "Delivery port, airport or city", required: true, placeholder: "e.g. Jebel Ali, Los Angeles, Karachi" }, { name: "mode", label: "Shipping mode", type: "select", required: true, options: ["Air freight", "Sea freight FCL", "Sea freight LCL", "Rail freight", "Overland or border route", "Not sure, please advise"] }, { name: "weight", label: "Approx weight or volume", placeholder: "e.g. 500 kg or 3 CBM" }, { name: "incoterm", label: "Shipping terms", type: "select", options: ["EXW", "FOB", "CIF", "DDP", "Not sure"] }] });
SERVICES.push({ value: "Warehousing and Cargo Consolidation", fields: [{ name: "goods", label: "Type of goods", required: true, placeholder: "What goods will arrive at the warehouse" }, { name: "suppliers", label: "Number of suppliers", placeholder: "e.g. 5 suppliers" }, { name: "volume", label: "Estimated total weight or volume", placeholder: "e.g. 800 kg or 6 CBM" }, { name: "storage", label: "Storage time needed", type: "select", options: ["Under 2 weeks", "2 to 4 weeks", "1 to 3 months", "Over 3 months"] }] });
SERVICES.push({ value: "Amazon FBA Prep and Dropshipping", fields: [{ name: "fbaService", label: "Service needed", type: "select", required: true, options: ["Amazon FBA prep", "Dropshipping fulfilment", "Both"] }, { name: "marketplace", label: "Marketplace", type: "select", options: ["Amazon USA", "Amazon UK", "Amazon Europe", "Amazon Canada", "Amazon Australia", "Amazon UAE", "Amazon Saudi Arabia", "Other platform"] }, { name: "product", label: "Product name or ASIN", placeholder: "Product name or Amazon ASIN" }, { name: "volume", label: "Monthly units or orders", placeholder: "e.g. 500 units per month" }] });
SERVICES.push({ value: "Other or Not Sure", fields: [{ name: "request", label: "Tell us what you need", type: "textarea", required: true, placeholder: "Describe your request, products, quantity and destination country" }] });

export default function ContactForm() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [service, setService] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const blank = { fullName: "", countryCode: "+92", phone: "", email: "", country: "", notes: "" };
  const [formData, setFormData] = useState(blank);
  const selected = SERVICES.find((s) => s.value === service);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };
  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { setAnswers({ ...answers, [e.target.name]: e.target.value }); };
  const handleService = (e: React.ChangeEvent<HTMLSelectElement>) => { setService(e.target.value); setAnswers({}); };
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setSending(true); setError(""); const details: Record<string, string> = {}; if (selected) { selected.fields.forEach((f) => { details[f.label] = answers[f.name] || "-"; }); } try { const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key: "5a223ec2-f595-46e4-baf8-2106365fd43c", subject: "New Quote Request (" + service + ") from Global Grabz Website", from_name: "Global Grabz Website", name: formData.fullName, phone: formData.countryCode + " " + formData.phone, email: formData.email, service: service, delivery_country: formData.country, ...details, additional_notes: formData.notes }) }); const data = await res.json(); if (!data.success) { throw new Error("failed"); } } catch (err) { setError("Something went wrong. Please try again or email us at contact@globalgrabz.com."); setSending(false); return; } setSending(false); setSubmitted(true); setTimeout(() => { setSubmitted(false); setService(""); setAnswers({}); setFormData(blank); }, 5000); };
  const renderField = (f: Field) => (<div key={service + f.name}><label className={labelCls}>{f.label} {f.required ? <span className="text-[#E64A19]">*</span> : <span className="text-black/30">(optional)</span>}</label>{f.type === "select" ? (<select name={f.name} required={f.required} value={answers[f.name] || ""} onChange={handleAnswer} className={inputCls + " appearance-none cursor-pointer"}><option value="" disabled>Select an option</option>{(f.options || []).map((o) => (<option key={o} value={o}>{o}</option>))}</select>) : f.type === "textarea" ? (<textarea name={f.name} required={f.required} rows={4} value={answers[f.name] || ""} onChange={handleAnswer} className={inputCls + " resize-none"} placeholder={f.placeholder} />) : (<input type="text" name={f.name} required={f.required} value={answers[f.name] || ""} onChange={handleAnswer} className={inputCls} placeholder={f.placeholder} />)}</div>);
return (<section id="contact" className="relative w-full bg-white py-24 lg:py-32"><div className="w-full px-6 lg:px-12 xl:px-20"><div className="text-center mb-16 lg:mb-20" ref={headerRef}><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#E64A19] mb-4">Get Started</p><h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-black leading-[1.2] tracking-tight mb-5">Request a Quote</h2><p className="text-black/60 max-w-xl mx-auto">Choose the service you need, answer a few quick questions and we will get back to you within an hour.</p></div><div className="max-w-2xl mx-auto mb-12 flex items-center justify-center"><a href="mailto:contact@globalgrabz.com" className="flex items-center gap-2 text-sm text-black/60 hover:text-[#E64A19] transition-colors"><Mail size={14} />contact@globalgrabz.com</a></div><div className="max-w-2xl mx-auto" ref={formRef}>{submitted ? (<div className="text-center py-20"><div className="w-16 h-16 flex items-center justify-center bg-[#E64A19] text-white mx-auto mb-6"><CheckCircle size={32} /></div><h3 className="text-2xl font-semibold text-black mb-3">Your request has been submitted</h3><p className="text-black/60">Our representative will contact you within an hour.</p></div>) : (<form onSubmit={handleSubmit} className="space-y-8"><div><label className={labelCls}>Service Needed <span className="text-[#E64A19]">*</span></label><select name="service" required value={service} onChange={handleService} className={inputCls + " appearance-none cursor-pointer"}><option value="" disabled>Select a service</option>{SERVICES.map((s) => (<option key={s.value} value={s.value}>{s.value}</option>))}</select></div>{selected && selected.fields.map((f) => renderField(f))}<div><label className={labelCls}>Delivery Country <span className="text-[#E64A19]">*</span></label><select name="country" required value={formData.country} onChange={handleChange} className={inputCls + " appearance-none cursor-pointer"}><option value="" disabled>Select your country</option>{destinations.map((d) => (<option key={d} value={d}>{d}</option>))}<option value="Other">Other</option></select></div><div><label className={labelCls}>Full Name <span className="text-[#E64A19]">*</span></label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className={inputCls} placeholder="Your full name" /></div><div><label className={labelCls}>WhatsApp / Phone Number <span className="text-[#E64A19]">*</span></label><div className="flex gap-0 border-b border-black/20 focus-within:border-[#E64A19] transition-colors"><select name="countryCode" value={formData.countryCode} onChange={handleChange} className="bg-transparent text-black py-3 pr-2 pl-0 focus:outline-none text-sm cursor-pointer shrink-0" style={{ maxWidth: "140px" }}>{countryCodes.map((c) => (<option key={c.code + "-" + c.country} value={c.code} className="text-black">{c.flag} {c.code}</option>))}</select><span className="text-black/30 py-3 select-none">|</span><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="flex-1 bg-transparent text-black py-3 pl-3 focus:outline-none placeholder:text-black/30" placeholder="Your WhatsApp number" /></div></div><div><label className={labelCls}>Email <span className="text-black/30">(optional)</span></label><input type="email" name="email" value={formData.email} onChange={handleChange} className={inputCls} placeholder="your@email.com" /></div><div><label className={labelCls}>Anything Else We Should Know <span className="text-black/30">(optional)</span></label><textarea name="notes" rows={3} value={formData.notes} onChange={handleChange} className={inputCls + " resize-none"} placeholder="Deadlines, budget, certificates needed, special requirements..." /></div><button type="submit" disabled={sending} className="w-full py-4 bg-[#E64A19] text-white font-semibold text-sm tracking-wide hover:bg-[#D84315] transition-all duration-300 flex items-center justify-center gap-2"><Send size={16} />Request Quote</button><p className="text-center text-xs text-black/40">{error ? error : "We will respond within 1 hour via WhatsApp or email"}</p></form>)}</div></div></section>);
}

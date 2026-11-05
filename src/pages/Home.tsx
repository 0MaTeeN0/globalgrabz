import Header from '../components/Header';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Services from '../sections/Services';
import Hero from '../sections/Hero';
import About from '../sections/About';

import Process from '../sections/Process';
import WhyChooseUs from '../sections/WhyChooseUs';
import TryBeforeYouBuy from '../sections/TryBeforeYouBuy';
import Factory from '../sections/Factory';
import ChinaMarket from '../sections/ChinaMarket';


import ContactForm from '../sections/ContactForm';
import FAQ from '../sections/FAQ'; import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        
        <Process />
        <WhyChooseUs />
        <TryBeforeYouBuy />
        <Factory />
        <ChinaMarket />
        
        
        <FAQ /> <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

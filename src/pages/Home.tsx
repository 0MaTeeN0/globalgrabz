import Header from '../components/Header';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Categories from '../sections/Categories';
import Process from '../sections/Process';
import WhyChooseUs from '../sections/WhyChooseUs';
import TryBeforeYouBuy from '../sections/TryBeforeYouBuy';
import Factory from '../sections/Factory';
import ChinaMarket from '../sections/ChinaMarket';
import CaseStudies from '../sections/CaseStudies';
import Testimonials from '../sections/Testimonials';
import ContactForm from '../sections/ContactForm';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Categories />
        <Process />
        <WhyChooseUs />
        <TryBeforeYouBuy />
        <Factory />
        <ChinaMarket />
        <CaseStudies />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

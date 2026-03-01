import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MethodSection from '../components/MethodSection';
import TeacherSection from '../components/TeacherSection';
import ProgramSection from '../components/ProgramSection';
import GallerySection from '../components/GallerySection';
import PricingSection from '../components/PricingSection';
import WhyUsSection from '../components/WhyUsSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MethodSection />
        <TeacherSection />
        <ProgramSection />
        <GallerySection />
        <PricingSection />
        <WhyUsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}

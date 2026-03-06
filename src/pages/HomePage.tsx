import { useDocumentMeta } from '../hooks/useDocumentMeta';
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

export default function HomePage() {
  useDocumentMeta({
    title: 'Школа ИИ программирования в Гродно | VibeCoding — курсы AI-разработки для детей от 14 лет',
    description: 'Курсы программирования в Гродно для детей от 14 лет и взрослых. Репетиторство по программированию в мини-группах до 4 человек. ИИ обучение, вайбкодинг, Cursor AI. 6 занятий — 1000 BYN.',
    canonical: 'https://grodno.vibecoding.by',
  });

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
    </>
  );
}

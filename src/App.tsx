import SiteHeader from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import InitiativesSection from './components/InitiativesSection';
import FindYourWayIn from './components/FindYourWayIn';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f4ef] text-[#202923]">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <InitiativesSection />
        <FindYourWayIn />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

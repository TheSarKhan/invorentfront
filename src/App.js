import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Industries from './components/Industries';
import PlatformPreview from './components/PlatformPreview';
import Trust from './components/Trust';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div style={{ backgroundColor: '#04045E', minHeight: '100vh', fontFamily: "'Inter', 'Poppins', sans-serif" }}>
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Benefits />
        <Industries />
        <PlatformPreview />
        <Trust />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

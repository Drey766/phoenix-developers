import AppShell from './components/AppShell';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <AppShell>
      <Nav />
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
      <Footer />
    </AppShell>
  );
}

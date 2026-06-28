import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

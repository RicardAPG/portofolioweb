import { ThemeProvider } from "./components/ThemeProvider";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          <div id="home">
            <Hero />
          </div>
          
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <footer className="bg-muted/50 py-8 px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <p className="text-muted-foreground">
              © 2025 RicardAPG Developer. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted px-6 relative overflow-hidden">
      {/* Subtle background pattern for visual interest */}
      <div className="absolute inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.02]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            RicardAPG Developer
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer & Software Engineer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            Specialized in React, Node.js, and system analysis with 2 years of experience 
            building scalable applications.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button size="lg" className="gap-2">
            <Mail className="h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <FileText className="h-4 w-4" />
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/RicardAPG" 
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ricardpratama/" 
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
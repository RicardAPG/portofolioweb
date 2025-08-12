import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, file sharing, and team communication features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Platform for Market",
      description: "A user-friendly and attractive website for small and medium-sized businesses.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media App",
      description: "A modern social networking platform with features like real-time messaging, content sharing, and user engagement analytics.",
      src: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "Prisma", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const handleImageClick = (projectTitle: string) => {
    console.log(`Clicked on ${projectTitle} image`);
    // Here you could navigate to the project or open a modal
  };

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Featured Projects</h2>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <div 
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={() => handleImageClick(project.title)}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                        <Eye className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-white text-center mt-3 font-medium">View Project</p>
                    </div>
                  </div>
                  
                  {/* Click ripple effect */}
                  <div className="absolute inset-0 opacity-0 group-active:opacity-100 bg-white/20 transition-opacity duration-150"></div>
                </div>
              </div>
              
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="gap-2 hover:scale-105 transition-transform duration-200">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="gap-2 hover:scale-105 transition-transform duration-200">
                      <Github className="h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
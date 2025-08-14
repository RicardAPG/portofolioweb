import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function Experience() {
  const workExperience = [
    {
      title: "Senior Full Stack Developer",
      company: "Startup Ridara",
      location: "Lampung Tengah, Lampung",
      period: "2022 - Present",
      description: "Lead development of web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Startup Ridara",
      location: "Lampung Tengah, Lampung",
      period: "2020 - 2022",
      description: "Built scalable web applications from ground up. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis"]
    },
    {
      title: "Frontend Developer",
      company: "Startup Ridara",
      location: "Remote",
      period: "2019 - 2020",
      description: "Developed responsive web applications for various clients. Collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["React", "JavaScript", "SASS", "WordPress"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Darmajaya Institute of Information Technology and Business, Lampung City",
      location: "Lampung City, Lampung",
      period: "2021 - 2025",
      description: "Graduated Cum Laude. Relevant coursework: Data Structures, System Analys, Algorithms, Software Engineering, Database Systems."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Experience & Education</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-8">Work Experience</h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription className="text-lg text-primary">
                      {job.company}
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg text-primary">
                      {edu.school}
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-xl">Additional Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Independent student exchange at the Bandung Institute of Technology (2024)</li>
                  <li>• Published research paper on web performance optimization</li>
                  <li>• Contributor to popular open-source projects</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
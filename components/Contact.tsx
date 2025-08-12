import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6">Let's Work Together</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, 
              I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg">Email</h4>
                  <p className="text-muted-foreground">ricardgultom3@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg">Phone</h4>
                  <p className="text-muted-foreground">+62 822-8939-3376</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg">Location</h4>
                  <p className="text-muted-foreground">Lampung Tengah, Lampung</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/RicardAPG" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                  <Github className="h-6 w-6 text-primary" />
                </a>
                <a href="https://www.linkedin.com/in/ricardpratama/" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a href="#" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                  <Twitter className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2">Subject</label>
                  <Input id="subject" placeholder="Project Discussion" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-32"
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
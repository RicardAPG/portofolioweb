import { MapPin, Calendar, GraduationCap, Languages, Briefcase } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">About Me</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2">
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with over 2 years of experience 
                creating digital solutions that make a difference. My journey began with 
                a Computer Science degree and has evolved through working projects
                and established companies.
              </p>
              <p>
                I specialize in modern web technologies including React, TypeScript, 
                Node.js, and cloud platforms. I'm particularly interested in building 
                scalable applications, optimizing performance, and creating exceptional 
                user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, 
                learning new technologies, or mentoring fellow developers. I believe in 
                continuous learning and staying up-to-date with industry trends.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-8">
              <h3 className="text-2xl mb-6">Quick Facts</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Lampung Tengah, Lampung</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">2+ Years</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium">BS Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                    <Languages className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Languages</p>
                    <p className="font-medium">Indonesia, English</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg sm:col-span-2">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="font-medium text-emerald-600 dark:text-emerald-400">Open to Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
           {/* Profile Photo Section */}
           <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main profile photo */}
              <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                <img
                  src="/fotoku.jpeg"
                  alt="Professional Developer Portrait"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                

                {/* Decorative elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"></div>
              </div>
              
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                    Available for hire
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional personal touch */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-muted px-6 py-3 rounded-full">
            <span className="text-muted-foreground">💡 Fun fact:</span>
            <span>I've contributed to 50+ open-source projects and having a keen interest in technology</span>
          </div>
        </div>
      </div>
    </section>
  );
}
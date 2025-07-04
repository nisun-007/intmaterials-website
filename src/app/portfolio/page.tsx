import Navigation from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Portfolio() {
  const projects = [
    {
      title: "Advanced Coating Characterization",
      category: "Surface Chemistry",
      description: "Comprehensive surface analysis of next-generation protective coatings for aerospace applications, including adhesion testing and environmental durability assessment.",
      technologies: ["XPS", "Contact Angle", "Adhesion Testing", "SEM"],
      industry: "Aerospace"
    },
    {
      title: "Polymer Failure Analysis",
      category: "Materials Science",
      description: "Root cause analysis of polymer component failures in automotive applications, leading to improved material selection and processing parameters.",
      technologies: ["FTIR", "DSC", "Tensile Testing", "Microscopy"],
      industry: "Automotive"
    },
    {
      title: "Biomaterial Surface Modification",
      category: "Surface Chemistry",
      description: "Development and characterization of biocompatible surface treatments for medical device applications, ensuring optimal cell adhesion and biocompatibility.",
      technologies: ["Surface Functionalization", "Cell Culture", "Biocompatibility Testing"],
      industry: "Medical Devices"
    },
    {
      title: "Corrosion Resistance Study",
      category: "Materials Science",
      description: "Evaluation of corrosion resistance mechanisms in marine environments for offshore infrastructure, including accelerated testing and field studies.",
      technologies: ["Electrochemical Testing", "Salt Spray", "Metallography"],
      industry: "Marine"
    },
    {
      title: "Nanocomposite Development",
      category: "R&D Support",
      description: "Strategic consulting for nanocomposite material development program, including technology roadmapping and performance optimization strategies.",
      technologies: ["TEM", "Mechanical Testing", "Thermal Analysis"],
      industry: "Electronics"
    },
    {
      title: "Surface Treatment Optimization",
      category: "Surface Chemistry",
      description: "Process optimization for surface treatment operations in semiconductor manufacturing, improving yield and product quality.",
      technologies: ["Surface Profiling", "Cleaning Validation", "Process Control"],
      industry: "Semiconductor"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navigation />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Portfolio
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Representative examples of our materials science and surface chemistry consulting projects
              </p>
            </div>

            {/* Project Categories */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2">All Projects</Badge>
                <Badge variant="outline" className="px-4 py-2">Materials Science</Badge>
                <Badge variant="outline" className="px-4 py-2">Surface Chemistry</Badge>
                <Badge variant="outline" className="px-4 py-2">R&D Support</Badge>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {projects.map((project) => (
                <Card key={project.title} className="bg-white border-zinc-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.industry}
                      </Badge>
                    </div>
                    <CardTitle className="text-zinc-900 text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 mb-2">Key Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Industries Served */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">Industries Served</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  "Aerospace & Defense",
                  "Automotive",
                  "Medical Devices",
                  "Electronics",
                  "Energy & Power",
                  "Chemical Processing",
                  "Marine & Offshore",
                  "Manufacturing"
                ].map((industry) => (
                  <Card key={industry} className="bg-white border-zinc-200 text-center">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-zinc-900">{industry}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Capabilities Highlight */}
            <section className="mb-16">
              <div className="bg-white rounded-lg p-8 border border-zinc-200">
                <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
                  Our Capabilities
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-zinc-900">50+</span>
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2">Projects Completed</h3>
                    <p className="text-sm text-zinc-600">
                      Diverse portfolio across multiple industries and applications
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-zinc-900">25+</span>
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2">Analytical Techniques</h3>
                    <p className="text-sm text-zinc-600">
                      Comprehensive characterization and analysis capabilities
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-zinc-900">10+</span>
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2">Years Experience</h3>
                    <p className="text-sm text-zinc-600">
                      Deep expertise in materials science and surface chemistry
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center bg-white rounded-lg p-8 border border-zinc-200">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-zinc-600 mb-6">
                Let's discuss how our expertise can help solve your materials challenges
              </p>
              <Button asChild size="lg" className="bg-zinc-900 hover:bg-zinc-800">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Logo white={true} />
            </div>
            <p className="text-zinc-400">
              Materials Science & Surface Chemistry Consulting
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Services() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navigation />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-3xl mx-auto">
                At Interface Materials LLC, we provide advanced research, testing, and data-driven solutions focused on the science and engineering of materials interfaces. Our services are designed to support companies, national laboratories, and research groups developing next-generation clean energy technologies, and high-performance materials.
              </p>
            </div>

            {/* Services List */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">

              {/* Service 1 */}
              <Card className="bg-white border-zinc-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-blue-600 font-bold text-lg mb-2">01</div>
                  <CardTitle className="text-xl text-zinc-900">Advanced Interface Characterization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 mb-4">
                    We offer state-of-the-art characterization services to analyze interfaces at the atomic, microstructural, mechanical, and chemical levels.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-zinc-900 text-sm">Capabilities:</h4>
                    <ul className="text-sm text-zinc-600 list-disc pl-4 space-y-1">
                      <li>Surface and interface chemistry analysis</li>
                      <li>High-resolution microscopy (SEM, TEM, AFM)</li>
                      <li>Spectroscopy of interfacial layers (XPS, IR, Raman)</li>
                      <li>Cross-sectional interface analysis for coatings and multilayers</li>
                    </ul>
                    <p className="text-xs text-zinc-500 mt-2 italic">Applications: battery interfaces, semiconductor stacks, corrosion interfaces.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="bg-white border-zinc-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-blue-600 font-bold text-lg mb-2">02</div>
                  <CardTitle className="text-xl text-zinc-900">Complex Environment Materials Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 mb-4">
                    We test how materials and their interfaces behave under harsh operating conditions typical of nuclear and energy systems.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-zinc-900 text-sm">Testing conditions:</h4>
                    <ul className="text-sm text-zinc-600 list-disc pl-4 space-y-1">
                      <li>High temperature and thermal cycling</li>
                      <li>Corrosion and oxidation environments</li>
                      <li>Electrochemical environment</li>
                    </ul>
                    <p className="text-xs text-zinc-500 mt-2 italic">Deliverables: degradation mechanisms, failure maps, interface stability assessments, and predictive lifetime models.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="bg-white border-zinc-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-blue-600 font-bold text-lg mb-2">03</div>
                  <CardTitle className="text-xl text-zinc-900">Interface Modeling & AI-Driven Predictions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 mb-4">
                    We combine physics-based modeling and machine learning to help clients understand, design, and optimize interfaces.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-zinc-900 text-sm">Offerings:</h4>
                    <ul className="text-sm text-zinc-600 list-disc pl-4 space-y-1">
                      <li>Multiscale interface modeling (DFT, MD, FEM)</li>
                      <li>AI-assisted prediction of interfacial properties</li>
                      <li>Computational screening of coating and material combinations</li>
                      <li>Data fusion workflows to solve the “data scarcity” challenge</li>
                    </ul>
                    <p className="text-xs text-zinc-500 mt-2 italic">Outcome: faster material discovery, reduced experimental cost, and improved reliability predictions.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Service 4 */}
              <Card className="bg-white border-zinc-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-blue-600 font-bold text-lg mb-2">04</div>
                  <CardTitle className="text-xl text-zinc-900">Protective Coatings & Surface Engineering Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 mb-4">
                    We design and evaluate coatings tailored to corrosion resistance, and thermal stability.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-zinc-900 text-sm">Services:</h4>
                    <ul className="text-sm text-zinc-600 list-disc pl-4 space-y-1">
                      <li>Coating formulation and design</li>
                      <li>Coating–substrate adhesion and durability testing</li>
                      <li>Corrosion and wear resistance studies</li>
                      <li>Interface optimization for thin films and multilayered systems</li>
                    </ul>
                    <p className="text-xs text-zinc-500 mt-2 italic">Industries served: advanced reactors, hydrogen systems, aerospace, energy storage.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Service 5 */}
              <Card className="bg-white border-zinc-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-blue-600 font-bold text-lg mb-2">05</div>
                  <CardTitle className="text-xl text-zinc-900">Materials Interface Database Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 mb-4">
                    We build specialized data infrastructures to catalog interfacial properties across multiple materials classes.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-zinc-900 text-sm">Services:</h4>
                    <ul className="text-sm text-zinc-600 list-disc pl-4 space-y-1">
                      <li>Data collection, curation, and standardization</li>
                      <li>Interfacial-property datasets for energy materials</li>
                      <li>Custom database design for research organizations</li>
                      <li>Integrating experimental + simulation + AI-derived data</li>
                    </ul>
                    <p className="text-xs text-zinc-500 mt-2 italic">Use cases: materials discovery pipelines, digital twins, ML model development.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Service 6 */}
              <Card className="bg-white border-zinc-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-blue-600 font-bold text-lg mb-2">06</div>
                  <CardTitle className="text-xl text-zinc-900">Technical Consulting & Research Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 mb-4">
                    We provide scientific and technical consulting to guide materials development, troubleshooting, and innovation.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-zinc-900 text-sm">Areas of expertise:</h4>
                    <ul className="text-sm text-zinc-600 list-disc pl-4 space-y-1">
                      <li>Interface failure analysis</li>
                      <li>Materials selection for energy applications</li>
                      <li>Performance optimization for coatings and surfaces</li>
                      <li>Research strategy and proposal development</li>
                      <li>Technology translation and scale-up guidance</li>
                    </ul>
                    <p className="text-xs text-zinc-500 mt-2 italic">Ideal for: startups, reactor developers, government labs, and energy-materials R&D groups.</p>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Why Work With Us */}
            <section className="bg-zinc-900 rounded-2xl p-10 text-white text-center">
              <h2 className="text-3xl font-bold mb-8">Why Work With Us?</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4">
                  <div className="text-blue-400 font-bold text-lg mb-2">Expertise</div>
                  <p className="text-zinc-400 text-sm">Deep expertise in interface science, materials discovery and characterization</p>
                </div>
                <div className="p-4">
                  <div className="text-blue-400 font-bold text-lg mb-2">Integrated Approach</div>
                  <p className="text-zinc-400 text-sm">Experimentation, modeling, and data combined for holistic solutions</p>
                </div>
                <div className="p-4">
                  <div className="text-blue-400 font-bold text-lg mb-2">Transparency</div>
                  <p className="text-zinc-400 text-sm">Transparent communication and thorough scientific methods</p>
                </div>
                <div className="p-4">
                  <div className="text-blue-400 font-bold text-lg mb-2">Tailored Solutions</div>
                  <p className="text-zinc-400 text-sm">Tailored solutions for high-performance and complex environments</p>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">Request Consultation</Link>
                </Button>
              </div>
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

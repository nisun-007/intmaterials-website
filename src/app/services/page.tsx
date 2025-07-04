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
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Services & Products
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Comprehensive consulting solutions for materials science and surface chemistry challenges
              </p>
            </div>

            {/* Consulting Services */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Consulting Services</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Materials Characterization</CardTitle>
                    <CardDescription>
                      Comprehensive analysis and testing services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-zinc-600">
                      <li>• Microscopy and imaging analysis</li>
                      <li>• Spectroscopic characterization</li>
                      <li>• Mechanical property testing</li>
                      <li>• Thermal analysis</li>
                      <li>• Chemical composition analysis</li>
                      <li>• Crystallographic studies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Surface Analysis</CardTitle>
                    <CardDescription>
                      Expert surface chemistry and interface studies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-zinc-600">
                      <li>• XPS and surface composition</li>
                      <li>• Contact angle measurements</li>
                      <li>• Surface roughness analysis</li>
                      <li>• Adhesion testing</li>
                      <li>• Coating characterization</li>
                      <li>• Interface chemistry studies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Failure Analysis</CardTitle>
                    <CardDescription>
                      Root cause analysis and problem solving
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-zinc-600">
                      <li>• Fractography and failure modes</li>
                      <li>• Corrosion analysis</li>
                      <li>• Fatigue assessment</li>
                      <li>• Environmental degradation</li>
                      <li>• Quality control consulting</li>
                      <li>• Preventive measures development</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">R&D Support</CardTitle>
                    <CardDescription>
                      Strategic guidance for research programs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-zinc-600">
                      <li>• Technology roadmap development</li>
                      <li>• Materials selection guidance</li>
                      <li>• Process optimization</li>
                      <li>• Innovation strategy</li>
                      <li>• Grant proposal support</li>
                      <li>• Technical due diligence</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Training Programs */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Training Programs</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-zinc-900 text-lg">Materials Fundamentals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600">
                      Comprehensive overview of materials science principles and applications
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-zinc-900 text-lg">Surface Analysis Techniques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600">
                      Hands-on training in surface characterization methods and data interpretation
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-zinc-900 text-lg">Failure Analysis Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600">
                      Systematic approach to identifying and preventing material failures
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Process */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Our Process</h2>
              <div className="bg-white rounded-lg p-8 border border-zinc-200">
                <div className="grid gap-8 md:grid-cols-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2">Assessment</h3>
                    <p className="text-sm text-zinc-600">
                      Initial consultation to understand your technical challenges
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2">Planning</h3>
                    <p className="text-sm text-zinc-600">
                      Development of customized approach and timeline
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2">Execution</h3>
                    <p className="text-sm text-zinc-600">
                      Implementation of testing, analysis, or consulting activities
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      4
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2">Delivery</h3>
                    <p className="text-sm text-zinc-600">
                      Comprehensive reporting and recommendations
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center bg-white rounded-lg p-8 border border-zinc-200">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-zinc-600 mb-6">
                Contact us to discuss your specific needs and learn how we can help
              </p>
              <Button asChild size="lg" className="bg-zinc-900 hover:bg-zinc-800">
                <Link href="/contact">Request Consultation</Link>
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

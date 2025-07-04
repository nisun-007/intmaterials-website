import Navigation from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/logo";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navigation />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                About intmaterials
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Expertise in materials science and surface chemistry consulting
              </p>
              <div className="mt-12 relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
                  alt="Close-up of examining test sample under microscope"
                  className="rounded-lg shadow-xl w-full max-w-4xl mx-auto h-64 object-cover"
                />
              </div>
            </div>

            <div className="space-y-16">
              {/* Company Overview */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">Our Mission</h2>
                <div className="prose prose-lg text-zinc-600">
                  <p>
                    intmaterials LLC is dedicated to providing world-class consulting services in materials science
                    and surface chemistry. We bridge the gap between fundamental research and practical applications,
                    helping organizations overcome technical challenges and accelerate innovation.
                  </p>
                  <p className="mt-4">
                    Our expertise spans a wide range of materials systems and surface phenomena, enabling us to
                    provide comprehensive solutions tailored to each client's unique needs and objectives.
                  </p>
                </div>
              </section>

              {/* Expertise Areas */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mb-8">Areas of Expertise</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="bg-white border-zinc-200">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Materials Science</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600">
                        <li>• Materials characterization and analysis</li>
                        <li>• Structure-property relationships</li>
                        <li>• Materials selection and optimization</li>
                        <li>• Failure analysis and troubleshooting</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-zinc-200">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Surface Chemistry</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600">
                        <li>• Surface modification and treatment</li>
                        <li>• Adhesion and coating technologies</li>
                        <li>• Interface characterization</li>
                        <li>• Surface analytical techniques</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-zinc-200">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Research & Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600">
                        <li>• Strategic R&D planning</li>
                        <li>• Technology assessment</li>
                        <li>• Innovation roadmapping</li>
                        <li>• Technical due diligence</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-zinc-200">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Technical Training</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600">
                        <li>• Materials science education</li>
                        <li>• Surface analysis workshops</li>
                        <li>• Technical team development</li>
                        <li>• Best practices implementation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Approach */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">Our Approach</h2>
                <div className="bg-white rounded-lg p-8 border border-zinc-200">
                  <div className="prose prose-lg text-zinc-600">
                    <p>
                      We believe that successful consulting requires a deep understanding of both the science
                      and the business context. Our methodology combines rigorous technical analysis with
                      practical implementation strategies.
                    </p>
                    <p className="mt-4">
                      Every project begins with a comprehensive assessment of your technical challenges,
                      followed by the development of customized solutions that align with your business
                      objectives and timeline requirements.
                    </p>
                  </div>
                </div>
              </section>
            </div>
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

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-white py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
                Expert Materials Science & Surface Chemistry Consulting
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                intmaterials LLC provides specialized consulting services in materials science and surface chemistry,
                helping organizations solve complex technical challenges and advance their research and development goals.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button asChild size="lg" className="bg-zinc-900 hover:bg-zinc-800">
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=600&fit=crop&auto=format"
                alt="Modern materials science laboratory with microscope and analytical equipment"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Core Expertise
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Comprehensive consulting services tailored to your materials challenges
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
                  alt="Materials scientist conducting characterization testing"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-zinc-900">Materials Characterization</CardTitle>
                <CardDescription>
                  Advanced analysis and characterization of material properties and structures
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop"
                  alt="Surface chemistry laboratory with microscope and analytical equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-zinc-900">Surface Chemistry</CardTitle>
                <CardDescription>
                  Expert analysis of surface interactions, modifications, and treatments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
                  alt="Advanced nanomaterial characterization and research equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-zinc-900">Research & Development</CardTitle>
                <CardDescription>
                  Strategic consulting for materials R&D programs and innovation initiatives
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Ready to Advance Your Materials Research?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Let's discuss how our expertise can help you achieve your goals.
              Contact us today to learn more about our consulting services.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-zinc-900 hover:bg-zinc-800">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
            <div className="mt-8 flex justify-center space-x-6">
              <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-zinc-400 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const researchImages = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navigation />

      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {researchImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-2000 ${index === currentImageIndex ? 'opacity-30' : 'opacity-0'
                }`}
            >
              <img
                src={image}
                alt="Research laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Animated Molecular Structure Overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full animate-pulse" viewBox="0 0 1200 800" fill="none">
            <g stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="rgba(255,255,255,0.1)">
              {/* Floating molecules with CSS animations */}
              <g className="animate-float">
                <circle cx="200" cy="150" r="8" />
                <circle cx="280" cy="120" r="6" />
                <circle cx="350" cy="180" r="7" />
                <line x1="208" y1="150" x2="274" y2="120" />
                <line x1="280" y1="126" x2="343" y2="180" />
              </g>

              <g className="animate-float-delayed">
                <circle cx="800" cy="300" r="10" />
                <circle cx="880" cy="280" r="8" />
                <circle cx="920" cy="350" r="6" />
                <line x1="810" y1="300" x2="872" y2="280" />
                <line x1="880" y1="288" x2="914" y2="350" />
              </g>

              <g className="animate-float-slow">
                <circle cx="1000" cy="200" r="9" />
                <circle cx="1100" cy="180" r="7" />
                <circle cx="1150" cy="250" r="11" />
                <line x1="1009" y1="200" x2="1093" y2="180" />
                <line x1="1100" y1="187" x2="1139" y2="250" />
              </g>
            </g>
          </svg>
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Main Headline */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Advancing
              </span>{' '}
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Materials
              </span>
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Science &
              </span>{' '}
              <span className="inline-block animate-fade-in-up bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animationDelay: '0.8s' }}>
                Surface Chemistry
              </span>
            </h2>
          </div>

          {/* Animated Subtitle */}
          <p className="text-2xl md:text-3xl text-blue-100 mb-4 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
            Tailored consulting solutions for industry innovators.
          </p>

          {/* Company Name */}
          <p className="text-xl md:text-2xl text-cyan-300 mb-12 font-light animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            InterfaceMaterials LLC
          </p>

          {/* Animated CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <Button
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio-section');
                portfolioSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg px-10 py-4 min-w-[250px] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              View Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-10 py-4 min-w-[250px] transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="portfolio-section" className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Transforming complex interfacial behavior into actionable insights and scalable solutions.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Item 1 */}
            <Card className="bg-white border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
                  alt="Advanced Interface Characterization"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-zinc-900">Advanced Interface Characterization</CardTitle>
                <CardDescription>
                  High-resolution experimental techniques to study chemical, mechanical, and microstructural changes at interfaces.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Item 2 */}
            <Card className="bg-white border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop"
                  alt="Radiation & Complex-Environment Materials Testing"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-zinc-900">Radiation & Complex-Environment Testing</CardTitle>
                <CardDescription>
                  Analysis of interface stability, defect evolution, and degradation pathways for energy materials.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Item 3 */}
            <Card className="bg-white border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
                  alt="AI-Driven Interface Modeling"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-zinc-900">AI-Driven Interface Modeling & Prediction</CardTitle>
                <CardDescription>
                  Data-centric workflows combining physics-based simulation with ML to accelerate materials discovery.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Item 4 */}
            <Card className="bg-white border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                  alt="Protective Coatings"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-zinc-900">Protective Coatings & Surface Engineering</CardTitle>
                <CardDescription>
                  Development of corrosion-resistant, radiation-tolerant, and high-temperature coatings.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Item 5 */}
            <Card className="bg-white border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop"
                  alt="Materials Interface Database"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-zinc-900">Materials Interface Database Development</CardTitle>
                <CardDescription>
                  Building the first comprehensive database focused on interfacial properties across energy systems.
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
              Let's discuss how InterfaceMaterials LLC can help you achieve your goals.
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

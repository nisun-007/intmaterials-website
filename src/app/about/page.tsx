import Navigation from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/logo";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navigation />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl mb-6">
                About Us
              </h1>
              <div className="prose prose-lg mx-auto text-zinc-600">
                <p>
                  Interface Materials LLC is a Texas-based research and technology company dedicated to advancing the science, engineering, and data infrastructure of materials interfaces. We focus on solving some of the most critical challenges in clean energy systems, and semiconductor technologies where interface durability, integrity, and performance determine system reliability.
                </p>
                <p className="mt-4">
                  We specialize in understanding how materials behave where they meet, bond, or separate especially under complex conditions such as radiation, high temperature, electrochemical, mechanical stress, and long-term degradation. Our mission is to transform complex interfacial behavior into actionable insights, validated models, and scalable solutions.
                </p>
              </div>
            </div>

            <div className="space-y-20">
              {/* Mission & Vision */}
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="bg-zinc-900 text-white border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-400">Mission Statement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed text-zinc-300">
                      To leverage the potential of materials interfaces through science, data, and innovation accelerating the next generation of nuclear and clean energy technologies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-zinc-900">Vision Statement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed text-zinc-600">
                      To become the leading global authority in materials interface science—delivering breakthrough insights, advanced coatings, and data-driven technologies that enable safer, longer-lasting, and more sustainable energy systems for the future.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Our Aim */}
              <section>
                <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
                  <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Aim</h2>
                  <p className="text-xl text-zinc-700 leading-relaxed">
                    To advance the frontier of materials interface science by developing data-driven insights, innovative characterization solutions, and high-performance interface technologies that enable safer, more efficient, and more durable energy systems especially within the energy sector.
                  </p>
                </div>
              </section>

              {/* Core Goals */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Our Core Goals</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Goal 1 */}
                  <Card className="bg-white border-zinc-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="text-blue-600 font-bold text-lg mb-2">01</div>
                      <CardTitle className="text-xl text-zinc-900">Build a World-Class Materials Interface Research Platform</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600 list-disc pl-5">
                        <li>Develop experimental and computational capabilities for characterizing interfaces under complex environments.</li>
                        <li>Create standardized workflows for interface characterization, corrosion and stability studies.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Goal 2 */}
                  <Card className="bg-white border-zinc-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="text-blue-600 font-bold text-lg mb-2">02</div>
                      <CardTitle className="text-xl text-zinc-900">Innovate solutions for Advanced Coatings and Surface Engineering</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600 list-disc pl-5">
                        <li>Design coatings that enhance radiation tolerance, corrosion resistance, and thermal stability.</li>
                        <li>Partner with industry and national laboratories to enhance materials discovery for advanced energy systems.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Goal 3 */}
                  <Card className="bg-white border-zinc-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="text-blue-600 font-bold text-lg mb-2">03</div>
                      <CardTitle className="text-xl text-zinc-900">Create Comprehensive Interface Materials Database</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600 list-disc pl-5">
                        <li>Build a high-fidelity dataset of interfacial properties relevant to batteries, semiconductors, and nuclear materials.</li>
                        <li>Integrate machine learning tools to predict interface behavior and accelerate materials discovery.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Goal 4 */}
                  <Card className="bg-white border-zinc-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="text-blue-600 font-bold text-lg mb-2">04</div>
                      <CardTitle className="text-xl text-zinc-900">Enable Predictive Modeling of Interfaces for Extreme Environments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600 list-disc pl-5">
                        <li>Combine physics-based simulations with AI/ML to solve the data-scarcity challenge in interface science.</li>
                        <li>Improve accuracy of lifetime predictions for energy materials exposed to heat, radiation, and chemical attack.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Goal 5 */}
                  <Card className="bg-white border-zinc-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="text-blue-600 font-bold text-lg mb-2">05</div>
                      <CardTitle className="text-xl text-zinc-900">Support Clean and Sustainable Energy Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600 list-disc pl-5">
                        <li>Provide interface consulting, testing, and analysis to companies developing advanced reactors, hydrogen production systems, and next-generation electronics.</li>
                        <li>Translate fundamental interface science into scalable technologies that accelerate the clean-energy transition.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Goal 6 */}
                  <Card className="bg-white border-zinc-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="text-blue-600 font-bold text-lg mb-2">06</div>
                      <CardTitle className="text-xl text-zinc-900">Foster Collaboration Across Academia, Industry, and Government</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600 list-disc pl-5">
                        <li>Serve as a bridge between research labs and real-world energy applications.</li>
                        <li>Support grant proposals, joint research projects, and technology transfer opportunities.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Goal 7 */}
                  <Card className="bg-white border-zinc-200 hover:shadow-md transition-shadow md:col-span-2">
                    <CardHeader>
                      <div className="text-blue-600 font-bold text-lg mb-2">07</div>
                      <CardTitle className="text-xl text-zinc-900">Deliver High-Quality Technical Expertise and Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-zinc-600 list-disc pl-5">
                        <li>Offer interface characterization, materials diagnostics, failure analysis, and data modeling services.</li>
                        <li>Maintain scientific thorough, transparent, and customer-focused communication.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Commitment & Purpose */}
              <div className="grid gap-8 md:grid-cols-2">
                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Commitment</h2>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    We are committed to scientific excellence, rigorous research, transparency, and collaboration. We work with industry partners, national laboratories, universities, and technology developers to bring advanced interface solutions from concept to real-world application.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Purpose</h2>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    To provide the materials science communities especially clean-energy innovators with the tools, data, and technologies needed to design more reliable materials, prevent failures, and accelerate deployment of advanced energy systems.
                  </p>
                </section>
              </div>

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

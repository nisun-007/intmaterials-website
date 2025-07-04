"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Logo from "@/components/logo";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link
      const subject = `New Contact Form Submission - ${formData.projectType}`;
      const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType}

Project Details:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:info@InterfaceMaterials.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message and clear form
      toast.success("Your message has been prepared! Please send the email from your email client.", {
        duration: 5000,
      });

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: ""
      });

    } catch (error) {
      toast.error("There was an error processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navigation />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Ready to discuss your materials science or surface chemistry challenges? Let's start a conversation.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="bg-white border-zinc-200">
                <CardHeader>
                  <CardTitle className="text-zinc-900">Get in Touch</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className={errors.firstName ? "border-red-500" : ""}
                        />
                        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className={errors.lastName ? "border-red-500" : ""}
                        />
                        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@company.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company <span className="text-red-500">*</span></Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className={errors.company ? "border-red-500" : ""}
                      />
                      {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type <span className="text-red-500">*</span></Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.projectType ? "border-red-500" : ""}`}
                      >
                        <option value="">Select project type</option>
                        <option value="Materials Characterization">Materials Characterization</option>
                        <option value="Surface Analysis">Surface Analysis</option>
                        <option value="Failure Analysis">Failure Analysis</option>
                        <option value="R&D Support">R&D Support</option>
                        <option value="Training">Training</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.projectType && <p className="text-sm text-red-500">{errors.projectType}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details <span className="text-red-500">*</span></Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your project, timeline, and any specific requirements..."
                        className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                      />
                      {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">Email</h3>
                      <p className="text-zinc-600">info@InterfaceMaterials.com</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">Response Time</h3>
                      <p className="text-zinc-600">We typically respond within 24 hours</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">Business Hours</h3>
                      <p className="text-zinc-600">Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-zinc-900 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-zinc-900">Initial Consultation</h4>
                          <p className="text-sm text-zinc-600">
                            We'll discuss your project requirements and technical challenges
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-zinc-900 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-zinc-900">Proposal Development</h4>
                          <p className="text-sm text-zinc-600">
                            Customized approach with timeline and deliverables
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-zinc-900 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-zinc-900">Project Kickoff</h4>
                          <p className="text-sm text-zinc-600">
                            Begin work with regular progress updates and communication
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Ready to Start?</CardTitle>
                    <CardDescription className="text-zinc-300">
                      Have a specific question or urgent project? Feel free to reach out directly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="secondary"
                      className="w-full bg-white text-zinc-900 hover:bg-zinc-100"
                      asChild
                    >
                      <a href="mailto:info@InterfaceMaterials.com">
                        Email Us Directly
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-20">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-zinc-900">What types of projects do you handle?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600">
                      We handle a wide range of materials science and surface chemistry projects,
                      from failure analysis to R&D support across various industries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-zinc-900">How long do projects typically take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600">
                      Project timelines vary based on scope and complexity, ranging from
                      a few weeks for focused analyses to several months for comprehensive studies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-zinc-900">Do you work with startups and small companies?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600">
                      Yes, we work with organizations of all sizes, from startups to Fortune 500 companies,
                      tailoring our approach to fit your budget and timeline.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-zinc-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-zinc-900">Can you provide training for our team?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600">
                      Absolutely! We offer customized training programs in materials science,
                      surface analysis techniques, and failure analysis methodologies.
                    </p>
                  </CardContent>
                </Card>
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

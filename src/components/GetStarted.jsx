import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Button from "./Button";
import Section from "./Section";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: ""
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container">
          <div className="relative z-1 max-w-[42rem] mx-auto text-center">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient mb-8">
              <div className="relative bg-n-8 rounded-[1rem] p-8 md:p-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-color-1/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-color-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="h2 mb-4">Welcome to D360 Flux!</h2>
                <p className="body-1 text-n-2 mb-8">
                  Thank you for your interest. Our team will reach out to you within 24 hours to discuss how D360 Flux can transform your engineering workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetForm} white>
                    Submit Another Request
                  </Button>
                  <Link to="/">
                    <Button>Back to Home</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonGradient />
      </Section>
    );
  }

  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
      <div className="container">
        <div className="relative z-1 max-w-[42rem] mx-auto">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] p-8 md:p-12">
              <h2 className="h2 mb-4 text-center">Get Started with D360 Flux</h2>
              <p className="body-1 text-n-2 text-center mb-8">
                Transform your engineering workflow with AI-driven project intelligence
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-code text-n-1/50 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-code text-n-1/50 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-code text-n-1/50 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-code text-n-1/50 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 focus:outline-none focus:border-color-1 transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="enterprise-software">Enterprise Software</option>
                    <option value="ai-ml">AI/ML Projects</option>
                    <option value="infrastructure">Infrastructure & DevOps</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-code text-n-1/50 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 transition-colors resize-none"
                    placeholder="Tell us about your project goals and challenges..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" white className="flex-1">
                    Start Your Journey
                  </Button>
                  <Link to="/" className="flex-1">
                    <Button className="w-full">Back to Home</Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ButtonGradient />
    </Section>
  );
};

export default GetStarted;

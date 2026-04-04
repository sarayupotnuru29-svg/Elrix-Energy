import { Target, Eye, CheckCircle, Lightbulb, Users, Wrench } from "lucide-react";

export default function About() {
  const process = [
    {
      icon: <Lightbulb className="w-12 h-12 text-green-600" />,
      title: "1. Consultation",
      description: "We assess your energy needs, roof space, and provide customized solar solutions with detailed cost-benefit analysis.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-green-600" />,
      title: "2. Installation",
      description: "Our certified technicians handle the complete installation process with minimal disruption to your daily routine.",
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "3. Support",
      description: "Ongoing maintenance, monitoring, and support to ensure optimal performance of your solar system.",
    },
  ];

  const values = [
    "Quality first approach in every installation",
    "Transparent pricing with no hidden costs",
    "Customer satisfaction is our top priority",
    "Commitment to environmental sustainability",
    "Innovation in solar technology solutions",
    "Building long-term customer relationships",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1768839727824-28d6f0dcd1d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2xhciUyMGZpZWxkJTIwYXJyYXklMjByZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzc1Mjg3ODQxfDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Solar Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">About ELRIX ENERGY</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Leading the solar energy revolution in India
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-gray-900 text-center">Who We Are</h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                ELRIX ENERGY is a premier solar energy solutions provider dedicated to making clean,
                renewable energy accessible and affordable for everyone. Based in Nellore, we serve
                residential, commercial, and community clients across the region with comprehensive
                solar installation and maintenance services.
              </p>

              <p>
                Founded with a vision to transform India's energy landscape, we combine cutting-edge
                solar technology with expert installation services to deliver reliable, efficient
                energy solutions. Our team of certified professionals brings years of experience and
                technical expertise to every project, ensuring the highest standards of quality and
                performance.
              </p>

              <p>
                We understand that transitioning to solar energy is a significant investment. That's
                why we offer end-to-end support, from initial consultation and system design to
                installation, commissioning, and ongoing maintenance. Our customer-first approach
                means we work closely with you to understand your energy needs and deliver solutions
                that maximize your savings and environmental impact.
              </p>

              <p>
                At ELRIX ENERGY, we're not just installing solar panels—we're building a sustainable
                future for generations to come. Every installation represents a step toward energy
                independence and environmental responsibility. Join us in powering a cleaner, greener
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-10 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-3xl mb-6">Our Mission</h3>
              <p className="text-lg text-green-50 leading-relaxed">
                To empower individuals, businesses, and communities with sustainable solar energy
                solutions that reduce energy costs, minimize environmental impact, and contribute
                to India's renewable energy goals. We strive to make solar energy accessible,
                affordable, and efficient for everyone.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-10 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-3xl mb-6">Our Vision</h3>
              <p className="text-lg text-yellow-50 leading-relaxed">
                To be the leading solar energy provider in India, recognized for innovation,
                quality, and customer satisfaction. We envision a future where clean, renewable
                energy powers every home and business, creating a sustainable world for future
                generations and contributing to global climate action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and hassle-free solar installation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    {step.icon}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-green-200" />
                  )}
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-lg">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Installations</div>
            </div>
            <div>
              <div className="text-5xl text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Years Warranty</div>
            </div>
            <div>
              <div className="text-5xl text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

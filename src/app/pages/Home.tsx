import { Link } from "react-router";
import { Sun, Zap, Shield, Users, TrendingUp, Award, CheckCircle, ArrowRight, Home as HomeIcon, Building2, Building } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <HomeIcon className="w-12 h-12 text-green-600" />,
      title: "Rooftop Solar for Houses",
      description: "Transform your home with clean, renewable energy. Reduce electricity bills and increase property value with our residential solar solutions.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-green-600" />,
      title: "Commercial Solar Solutions",
      description: "Power your business sustainably. Our commercial installations help reduce operational costs while demonstrating environmental responsibility.",
    },
    {
      icon: <Building className="w-12 h-12 text-green-600" />,
      title: "Community Solar Projects",
      description: "Bring clean energy to entire communities. Scalable solutions for housing societies and residential communities.",
    },
  ];

  const whyChooseUs = [
    { icon: <Award />, title: "Expert Installation", description: "Certified professionals with years of experience" },
    { icon: <Shield />, title: "Quality Assurance", description: "Premium components with comprehensive warranties" },
    { icon: <Users />, title: "Customer Support", description: "Dedicated support throughout your solar journey" },
    { icon: <TrendingUp />, title: "Proven Results", description: "Track record of successful installations" },
  ];

  const benefits = [
    "Reduce electricity bills by up to 90%",
    "Environmentally friendly and sustainable",
    "Increase property value",
    "Government subsidies available",
    "25+ year lifespan",
    "Low maintenance costs",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1721070506530-0d5fec6f50a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBibHVlJTIwc2t5JTIwZHJhbWF0aWN8ZW58MXx8fHwxNzc1Mjg3ODMxfDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Solar Installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Sun className="w-16 h-16 text-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 text-white">
            Powering Clean Energy.<br />Building a Sustainable Future.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Transform your property with premium solar solutions. Save money, save the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/919640484677?text=Hi,%20I'm%20interested%20in%20solar%20solutions%20from%20Elrix%20Energy."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Contact on WhatsApp
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Our Solar Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solar energy systems tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="text-green-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Short Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1726221062287-fda475b85493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMGluc3RhbGxhdGlvbiUyMHdvcmtlcnxlbnwxfHx8fDE3NzUyODc4MzN8MA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Solar Panel Installation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">About ELRIX ENERGY</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a leading solar energy solutions provider committed to making clean,
                renewable energy accessible to everyone. With years of experience and hundreds
                of successful installations, we help homeowners and businesses transition to
                sustainable energy.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to power a sustainable future by delivering high-quality solar
                solutions that reduce energy costs and environmental impact.
              </p>
              <Link
                to="/about"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all inline-flex items-center gap-2"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Choose ELRIX ENERGY?</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Your trusted partner for solar energy solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <div className="text-yellow-300">{item.icon}</div>
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-green-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Benefits of Solar Energy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Invest in your future with clean, renewable energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Go Solar?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have made the switch to clean energy.
            Get a free consultation and quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all inline-flex items-center justify-center gap-2"
            >
              Get Free Quote
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/projects"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            >
              View Our Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

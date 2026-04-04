import { Home, Building2, Building, CheckCircle, ArrowRight, Sun, Zap, DollarSign, Leaf } from "lucide-react";
import { Link } from "react-router";

export default function Services() {
  const services = [
    {
      icon: <Home className="w-16 h-16 text-green-600" />,
      title: "Rooftop Solar for Houses",
      description: "Transform your home into a power-generating asset with our residential solar solutions. Perfect for homeowners looking to reduce electricity bills and increase property value.",
      features: [
        "Customized system design for your roof",
        "High-efficiency solar panels",
        "Net metering support",
        "Government subsidy assistance",
        "25+ year performance warranty",
        "Complete installation & maintenance",
      ],
      image: "https://images.unsplash.com/photo-1756542713155-94f62d47d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwcm9vZnRvcCUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3NTI4NzgzMXww&ixlib=rb-4.1.0&q=80&w=800",
    },
    {
      icon: <Building2 className="w-16 h-16 text-green-600" />,
      title: "Rooftop Solar for Commercial Buildings",
      description: "Reduce operational costs and demonstrate environmental leadership with commercial solar installations. Ideal for offices, factories, warehouses, and retail spaces.",
      features: [
        "Large-scale system design",
        "ROI-focused solutions",
        "Minimal business disruption",
        "Commercial financing options",
        "Energy monitoring systems",
        "Corporate sustainability goals",
      ],
      image: "https://images.unsplash.com/photo-1764885519082-68398601112f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMGVuZXJneSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzUyODc4MzJ8MA&ixlib=rb-4.1.0&q=80&w=800",
    },
    {
      icon: <Building className="w-16 h-16 text-green-600" />,
      title: "Rooftop Solar for Housing Communities",
      description: "Bring clean energy to entire residential communities with scalable solar solutions. Perfect for apartment complexes, gated communities, and housing societies.",
      features: [
        "Community-wide energy solutions",
        "Shared cost benefits",
        "Common area power supply",
        "Resident billing management",
        "Scalable installations",
        "Community engagement support",
      ],
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMGVuZXJneSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzUyODc4MzJ8MA&ixlib=rb-4.1.0&q=80&w=800",
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: "Cost Savings",
      description: "Reduce electricity bills by up to 90% with solar energy",
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Eco-Friendly",
      description: "Zero emissions and reduced carbon footprint",
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: "Energy Independence",
      description: "Generate your own power and reduce grid dependency",
    },
    {
      icon: <Sun className="w-12 h-12 text-green-600" />,
      title: "Reliable Power",
      description: "Consistent energy generation with minimal maintenance",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1724041875463-ba0a3f2fc68c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwY2xvc2UlMjB1cCUyMGRldGFpbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1Mjg3ODMzfDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Solar Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive solar energy solutions for every need
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-4xl mb-6 text-gray-900">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all inline-flex items-center gap-2"
                  >
                    Get a Quote
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Why Choose Solar Energy?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the numerous benefits of switching to solar power
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solar solutions with everything you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "High-efficiency solar panels",
              "Inverter and mounting structures",
              "Complete electrical work",
              "Net metering installation",
              "Government approval assistance",
              "Subsidy claim support",
              "System monitoring setup",
              "Comprehensive warranty",
              "Ongoing maintenance support",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Make the Switch?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized solar solution for your property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/919640484677?text=Hi,%20I'm%20interested%20in%20solar%20solutions%20from%20Elrix%20Energy."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-all inline-flex items-center justify-center gap-2"
            >
              Contact on WhatsApp
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

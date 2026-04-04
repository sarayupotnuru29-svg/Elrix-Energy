import { useState } from "react";
import { Building, Home, Users, MapPin, Zap } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects", icon: <Zap size={20} /> },
    { id: "residential", name: "Residential", icon: <Home size={20} /> },
    { id: "commercial", name: "Commercial", icon: <Building size={20} /> },
    { id: "community", name: "Community", icon: <Users size={20} /> },
  ];

  const projects = [
    {
      category: "residential",
      title: "Villa Rooftop Installation",
      location: "Nellore",
      capacity: "5 kW",
      image: "https://images.unsplash.com/photo-1771479755055-6a305f50845e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwcm9vZnRvcCUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3NTI4NzgzMXww&ixlib=rb-4.1.0&q=80&w=800",
      description: "Complete solar installation for luxury villa with battery backup system",
    },
    {
      category: "residential",
      title: "Independent House Solar",
      location: "Vedayapalem",
      capacity: "3 kW",
      image: "https://images.unsplash.com/photo-1768637087224-cffa17561c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGhvbWUlMjBzdXN0YWluYWJsZSUyMGxpdmluZ3xlbnwxfHx8fDE3NzUyODc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=800",
      description: "Residential solar system with net metering for cost-effective power",
    },
    {
      category: "commercial",
      title: "Corporate Office Building",
      location: "Nellore",
      capacity: "50 kW",
      image: "https://images.unsplash.com/photo-1763121379518-2c726078d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHN1c3RhaW5hYmxlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NTI4NzgzNHww&ixlib=rb-4.1.0&q=80&w=800",
      description: "Large-scale commercial installation reducing operational costs by 85%",
    },
    {
      category: "commercial",
      title: "Manufacturing Facility",
      location: "Industrial Area",
      capacity: "100 kW",
      image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMGVuZXJneSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzUyODc4MzJ8MA&ixlib=rb-4.1.0&q=80&w=800",
      description: "Industrial solar solution powering production operations",
    },
    {
      category: "commercial",
      title: "Retail Shopping Complex",
      location: "Nellore",
      capacity: "75 kW",
      image: "https://images.unsplash.com/photo-1766938979504-6172139eefd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHN1c3RhaW5hYmxlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NTI4NzgzNHww&ixlib=rb-4.1.0&q=80&w=800",
      description: "Commercial solar installation for multi-tenant retail space",
    },
    {
      category: "community",
      title: "Gated Community",
      location: "Vedayapalem",
      capacity: "150 kW",
      image: "https://images.unsplash.com/photo-1769340624664-f044b9d0f800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMHNvbGFyJTIwcGFuZWxzJTIwdXJiYW58ZW58MXx8fHwxNzc1Mjg3ODQxfDA&ixlib=rb-4.1.0&q=80&w=800",
      description: "Community solar project serving 50+ homes with common area power",
    },
    {
      category: "community",
      title: "Apartment Complex",
      location: "Nellore",
      capacity: "200 kW",
      image: "https://images.unsplash.com/photo-1618333251902-959caee935a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMHNvbGFyJTIwcGFuZWxzJTIwdXJiYW58ZW58MXx8fHwxNzc1Mjg3ODQxfDA&ixlib=rb-4.1.0&q=80&w=800",
      description: "Large-scale community installation powering 80+ residential units",
    },
    {
      category: "residential",
      title: "Farmhouse Solar System",
      location: "Outskirts",
      capacity: "8 kW",
      image: "https://images.unsplash.com/photo-1761158495949-247659eba9f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlY28lMjBmcmllbmRseSUyMGhvbWUlMjBzdXN0YWluYWJsZSUyMGxpdmluZ3xlbnwxfHx8fDE3NzUyODc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=800",
      description: "Off-grid solar solution for remote farmhouse property",
    },
    {
      category: "commercial",
      title: "Warehouse Solar",
      location: "Industrial Zone",
      capacity: "120 kW",
      image: "https://images.unsplash.com/photo-1762135881505-0afbb4e46c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHN1c3RhaW5hYmxlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NTI4NzgzNHww&ixlib=rb-4.1.0&q=80&w=800",
      description: "Large warehouse rooftop installation with monitoring system",
    },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1770936994282-8811fb7129ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZpZWxkJTIwYXJyYXklMjByZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzc1Mjg3ODQxfDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Solar Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Explore our portfolio of successful solar installations
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    {project.capacity}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin size={16} />
                    {project.location}
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      project.category === "residential" ? "bg-blue-100 text-blue-700" :
                      project.category === "commercial" ? "bg-purple-100 text-purple-700" :
                      "bg-orange-100 text-orange-700"
                    }`}>
                      {project.category === "residential" && <Home size={16} />}
                      {project.category === "commercial" && <Building size={16} />}
                      {project.category === "community" && <Users size={16} />}
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Impact</h2>
            <p className="text-xl text-green-100">
              Making a difference, one installation at a time
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">500+</div>
              <div className="text-green-100">Total Installations</div>
            </div>
            <div>
              <div className="text-5xl mb-2">50MW</div>
              <div className="text-green-100">Total Capacity</div>
            </div>
            <div>
              <div className="text-5xl mb-2">10K+</div>
              <div className="text-green-100">Tons CO2 Saved</div>
            </div>
            <div>
              <div className="text-5xl mb-2">98%</div>
              <div className="text-green-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied customers and start saving on energy costs today
          </p>
          <a
            href="/contact"
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all inline-flex items-center gap-2"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}

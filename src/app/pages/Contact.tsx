import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Phone Numbers",
      details: ["+91 96404 84677", "+91 93471 84677"],
    },
    {
      icon: <Mail className="w-8 h-8 text-green-600" />,
      title: "Email Address",
      details: ["elrixenergy@gmail.com"],
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "Office Address",
      details: ["GNT Main Road", "Vedayapalem", "Nellore, 524004"],
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Business Hours",
      details: ["Mon-Sat: 11 AM - 9 PM", "Sunday: 11 AM - 2 PM"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1726221062299-88f27b653c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMGluc3RhbGxhdGlvbiUyMHdvcmtlcnxlbnwxfHx8fDE3NzUyODc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our solar energy experts
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-lg mb-3 text-gray-900">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your solar energy needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              )}

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-gray-900 mb-1">Prefer WhatsApp?</h3>
                    <p className="text-gray-600 text-sm">Get instant responses on WhatsApp</p>
                  </div>
                  <a
                    href="https://wa.me/919640484677?text=Hi,%20I'm%20interested%20in%20solar%20solutions%20from%20Elrix%20Energy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Visit Our Office</h2>
              <p className="text-lg text-gray-600 mb-8">
                GNT Main Road, Vedayapalem, Nellore, 524004
              </p>

              <div className="rounded-xl overflow-hidden shadow-2xl h-[600px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.5!2d79.9721336!3d14.4291198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3006e3dcd49%3A0x105ce8398e71da03!2sGreen%20Energy%20Solar%20Systems%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ELRIX ENERGY Location"
                ></iframe>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="tel:+919640484677"
                  className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all text-center"
                >
                  <Phone className="inline mr-2" size={20} />
                  Call Now
                </a>
                <a
                  href="mailto:elrixenergy@gmail.com"
                  className="bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition-all text-center"
                >
                  <Mail className="inline mr-2" size={20} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about solar energy
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does installation take?",
                a: "Typical residential installations take 2-3 days, while larger commercial projects may take 1-2 weeks depending on the system size.",
              },
              {
                q: "What is the payback period?",
                a: "Most systems pay for themselves in 3-5 years through electricity savings, after which you enjoy free power for 20+ years.",
              },
              {
                q: "Do you help with government subsidies?",
                a: "Yes! We assist with all documentation and applications for government subsidies and net metering approvals.",
              },
              {
                q: "What warranty do you provide?",
                a: "We offer 25+ year performance warranty on panels, 10 years on inverters, and 5 years on installation workmanship.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Sun, Leaf, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronUp, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppButton from "./WhatsAppButton";
import logo from "../../assets/logo.png";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="ELRIX ENERGY" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900">ELRIX ENERGY</span>
                <span className="text-xs text-green-600">Powering Clean Energy</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    location.pathname === link.path
                      ? "text-green-600 font-semibold"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/919640484677"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 ${
                    location.pathname === link.path
                      ? "text-green-600 font-semibold bg-green-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/919640484677"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-4 mt-3 text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Get Quote
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="ELRIX ENERGY" className="h-12 w-auto" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl">ELRIX ENERGY</span>
                  <span className="text-sm text-green-400">Powering Clean Energy</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Building a sustainable future through innovative solar energy solutions.
                Trusted partner for residential, commercial, and community solar installations.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-green-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone size={18} className="mt-1 flex-shrink-0 text-green-400" />
                  <div>
                    <div>+91 96404 84677</div>
                    <div>+91 93471 84677</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="mt-1 flex-shrink-0 text-green-400" />
                  <span className="break-all">elrixenergy@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-green-400" />
                  <span>GNT Main Road, Vedayapalem, Nellore, 524004</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="mb-2">
              <strong>Business Hours:</strong> Mon-Sat: 11 AM - 9 PM | Sunday: 11 AM - 2 PM
            </p>
            <p>&copy; 2026 ELRIX ENERGY. All rights reserved.</p>

            {/* StaffArc Attribution */}
            <div className="flex justify-center items-center gap-1 mt-4">
              Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" fill="currentColor" /> by
              <a
                href="https://staffarc.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-orange-600 hover:underline"
              >
                <img
                  src="https://www.staffarc.in/images/Staffarc-logo.png"
                  alt="StaffArc logo"
                  className="h-5 w-5 object-contain"
                />
                StaffArc
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
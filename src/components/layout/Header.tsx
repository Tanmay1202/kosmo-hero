import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall, Calendar, Wrench, Shield, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { QuickContactBar } from './QuickContactBar';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vehiclesDropdownOpen, setVehiclesDropdownOpen] = useState(false);
  const [ownershipDropdownOpen, setOwnershipDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setVehiclesDropdownOpen(false);
    setOwnershipDropdownOpen(false);
  }, [location.pathname]);

  const navLinkStyle = (path: string) => {
    const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    return `text-sm font-bold uppercase tracking-wider transition-colors py-2 relative flex items-center gap-1 ${
      isActive ? 'text-[#ee2326]' : 'text-slate-800 hover:text-[#ee2326]'
    }`;
  };

  return (
    <>
      <QuickContactBar />
      <header
        className={`sticky top-0 left-0 right-0 z-40 bg-white transition-all duration-200 border-b ${
          isScrolled ? 'shadow-md border-gray-200 py-2.5' : 'border-gray-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Dealership Attribution */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/brand/hero-logo.svg"
                alt="Hero MotoCorp"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
              <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-black tracking-widest text-[#181818] uppercase">
                  Kosmo Dealership
                </span>
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Punjab • Jalandhar • Ludhiana
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              <Link to="/" className={navLinkStyle('/')}>
                Home
              </Link>

              {/* Vehicles Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setVehiclesDropdownOpen(true)}
                onMouseLeave={() => setVehiclesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`${navLinkStyle('/motorcycles')} cursor-pointer`}
                  onClick={() => setVehiclesDropdownOpen(!vehiclesDropdownOpen)}
                >
                  Vehicles
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {vehiclesDropdownOpen && (
                  <div className="absolute top-full -left-4 w-64 bg-white shadow-xl border border-gray-100 py-2 rounded-sm z-50">
                    <Link
                      to="/motorcycles"
                      className="flex items-center justify-between px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-gray-50 hover:text-[#ee2326] transition-colors"
                    >
                      <span>Motorcycles (18 Models)</span>
                      <span className="text-[10px] bg-red-100 text-[#ee2326] px-1.5 py-0.5 rounded">All CC</span>
                    </Link>
                    <Link
                      to="/scooters"
                      className="flex items-center justify-between px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-gray-50 hover:text-[#ee2326] transition-colors"
                    >
                      <span>Scooters (7 Models)</span>
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded">110-160cc</span>
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link
                      to="/digital-showroom"
                      className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#ee2326]"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#ee2326]" />
                      <span>Digital 360° Showroom</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/offers" className={navLinkStyle('/offers')}>
                Offers
              </Link>

              {/* Ownership & Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOwnershipDropdownOpen(true)}
                onMouseLeave={() => setOwnershipDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`${navLinkStyle('/service')} cursor-pointer`}
                  onClick={() => setOwnershipDropdownOpen(!ownershipDropdownOpen)}
                >
                  Services
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {ownershipDropdownOpen && (
                  <div className="absolute top-full -left-4 w-64 bg-white shadow-xl border border-gray-100 py-2 rounded-sm z-50">
                    <Link
                      to="/service"
                      className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-gray-50 hover:text-[#ee2326]"
                    >
                      <Wrench className="w-4 h-4 text-[#ee2326]" />
                      <span>Workshop & Joyride AMC</span>
                    </Link>
                    <Link
                      to="/book-service"
                      className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-gray-50 hover:text-[#ee2326]"
                    >
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span>Book Service Slot</span>
                    </Link>
                    <Link
                      to="/parts-and-accessories"
                      className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-gray-50 hover:text-[#ee2326]"
                    >
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span>Genuine Parts & Oils</span>
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link
                      to="/exchange"
                      className="block px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#ee2326]"
                    >
                      Hero Sure Vehicle Exchange
                    </Link>
                    <Link
                      to="/finance"
                      className="block px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#ee2326]"
                    >
                      Hero FinCorp EMI Calculator
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/dealer-locator" className={navLinkStyle('/dealer-locator')}>
                Branches
              </Link>

              <Link to="/about" className={navLinkStyle('/about')}>
                About Us
              </Link>

              <Link to="/contact-us" className={navLinkStyle('/contact-us')}>
                Contact
              </Link>
            </nav>

            {/* Right Action Area */}
            <div className="flex items-center space-x-3">
              <Button to="/book-test-ride" variant="primary" size="sm" className="hidden sm:inline-flex">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book Test Ride</span>
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

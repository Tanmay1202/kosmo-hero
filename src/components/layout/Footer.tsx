import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, ShieldAlert, Award, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181818] text-white pt-14 pb-8 border-t-4 border-[#ee2326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Assurance Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-neutral-800">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-neutral-800 text-[#ee2326] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm text-white">Authorized Hero Partner</h4>
              <p className="text-xs text-gray-400 mt-1">Direct OEM backing with genuine warranty & certification.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-neutral-800 text-[#ee2326] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm text-white">4 Flagship Punjab Branches</h4>
              <p className="text-xs text-gray-400 mt-1">Jalandhar, Ludhiana, Dasuya, and Hoshiarpur.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-neutral-800 text-[#ee2326] shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm text-white">24x7 Emergency RSA</h4>
              <p className="text-xs text-gray-400 mt-1">Toll-free roadside assistance: 1800 209 7979.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-neutral-800 text-[#ee2326] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm text-white">Open 7 Days a Week</h4>
              <p className="text-xs text-gray-400 mt-1">09:30 AM to 07:00 PM across all branch showrooms.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-12 border-b border-neutral-800">
          {/* Col 1: Brand & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/assets/brand/hero-logo.svg" alt="Hero MotoCorp" className="h-9 w-auto brightness-200" />
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Kosmo Hero is Punjab&apos;s premier authorized dealership network, delivering reliable Hero two-wheelers, certified workshop service, and transparent ownership.
            </p>
            <div className="text-xs text-gray-400 space-y-1.5">
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ee2326]" />
                <a href="mailto:customercare@kosmohero.in" className="hover:text-white">customercare@kosmohero.in</a>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#ee2326]" />
                <a href="tel:+917045169141" className="hover:text-white">+91 70451-69141</a>
              </p>
            </div>
          </div>

          {/* Col 2: Motorcycles */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ee2326]"></span>
              Motorcycles
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link to="/motorcycles" className="hover:text-white transition-colors">All Motorcycles</Link></li>
              <li><Link to="/motorcycles/splendor-plus-xtec-2-0" className="hover:text-white transition-colors">Splendor+ XTEC 2.0</Link></li>
              <li><Link to="/motorcycles/splendor-plus" className="hover:text-white transition-colors">Splendor+</Link></li>
              <li><Link to="/motorcycles/xtreme-125r" className="hover:text-white transition-colors">Xtreme 125R</Link></li>
              <li><Link to="/motorcycles/xtreme-160r-4v" className="hover:text-white transition-colors">Xtreme 160R 4V</Link></li>
              <li><Link to="/motorcycles/xpulse-200-4v" className="hover:text-white transition-colors">XPulse 200 4V</Link></li>
              <li><Link to="/motorcycles/karizma-xmr" className="hover:text-white transition-colors">Karizma XMR</Link></li>
              <li><Link to="/motorcycles/hf-deluxe" className="hover:text-white transition-colors">HF Deluxe</Link></li>
            </ul>
          </div>

          {/* Col 3: Scooters */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ee2326]"></span>
              Scooters
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link to="/scooters" className="hover:text-white transition-colors">All Scooters</Link></li>
              <li><Link to="/scooters/new-destini-125" className="hover:text-white transition-colors">New Destini 125 (ABS)</Link></li>
              <li><Link to="/scooters/xoom-110" className="hover:text-white transition-colors">Xoom 110 Cornering</Link></li>
              <li><Link to="/scooters/xoom-160" className="hover:text-white transition-colors">Xoom 160 Maxi</Link></li>
              <li><Link to="/scooters/pleasure-plus-xtec" className="hover:text-white transition-colors">Pleasure+ XTEC</Link></li>
              <li><Link to="/scooters/destini-prime" className="hover:text-white transition-colors">Destini Prime</Link></li>
              <li><Link to="/digital-showroom" className="hover:text-white transition-colors">Digital 360° Showroom</Link></li>
            </ul>
          </div>

          {/* Col 4: Services & Spares */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ee2326]"></span>
              Service & Care
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link to="/service" className="hover:text-white transition-colors">Service Overview</Link></li>
              <li><Link to="/book-service" className="hover:text-white transition-colors">Book Service Appointment</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Hero Joyride Annual AMC</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">5-Year Warranty Policy</Link></li>
              <li><Link to="/parts-and-accessories" className="hover:text-white transition-colors">Hero Genuine Parts</Link></li>
              <li><Link to="/parts-and-accessories" className="hover:text-white transition-colors">Hero 4T Plus Lubricants</Link></li>
              <li><Link to="/finance" className="hover:text-white transition-colors">Hero FinCorp EMI Calculator</Link></li>
              <li><Link to="/exchange" className="hover:text-white transition-colors">Hero Sure Vehicle Exchange</Link></li>
            </ul>
          </div>

          {/* Col 5: Dealership & Legal */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ee2326]"></span>
              Dealership
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Kosmo Hero</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">MD&apos;s Message (Mr. Raghav Ahuja)</Link></li>
              <li><Link to="/dealer-locator" className="hover:text-white transition-colors">Dealer & Branch Locator</Link></li>
              <li><Link to="/offers" className="hover:text-white transition-colors">Current Festive Offers</Link></li>
              <li><Link to="/book-test-ride" className="hover:text-white transition-colors">Book a Test Ride</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers & Vacancies</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Photo & Media Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Riding Tips & Articles</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Kosmo Hero Motors. Authorized Hero MotoCorp Dealership Network Punjab. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link>
            <Link to="/contact-us" className="hover:text-gray-300">Support Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

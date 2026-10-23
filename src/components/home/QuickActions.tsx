import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, MapPin, Wrench, Calculator, ChevronRight } from 'lucide-react';

export const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Book a Test Ride',
      subtitle: 'Experience your chosen model at home or showroom',
      icon: PhoneCall,
      to: '/book-test-ride',
      badge: 'Fast-Track',
      color: 'bg-[#ee2326]',
    },
    {
      title: 'Find Nearest Branch',
      subtitle: 'Showrooms & workshops in Jalandhar, Ludhiana, Dasuya, Hoshiarpur',
      icon: MapPin,
      to: '/dealer-locator',
      badge: '4 Locations',
      color: 'bg-[#181818]',
    },
    {
      title: 'Book Workshop Service',
      subtitle: 'Certified master technicians & 90-min express bays',
      icon: Wrench,
      to: '/book-service',
      badge: 'Genuine Care',
      color: 'bg-[#181818]',
    },
    {
      title: 'Calculate EMI & Loans',
      subtitle: 'Low down payments & instant spot approval via DigiFin',
      icon: Calculator,
      to: '/finance',
      badge: '6.99% ROI',
      color: 'bg-[#181818]',
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <Link
              key={idx}
              to={act.to}
              className="bg-white rounded-sm border border-gray-200 hover:border-[#ee2326] shadow-md hover:shadow-xl transition-all duration-200 p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-sm ${act.color} text-white group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {act.badge}
                  </span>
                </div>

                <h3 className="text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-[#ee2326] transition-colors">
                  {act.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {act.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#ee2326]">
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

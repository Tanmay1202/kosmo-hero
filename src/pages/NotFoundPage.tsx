import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Home, Bike, MapPin, Wrench } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="text-7xl font-black text-[#ee2326] tracking-tighter font-mono">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button to="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return Home</span>
          </Button>
          <Button to="/motorcycles" variant="secondary" size="md">
            <Bike className="w-4 h-4 mr-1.5" />
            <span>Explore Motorcycles</span>
          </Button>
        </div>

        <div className="pt-8 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs">
          <Link to="/dealer-locator" className="p-3 bg-gray-50 rounded hover:bg-gray-100 text-gray-700 font-bold uppercase flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#ee2326]" />
            <span>Our Branches</span>
          </Link>
          <Link to="/service" className="p-3 bg-gray-50 rounded hover:bg-gray-100 text-gray-700 font-bold uppercase flex items-center justify-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-[#ee2326]" />
            <span>Service &amp; AMC</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

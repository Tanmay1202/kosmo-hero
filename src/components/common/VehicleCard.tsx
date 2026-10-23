import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Fuel, Zap, ChevronRight, PhoneCall } from 'lucide-react';
import { Vehicle } from '../../types/vehicle';
import { Badge } from './Badge';
import { Button } from './Button';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const detailUrl = vehicle.type === 'motorcycle' ? `/motorcycles/${vehicle.slug}` : `/scooters/${vehicle.slug}`;
  const testRideUrl = `/book-test-ride?model=${vehicle.slug}`;

  return (
    <div className="bg-white rounded-sm border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden">
      {/* Top Banner / Badge */}
      <div className="p-4 pb-0 flex items-center justify-between">
        {vehicle.badge ? (
          <Badge variant="red">{vehicle.badge}</Badge>
        ) : (
          <Badge variant="gray">{vehicle.category}</Badge>
        )}
        <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
          {vehicle.displacementCc} cc
        </span>
      </div>

      {/* Vehicle Image Container */}
      <div className="relative h-48 sm:h-52 w-full p-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-neutral-50/50">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
          onError={(e) => {
            // Graceful fallback to local SVG if remote Scene7 URL is throttled
            (e.target as HTMLImageElement).src = '/assets/placeholder-bike.svg';
          }}
        />
      </div>

      {/* Content & Specs */}
      <div className="p-4 sm:p-5 pt-2 flex-grow flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#ee2326]">
            {vehicle.category}
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 group-hover:text-[#ee2326] transition-colors mt-0.5">
            <Link to={detailUrl}>{vehicle.name}</Link>
          </h3>
          <p className="text-xs text-gray-500 line-clamp-1 mt-1 font-medium">
            {vehicle.tagline}
          </p>

          {/* Quick Specs Chips */}
          <div className="grid grid-cols-3 gap-2 my-4 py-2 border-y border-gray-100 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-400 font-medium uppercase flex items-center gap-0.5">
                <Gauge className="w-3 h-3 text-[#ee2326]" /> Engine
              </span>
              <span className="text-xs font-bold text-gray-800 mt-0.5">{vehicle.displacementCc} cc</span>
            </div>

            <div className="flex flex-col items-center border-x border-gray-100">
              <span className="text-[10px] text-gray-400 font-medium uppercase flex items-center gap-0.5">
                <Zap className="w-3 h-3 text-[#ee2326]" /> Power
              </span>
              <span className="text-xs font-bold text-gray-800 mt-0.5 truncate max-w-full px-1">
                {vehicle.specs.engine.maxPower.split('@')[0].trim()}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-400 font-medium uppercase flex items-center gap-0.5">
                <Fuel className="w-3 h-3 text-[#ee2326]" /> Fuel
              </span>
              <span className="text-xs font-bold text-gray-800 mt-0.5">
                {vehicle.mileageClaim ? '70+ kmpl' : 'xSens FI'}
              </span>
            </div>
          </div>
        </div>

        {/* Pricing & Call to Actions */}
        <div className="pt-2">
          <div className="mb-3">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
              Starting Ex-Showroom (Delhi)
            </span>
            <div className="text-lg font-black text-gray-900 tracking-tight">
              {vehicle.startingPrice}
              <span className="text-[10px] text-gray-400 font-normal ml-1">*</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button to={detailUrl} variant="secondary" size="sm" className="w-full text-xs">
              <span>Explore</span>
              <ChevronRight className="w-3 h-3 ml-0.5" />
            </Button>
            <Button to={testRideUrl} variant="primary" size="sm" className="w-full text-xs">
              <PhoneCall className="w-3 h-3 mr-0.5" />
              <span>Test Ride</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

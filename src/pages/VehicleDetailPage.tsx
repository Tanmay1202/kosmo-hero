import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { MOTORCYCLES } from '../data/motorcycles';
import { SCOOTERS } from '../data/scooters';
import { VehicleCard } from '../components/common/VehicleCard';
import { TestRideForm } from '../components/forms/TestRideModal';
import { FinanceCalculator } from '../components/forms/FinanceCalculator';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import {
  Gauge,
  Zap,
  Fuel,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  PhoneCall,
  Calendar,
  Layers,
  Wrench,
  HelpCircle,
} from 'lucide-react';

export const VehicleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const allVehicles = [...MOTORCYCLES, ...SCOOTERS];
  const vehicle = allVehicles.find((v) => v.slug === slug);

  // If vehicle slug is not recognized
  if (!vehicle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Badge variant="red" className="mb-3">Vehicle Not Found</Badge>
        <h1 className="text-3xl sm:text-4xl font-black uppercase text-gray-900 mb-4">
          Model Not Available
        </h1>
        <p className="text-sm text-gray-600 mb-8 max-w-md mx-auto">
          The requested Hero model does not exist or has been updated in our catalog. Please explore our complete lineup of motorcycles and scooters.
        </p>
        <div className="flex justify-center gap-4">
          <Button to="/motorcycles" variant="primary" size="md">
            View Motorcycles
          </Button>
          <Button to="/scooters" variant="secondary" size="md">
            View Scooters
          </Button>
        </div>
      </div>
    );
  }

  // Interactive State
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [activeSpecTab, setActiveSpecTab] = useState<'engine' | 'brakes' | 'suspension' | 'dimensions' | 'electricals'>('engine');

  const selectedVariant = vehicle.variants[selectedVariantIndex] || vehicle.variants[0];
  const selectedColor = vehicle.colors[selectedColorIndex] || vehicle.colors[0];

  // Similar models in same category or price range
  const similarModels = allVehicles
    .filter((v) => v.id !== vehicle.id && (v.category === vehicle.category || v.type === vehicle.type))
    .slice(0, 4);

  const priceNumeric = parseInt(vehicle.startingPrice.replace(/[^0-9]/g, '')) || 85000;

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Quick-Action Subheader */}
      <div className="sticky top-[68px] sm:top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-gray-900 truncate">
              {vehicle.name}
            </h2>
            <span className="text-xs font-bold text-[#ee2326] hidden sm:inline">
              {selectedVariant.price}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="#specifications"
              className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black hidden md:inline px-3 py-1.5"
            >
              Specs
            </a>
            <a
              href="#finance-calc"
              className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black hidden md:inline px-3 py-1.5"
            >
              EMI Calc
            </a>
            <Button
              href={`#book-test-ride`}
              onClick={() => {
                document.getElementById('test-ride-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="primary"
              size="sm"
            >
              <PhoneCall className="w-3.5 h-3.5 mr-1" />
              <span>Book Test Ride</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { label: vehicle.type === 'motorcycle' ? 'Motorcycles' : 'Scooters', to: vehicle.type === 'motorcycle' ? '/motorcycles' : '/scooters' },
            { label: vehicle.name },
          ]}
        />
      </div>

      {/* Main Vehicle Showcase Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Media & Colors (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full h-72 sm:h-96 lg:h-[420px] bg-gradient-to-b from-gray-50 to-neutral-100 rounded-sm border border-gray-200 p-6 flex items-center justify-center overflow-hidden">
              <div className="absolute w-80 h-80 rounded-full bg-[#ee2326]/10 filter blur-3xl"></div>

              <img
                src={vehicle.image}
                alt={`${vehicle.name} in ${selectedColor.name}`}
                className="max-h-full max-w-full object-contain drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/placeholder-bike.svg';
                }}
              />

              {vehicle.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="red">{vehicle.badge}</Badge>
                </div>
              )}
            </div>

            {/* Color Swatch Picker */}
            <div className="w-full mt-6 p-4 bg-gray-50 rounded-sm border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                  Available Shades
                </span>
                <span className="text-xs font-bold text-gray-900 uppercase">
                  Selected Color: <span className="text-[#ee2326]">{selectedColor.name}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                {vehicle.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColorIndex(index)}
                    title={color.name}
                    className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                      selectedColorIndex === index ? 'ring-2 ring-[#ee2326] scale-110 border-white' : 'border-gray-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Variants & Highlights (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">
                {vehicle.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 mt-1">
                {vehicle.name}
              </h1>
              <p className="text-sm text-gray-600 mt-2 font-medium leading-relaxed">
                {vehicle.tagline}
              </p>
            </div>

            {/* Starting Price Box */}
            <div className="p-5 bg-neutral-900 text-white rounded-sm border-l-4 border-[#ee2326]">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                Selected Variant Price
              </span>
              <div className="text-3xl font-black text-white tracking-tight mt-0.5">
                {selectedVariant.price}
                <span className="text-xs font-normal text-gray-400 ml-1.5">*Ex-Showroom Delhi</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-1">
                Prices vary by location. Contact your nearest Kosmo Hero branch for exact Punjab on-road quotation.
              </p>
            </div>

            {/* Variant Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Choose Model Variant
              </label>
              <div className="space-y-2">
                {vehicle.variants.map((variant, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`p-3.5 rounded-sm border transition-all cursor-pointer flex items-center justify-between ${
                      selectedVariantIndex === idx
                        ? 'border-[#ee2326] bg-red-50/40 ring-1 ring-[#ee2326]'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-900">{variant.name}</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        {variant.highlights.join(' • ')}
                      </div>
                    </div>
                    <div className="text-xs font-mono font-bold text-gray-900">{variant.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              {vehicle.slug !== 'karizma-xmr' ? (
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    document.getElementById('test-ride-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <PhoneCall className="w-4 h-4 mr-1" />
                  <span>Book Test Ride Online</span>
                </Button>
              ) : (
                <Button
                  to="/contact-us"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <PhoneCall className="w-4 h-4 mr-1" />
                  <span>Enquire Availability</span>
                </Button>
              )}
              <Button
                to="/dealer-locator"
                variant="secondary"
                size="lg"
                className="w-full"
              >
                <span>Find Showroom</span>
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Highlight Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 py-8 border-y border-gray-200">
          <div className="p-4 bg-gray-50 rounded-sm text-center">
            <Gauge className="w-6 h-6 text-[#ee2326] mx-auto mb-1.5" />
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Displacement</span>
            <div className="text-xl sm:text-2xl font-black text-gray-900 mt-0.5">{vehicle.displacementCc} cc</div>
          </div>

          <div className="p-4 bg-gray-50 rounded-sm text-center">
            <Zap className="w-6 h-6 text-[#ee2326] mx-auto mb-1.5" />
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Max Power</span>
            <div className="text-xl sm:text-2xl font-black text-gray-900 mt-0.5 truncate px-1">
              {vehicle.specs.engine.maxPower.split('@')[0]}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-sm text-center">
            <Fuel className="w-6 h-6 text-[#ee2326] mx-auto mb-1.5" />
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Max Torque</span>
            <div className="text-xl sm:text-2xl font-black text-gray-900 mt-0.5 truncate px-1">
              {vehicle.specs.engine.maxTorque.split('@')[0]}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-sm text-center">
            <ShieldCheck className="w-6 h-6 text-[#ee2326] mx-auto mb-1.5" />
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Warranty</span>
            <div className="text-xl sm:text-2xl font-black text-gray-900 mt-0.5">5 Years OEM</div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">Key Engineering</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mt-1">
              Standout Features &amp; Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicle.keyFeatures.map((feat, index) => (
              <div key={index} className="p-5 bg-white rounded-sm border border-gray-200 shadow-2xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ee2326] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Technical Specification Tabs */}
      <section id="specifications" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">Factory Data</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mt-1">
            Complete Technical Specifications
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Official engineering specifications as published by Hero MotoCorp India.
          </p>
        </div>

        {/* Spec Tab Buttons */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 mb-6 border-b border-gray-200">
          {[
            { id: 'engine', label: 'Engine & Performance' },
            { id: 'brakes', label: 'Brakes & Tyres' },
            { id: 'suspension', label: 'Suspension & Chassis' },
            { id: 'dimensions', label: 'Dimensions & Weights' },
            { id: 'electricals', label: 'Electricals' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSpecTab(tab.id as any)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-t-sm whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                activeSpecTab === tab.id
                  ? 'border-[#ee2326] text-[#ee2326] bg-red-50/30'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Spec Table Content */}
        <div className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-xs">
          <table className="w-full text-xs text-left">
            <tbody className="divide-y divide-gray-100">
              {activeSpecTab === 'engine' && (
                <>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500 w-1/3">Engine Type</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.engine.type}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Displacement</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.engine.displacement}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Max Power</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.engine.maxPower}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Max Torque</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.engine.maxTorque}</td></tr>
                  {vehicle.specs.engine.boreStroke && <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Bore x Stroke</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.engine.boreStroke}</td></tr>}
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Fuel System</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.engine.fuelSystem}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Starting Method</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.engine.startingMethod}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Transmission / Gearbox</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.transmission.gearbox}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Clutch</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.transmission.clutchType}</td></tr>
                </>
              )}

              {activeSpecTab === 'brakes' && (
                <>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500 w-1/3">Front Brake</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.brakesAndTyres.frontBrake}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Rear Brake</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.brakesAndTyres.rearBrake}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Front Tyre</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.brakesAndTyres.frontTyre}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Rear Tyre</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.brakesAndTyres.rearTyre}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Wheels Type</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.brakesAndTyres.wheelsType}</td></tr>
                  {vehicle.specs.brakesAndTyres.brakingSystem && <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Braking Safety System</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.brakesAndTyres.brakingSystem}</td></tr>}
                </>
              )}

              {activeSpecTab === 'suspension' && (
                <>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500 w-1/3">Front Suspension</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.suspension.front}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Rear Suspension</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.suspension.rear}</td></tr>
                </>
              )}

              {activeSpecTab === 'dimensions' && (
                <>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500 w-1/3">Overall (L x W x H)</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.dimensions.lengthWidthHeight}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Wheelbase</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.dimensions.wheelbase}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Seat Height</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.dimensions.seatHeight}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Ground Clearance</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.dimensions.groundClearance}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Fuel Tank Capacity</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.dimensions.fuelTankCapacity}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Kerb Weight</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.dimensions.kerbWeight}</td></tr>
                </>
              )}

              {activeSpecTab === 'electricals' && (
                <>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500 w-1/3">Battery</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.electricals.battery}</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Headlamp</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.electricals.headlamp}</td></tr>
                  {vehicle.specs.electricals.tailLamp && <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold uppercase text-gray-500">Tail Lamp</td><td className="py-3 px-4 font-semibold text-gray-900">{vehicle.specs.electricals.tailLamp}</td></tr>}
                </>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Embedded Finance Calculator */}
      <section id="finance-calc" className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FinanceCalculator initialPrice={priceNumeric} modelName={vehicle.name} />
        </div>
      </section>

      {/* Embedded Test Ride Booking Form */}
      {vehicle.slug !== 'karizma-xmr' && (
        <section id="test-ride-section" className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestRideForm initialModelSlug={vehicle.slug} />
        </section>
      )}

      {/* Similar Models Carousel */}
      {similarModels.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">More Choices</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-1">
                  Similar Vehicles You May Like
                </h3>
              </div>
              <Button to={vehicle.type === 'motorcycle' ? '/motorcycles' : '/scooters'} variant="ghost" size="sm">
                <span>View All {vehicle.type === 'motorcycle' ? 'Motorcycles' : 'Scooters'}</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarModels.map((sim) => (
                <VehicleCard key={sim.id} vehicle={sim} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

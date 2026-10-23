import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { MOTORCYCLES } from '../data/motorcycles';
import { SCOOTERS } from '../data/scooters';
import { Button } from '../components/common/Button';
import { Sparkles, RotateCw, Eye, ArrowRight, PhoneCall, Gauge, Zap, Fuel, ShieldCheck } from 'lucide-react';

export const DigitalShowroomPage: React.FC = () => {
  const showcaseModels = [
    MOTORCYCLES.find((m) => m.slug === 'karizma-xmr')!,
    MOTORCYCLES.find((m) => m.slug === 'xpulse-200-4v')!,
    MOTORCYCLES.find((m) => m.slug === 'xtreme-125r')!,
    MOTORCYCLES.find((m) => m.slug === 'splendor-plus-xtec-2-0')!,
    SCOOTERS.find((s) => s.slug === 'new-destini-125')!,
    SCOOTERS.find((s) => s.slug === 'xoom-160')!,
  ].filter(Boolean);

  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [viewAngle, setViewAngle] = useState<'profile' | 'action'>('profile');

  const currentVehicle = showcaseModels[selectedModelIndex] || showcaseModels[0];
  const currentColor = currentVehicle.colors[selectedColorIndex] || currentVehicle.colors[0];

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-black py-10 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Digital Showroom' }]} className="text-gray-400 mb-2" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Virtual Two-Wheeler Studio
              </span>
              <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                360° Digital Showroom
              </h1>
            </div>

            <Button to={`/book-test-ride?model=${currentVehicle.slug}`} variant="primary" size="md">
              <PhoneCall className="w-4 h-4 mr-1" />
              <span>Book Physical Test Ride</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Model Selector Bar */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 mb-8 border-b border-neutral-800">
          {showcaseModels.map((model, idx) => (
            <button
              key={model.id}
              onClick={() => {
                setSelectedModelIndex(idx);
                setSelectedColorIndex(0);
              }}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                selectedModelIndex === idx
                  ? 'border-[#ee2326] text-white bg-neutral-900'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {model.name} ({model.displacementCc} cc)
            </button>
          ))}
        </div>

        {/* 360 Studio Viewport */}
        <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black rounded-sm border border-neutral-800 flex items-center justify-center p-6 overflow-hidden">
          {/* Spotlight Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#ee2326]/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>

          {/* Floor Ring */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[600px] h-[60px] border border-neutral-800/80 rounded-[100%] pointer-events-none"></div>

          {/* Vehicle Display */}
          <img
            key={`${currentVehicle.id}-${selectedColorIndex}`}
            src={currentVehicle.image}
            alt={currentVehicle.name}
            className="max-h-[300px] sm:max-h-[420px] lg:max-h-[460px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] z-10 transition-all duration-500 animate-fadeIn"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/placeholder-bike.svg';
            }}
          />

          {/* Top Left Model Overlay */}
          <div className="absolute top-6 left-6 z-20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ee2326] block">
              {currentVehicle.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              {currentVehicle.name}
            </h2>
            <div className="text-lg font-mono font-bold text-gray-300 mt-0.5">
              {currentVehicle.startingPrice}*
            </div>
          </div>

          {/* Bottom Interactive Color Bar */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-900/90 backdrop-blur-md p-4 rounded-sm border border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase text-gray-400">Available Color:</span>
              <div className="flex items-center gap-2">
                {currentVehicle.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColorIndex(i)}
                    title={c.name}
                    className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
                      selectedColorIndex === i ? 'ring-2 ring-[#ee2326] scale-110 border-white' : 'border-neutral-600 hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-white ml-2 hidden md:inline">
                {currentColor.name}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Button
                to={currentVehicle.type === 'motorcycle' ? `/motorcycles/${currentVehicle.slug}` : `/scooters/${currentVehicle.slug}`}
                variant="secondary"
                size="sm"
                className="border border-neutral-700"
              >
                <span>Full Specifications</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
              <Button to={`/book-test-ride?model=${currentVehicle.slug}`} variant="primary" size="sm">
                <span>Book Test Ride</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-4 bg-neutral-900 rounded-sm border border-neutral-800">
            <Gauge className="w-5 h-5 text-[#ee2326] mb-1" />
            <div className="text-[10px] uppercase font-bold text-gray-400">Engine Displacement</div>
            <div className="text-base font-bold text-white mt-0.5">{currentVehicle.displacementCc} cc</div>
          </div>

          <div className="p-4 bg-neutral-900 rounded-sm border border-neutral-800">
            <Zap className="w-5 h-5 text-[#ee2326] mb-1" />
            <div className="text-[10px] uppercase font-bold text-gray-400">Power Rating</div>
            <div className="text-base font-bold text-white mt-0.5 truncate">{currentVehicle.specs.engine.maxPower.split('@')[0]}</div>
          </div>

          <div className="p-4 bg-neutral-900 rounded-sm border border-neutral-800">
            <Fuel className="w-5 h-5 text-[#ee2326] mb-1" />
            <div className="text-[10px] uppercase font-bold text-gray-400">Fuel Injection</div>
            <div className="text-base font-bold text-white mt-0.5">{currentVehicle.specs.engine.fuelSystem.split(' ')[0]}</div>
          </div>

          <div className="p-4 bg-neutral-900 rounded-sm border border-neutral-800">
            <ShieldCheck className="w-5 h-5 text-[#ee2326] mb-1" />
            <div className="text-[10px] uppercase font-bold text-gray-400">Warranty Coverage</div>
            <div className="text-base font-bold text-white mt-0.5">5 Years OEM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

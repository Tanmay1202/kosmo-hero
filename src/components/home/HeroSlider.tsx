import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Zap, Award, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

interface Slide {
  badge: string;
  title: string;
  titleHighlight: string;
  tagline: string;
  priceNote: string;
  bgGradient: string;
  image: string;
  primaryLink: string;
  primaryText: string;
  secondaryLink: string;
  secondaryText: string;
}

const SLIDES: Slide[] = [
  {
    badge: 'Dual-Sport Adventure',
    title: 'Conquer Every Trail with the',
    titleHighlight: 'XPulse 200 4V',
    tagline: '210cc 4-Valve high-torque motor with 220mm ground clearance and 3-mode ABS.',
    priceNote: 'Starting Ex-Showroom ₹ 1,47,391*',
    bgGradient: 'from-neutral-950 via-neutral-900 to-neutral-800',
    image: 'https://s7ap1.scene7.com/is/image/hmcl/xpulse-200-4v?fmt=webp-alpha',
    primaryLink: '/book-test-ride?model=xpulse-200-4v',
    primaryText: 'Book Test Ride',
    secondaryLink: '/motorcycles/xpulse-200-4v',
    secondaryText: 'Explore XPulse',
  },
  {
    badge: 'Legendary Mileage Champion',
    title: 'The Evolution of India’s Icon',
    titleHighlight: 'Splendor+ XTEC 2.0',
    tagline: '73 kmpl best-in-class fuel efficiency with full LED headlamp and Bluetooth console.',
    priceNote: 'Starting Ex-Showroom ₹ 82,911*',
    bgGradient: 'from-zinc-950 via-neutral-900 to-stone-900',
    image: 'https://s7ap1.scene7.com/is/image/hmcl/splendorplus_xtec_2.0?fmt=webp-alpha',
    primaryLink: '/book-test-ride?model=splendor-plus-xtec-2-0',
    primaryText: 'Book Test Ride',
    secondaryLink: '/motorcycles/splendor-plus-xtec-2-0',
    secondaryText: 'View Details',
  },
  {
    badge: 'Adventure Unrivaled',
    title: 'Conquer Every Terrain with',
    titleHighlight: 'XPulse 200 4V Pro',
    tagline: 'Fully adjustable rally suspension, 220mm ground clearance, and 3-mode ABS.',
    priceNote: 'Starting Ex-Showroom ₹ 1,54,774*',
    bgGradient: 'from-neutral-950 via-emerald-950/40 to-neutral-900',
    image: 'https://s7ap1.scene7.com/is/image/hmcl/xpulse-200-4v?fmt=webp-alpha',
    primaryLink: '/book-test-ride?model=xpulse',
    primaryText: 'Experience The Trail',
    secondaryLink: '/motorcycles/xpulse-200-4v',
    secondaryText: 'Explore XPulse',
  },
  {
    badge: 'Neo-Retro Sophistication',
    title: 'Luxury Commuting Redefined',
    titleHighlight: 'New Destini 125',
    tagline: 'Segment-first front ABS with diamond-cut alloys and champagne copper styling.',
    priceNote: 'Starting Ex-Showroom ₹ 80,050*',
    bgGradient: 'from-neutral-950 via-neutral-900 to-zinc-900',
    image: 'https://s7ap1.scene7.com/is/image/hmcl/destini-prime?fmt=webp-alpha',
    primaryLink: '/book-test-ride?model=new-destini-125',
    primaryText: 'Book Test Ride',
    secondaryLink: '/scooters/new-destini-125',
    secondaryText: 'Explore Destini',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative w-full overflow-hidden bg-black text-white min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} transition-colors duration-700`}></div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ee2326_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#ee2326]/10 border border-[#ee2326]/30 text-[#ee2326] text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#ee2326] animate-pulse"></span>
              {slide.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-white">
              {slide.title} <br className="hidden sm:inline" />
              <span className="text-[#ee2326]">{slide.titleHighlight}</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed">
              {slide.tagline}
            </p>

            <div className="text-xs sm:text-sm font-semibold text-gray-400">
              {slide.priceNote}
            </div>

            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
              <Button to={slide.primaryLink} variant="primary" size="lg">
                <span>{slide.primaryText}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button to={slide.secondaryLink} variant="secondary" size="lg" className="border border-neutral-700 hover:border-neutral-500">
                <span>{slide.secondaryText}</span>
              </Button>
            </div>
          </div>

          {/* Right Hero Image (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]">
            {/* Glow backing */}
            <div className="absolute w-72 h-72 rounded-full bg-[#ee2326]/15 filter blur-3xl"></div>
            
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.titleHighlight}
              className="max-h-[280px] sm:max-h-[360px] lg:max-h-[420px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] z-10 transition-all duration-700 animate-fadeIn"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/placeholder-bike.svg';
              }}
            />
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center space-x-2">
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
          className="p-2 rounded-sm bg-neutral-900/80 hover:bg-[#ee2326] text-white border border-neutral-700 transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex space-x-1.5 px-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all rounded-full ${
                currentSlide === idx ? 'w-6 bg-[#ee2326]' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
          className="p-2 rounded-sm bg-neutral-900/80 hover:bg-[#ee2326] text-white border border-neutral-700 transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

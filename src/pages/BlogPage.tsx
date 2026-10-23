import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../components/common/Button';

export const BlogPage: React.FC = () => {
  const articles = [
    {
      id: 'i3s-technology-explained',
      title: 'How Hero’s i3S (Idle Stop-Start System) Saves Up to 10% Fuel in City Traffic',
      category: 'Technology',
      readTime: '4 min read',
      date: 'October 2026',
      summary: 'Learn the science behind Hero’s patented i3S technology that automatically switches off your engine when idling at traffic signals and restarts with a simple clutch pull.',
      image: 'https://s7ap1.scene7.com/is/image/hmcl/splendorplus_xtec_2.0?fmt=webp-alpha',
    },
    {
      id: 'xpulse-200-monsoon-trail-tips',
      title: 'Preparing Your XPulse 200 4V for Monsoon Trails & Rough Punjab Terrain',
      category: 'Rider Tips',
      readTime: '6 min read',
      date: 'September 2026',
      summary: 'Essential tire pressure advice, chain lubrication practices, and air filter maintenance for adventure tourers conquering rain-drenched tracks and muddy village roads.',
      image: 'https://s7ap1.scene7.com/is/image/hmcl/xpulse-200-4v?fmt=webp-alpha',
    },
    {
      id: 'why-hero-genuine-4t-oil-matters',
      title: 'Why Genuine Hero 4T Plus Engine Oil is Essential for 70,000 KM Warranty',
      category: 'Maintenance',
      readTime: '3 min read',
      date: 'August 2026',
      summary: 'Counterfeit oils cause thermal degradation and premature piston wear. Discover how Hero OEM synthetic blends keep your engine running cooler and cleaner.',
      image: 'https://s7ap1.scene7.com/is/image/hmcl/Karizma_xmr?fmt=webp-alpha',
    },
    {
      id: 'be-a-safe-hero-road-guidelines',
      title: 'Be A Safe Hero: 7 Vital Golden Rules for Highway & City Riding in Punjab',
      category: 'Road Safety',
      readTime: '5 min read',
      date: 'July 2026',
      summary: 'From proper ISI helmet strap tightness to maintaining safe blind-spot distances behind commercial trucks — our certified riding safety recommendations.',
      image: 'https://s7ap1.scene7.com/is/image/hmcl/xtreme-new-05?fmt=webp-alpha',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Rider Articles & Tips' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Hero Rider Knowledgebase
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Riding Guides, Tips &amp; News
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Expert motorcycle maintenance guides, fuel-saving hacks, road safety techniques, and engineering breakthroughs from Hero MotoCorp.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full p-6 flex items-center justify-center bg-gradient-to-b from-gray-50 to-neutral-100 border-b border-gray-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/placeholder-bike.svg';
                    }}
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-[#181818] text-white px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 font-medium mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 hover:text-[#ee2326] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Button to="/book-test-ride" variant="ghost" size="sm" className="p-0 text-[#ee2326] hover:bg-transparent hover:underline text-xs">
                  <span>Explore Associated Models</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

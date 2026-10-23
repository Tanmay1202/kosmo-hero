import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { JOB_OPENINGS } from '../data/careers';
import { JobOpening } from '../types/career';
import { JobApplyModal } from '../components/forms/JobApplyModal';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Briefcase, MapPin, Clock, CheckCircle2, UserCheck, ArrowRight, Mail } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = (job: JobOpening) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleGeneralApply = () => {
    setSelectedJob(null);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Careers' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" /> Join Our Team
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Careers at Kosmo Hero
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Build a rewarding career with Punjab&apos;s leading automotive dealership network. We are committed to fostering talent, professional development, and mutual growth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why Work With Us Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <UserCheck className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">OEM Certified Training</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Direct technical and sales certifications organized in collaboration with Hero MotoCorp India.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <Briefcase className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Rapid Career Growth</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Performance-driven promotions, competitive incentive structures, and leadership opportunities.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <CheckCircle2 className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Supportive Work Culture</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Modern air-conditioned showrooms, state-of-the-art diagnostic bays, and a respectful team atmosphere.
            </p>
          </div>
        </div>

        {/* Current Job Openings */}
        <div className="mb-16">
          <SectionHeading
            badge="Current Openings"
            title="Explore Opportunities Across Punjab"
            subtitle="Positions available across our Jalandhar, Ludhiana, Dasuya, and Hoshiarpur branches."
          />

          <div className="space-y-6">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#ee2326] px-2.5 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1 text-gray-700">
                      <MapPin className="w-3.5 h-3.5 text-[#ee2326]" /> {job.location}
                    </span>
                    <span>•</span>
                    <span>Experience: {job.experience}</span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed pt-1">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <Button variant="primary" size="md" onClick={() => handleApply(job)} className="w-full sm:w-auto">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Banner (from reference) */}
        <div className="bg-gray-50 p-8 sm:p-12 rounded-sm border border-gray-200 text-center max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">
            Don&apos;t see a perfect fit?
          </h3>
          <p className="text-xs text-gray-600 mb-6 leading-relaxed">
            We are always seeking enthusiastic, hard-working professionals to join our sales, customer experience, and workshop engineering departments. Send us your resume and we will keep your profile on file.
          </p>
          <Button variant="secondary" size="md" onClick={handleGeneralApply}>
            <Mail className="w-4 h-4 mr-1.5" />
            <span>Submit Resume For General Application</span>
          </Button>
        </div>
      </div>

      {/* Application Modal */}
      <JobApplyModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

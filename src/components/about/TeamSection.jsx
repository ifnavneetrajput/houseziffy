import React from 'react';
import { TEAM_SECTION } from '../../data/aboutData';
import { LinkedInIcon, XTwitterIcon, DribbbleIcon } from '../icons';

/**
 * Meet Our Expert Team Section
 * Matches Screenshot 5: Two-column layout showcasing Dharmendra Bajaj and Akanksha Dubey
 * with executive profiles, leadership bios, role titles, and social links.
 */
export function TeamSection() {
  return (
    <section className="bg-[#FAF1ED] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 my-8 border-y border-[#F3E3DB]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
            {TEAM_SECTION.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            {TEAM_SECTION.subtitle}
          </p>
        </div>

        {/* 2-Column Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {TEAM_SECTION.members.map((member) => (
            <article
              key={member.id}
              className="bg-white/70 backdrop-blur-xs p-8 sm:p-10 rounded-3xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Executive Avatar Frame (Dummy Image - Replace with actual photo) */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-stone-100 ring-2 ring-[#7E422C]/20 shadow-sm shrink-0">
                    {/* 
                      DUMMY PROFILE PICTURE
                      TODO: Replace member.avatar with actual photo of Dharmendra Bajaj / Akanksha Dubey
                    */}
                    <img
                      src={member.avatar}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                      {member.name}
                    </h3>
                    <span className="inline-block text-sm sm:text-base font-medium text-[#7E422C] mt-0.5">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Bio paragraph */}
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Social Media Links (LinkedIn, X, Dribbble) matching Screenshot 5 */}
              <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center gap-3">
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-100 hover:bg-[#7E422C] text-stone-600 hover:text-white flex items-center justify-center transition-colors duration-200"
                  aria-label={`${member.name}'s LinkedIn profile`}
                  title="LinkedIn (Dummy link)"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={member.socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-100 hover:bg-[#7E422C] text-stone-600 hover:text-white flex items-center justify-center transition-colors duration-200"
                  aria-label={`${member.name}'s X profile`}
                  title="X / Twitter (Dummy link)"
                >
                  <XTwitterIcon className="w-4 h-4" />
                </a>

                <a
                  href={member.socialLinks.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-100 hover:bg-[#7E422C] text-stone-600 hover:text-white flex items-center justify-center transition-colors duration-200"
                  aria-label={`${member.name}'s Dribbble profile`}
                  title="Dribbble (Dummy link)"
                >
                  <DribbbleIcon className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

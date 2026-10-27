import React from 'react';

/**
 * Breadcrumb / Subpage Header Bar
 * Matches Screenshot 1: A subtle blush strip displaying current section "About"
 */
export function BreadcrumbBar({ title = 'About', parent = 'Home' }) {
  return (
    <div className="w-full bg-[#FAF1ED] border-y border-[#F3E3DB] py-3.5 px-4 sm:px-8 mt-2 sm:mt-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h2 className="text-stone-800 text-sm sm:text-base font-semibold tracking-wide">
          {title}
        </h2>
        <div className="text-xs text-stone-500 font-medium">
          <span className="text-stone-400">{parent}</span>
          <span className="mx-2">/</span>
          <span className="text-[#7E422C] font-semibold">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default BreadcrumbBar;

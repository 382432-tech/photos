import React, { useState, useEffect } from 'react';
import { Photo } from '../types';
import { X, ExternalLink, Image as ImageIcon, Sparkles } from 'lucide-react';

interface ExhibitionSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  onSelectPhoto: (photo: Photo) => void;
}

export const ExhibitionSummaryModal: React.FC<ExhibitionSummaryModalProps> = ({
  isOpen,
  onClose,
  photos,
  onSelectPhoto
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Soccer' | 'Volleyball' | 'Baseball'>('All');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredPhotos = activeFilter === 'All'
    ? photos
    : photos.filter((p) => p.category === activeFilter);

  const categoryBadgeColor: Record<Photo['category'], string> = {
    Soccer: 'bg-emerald-600 text-white',
    Volleyball: 'bg-amber-600 text-white',
    Baseball: 'bg-rose-600 text-white'
  };

  return (
    <div
      id="summary-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        id="summary-modal-card"
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-white/15 animate-in fade-in zoom-in-95 duration-200 text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div id="summary-modal-header" className="p-5 sm:p-6 border-b border-white/10 bg-neutral-900/95 backdrop-blur-md flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-500/20 border border-amber-400/40 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                Exhibition Guide &amp; Summaries
              </span>
              <span className="text-xs text-neutral-400">9 Sports Photos</span>
            </div>
            <h2 id="summary-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Sports Exhibition Catalogue
            </h2>
            <p className="mt-1 text-xs text-neutral-400">
              Read comprehensive background paragraphs and explore reference links for every image in the gallery.
            </p>
          </div>

          <button
            id="btn-close-summary-modal"
            onClick={onClose}
            aria-label="Close summary modal"
            className="p-2 rounded-full bg-black/50 text-neutral-300 hover:text-white hover:bg-black/80 transition-colors focus:outline-hidden cursor-pointer border border-white/10 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div id="summary-modal-body" className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* General Exhibition Overview Paragraph */}
          <div
            id="summary-overview-box"
            className="p-4 sm:p-5 rounded-xl border border-white/10 bg-black/40 backdrop-blur-xs space-y-2"
          >
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Curator Overview
            </span>
            <p id="summary-overview-paragraph" className="text-sm leading-relaxed text-neutral-200">
              Welcome to the Sports Photo Gallery, a curated 9-photograph visual showcase honoring the drama, athleticism, and historic milestones of Soccer, Volleyball, and Baseball. Arranged across three distinct disciplines, this collection captures iconic competitive moments—from high-stakes World Cup and European football celebrations to acrobatic above-the-net volleyball spikes and classic ninth-inning home plate duels. Each photograph is accompanied by an in-depth breakdown and direct link to official histories and player records, inviting you to explore the rich stories behind every defining frame.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-white/10">
            <h3 className="text-sm font-semibold text-white">
              Individual Image Summaries ({filteredPhotos.length})
            </h3>
            <div className="flex items-center gap-1.5 bg-neutral-950 p-1 rounded-lg border border-white/10">
              {(['All', 'Soccer', 'Volleyball', 'Baseball'] as const).map((filter) => (
                <button
                  key={filter}
                  id={`filter-tab-${filter.toLowerCase()}`}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-white/15 text-white shadow-xs font-semibold'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* List of Image Paragraphs & Links */}
          <div className="space-y-4">
            {filteredPhotos.map((photo) => (
              <article
                key={photo.id}
                id={`summary-item-${photo.id}`}
                className="flex flex-col md:flex-row gap-4 p-4 sm:p-4.5 rounded-xl border border-white/10 bg-neutral-950/60 hover:bg-neutral-950/80 transition-colors"
              >
                {/* Thumbnail */}
                <div className="relative w-full md:w-36 h-36 shrink-0 rounded-lg overflow-hidden bg-neutral-950 border border-white/10 group">
                  <img
                    src={photo.imageUrl}
                    alt={photo.placeholderAlt || photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${categoryBadgeColor[photo.category]}`}>
                      {photo.category}
                    </span>
                  </div>
                </div>

                {/* Content & Paragraph */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {photo.title}
                      </h4>
                      <span className="text-xs text-neutral-400 font-mono">
                        #{photos.findIndex((p) => p.id === photo.id) + 1}
                      </span>
                    </div>

                    {/* The Full Paragraph for this specific image */}
                    <p
                      id={`summary-text-${photo.id}`}
                      className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-300"
                    >
                      {photo.paragraph}
                    </p>
                  </div>

                  {/* Actions: Direct Link & Inspect */}
                  <div className="mt-3.5 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5">
                    <a
                      id={`summary-link-${photo.id}`}
                      href={photo.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group/link"
                      title={`Visit ${photo.linkLabel}`}
                    >
                      <span>{photo.linkLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectPhoto(photo);
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 text-xs font-medium text-neutral-200 transition-colors cursor-pointer"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      View Image
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div id="summary-modal-footer" className="p-4 sm:p-5 border-t border-white/10 bg-neutral-950 flex items-center justify-between text-xs text-neutral-400">
          <span>9 photos catalogued across Soccer, Volleyball &amp; Baseball</span>
          <button
            id="btn-dismiss-summary-footer"
            onClick={onClose}
            className="rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 px-4 py-2 text-xs font-semibold text-amber-300 transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

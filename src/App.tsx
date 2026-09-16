import React, { useState } from 'react';
import { PHOTO_ITEMS } from './data/photos';
import { Photo } from './types';
import { PhotoCard } from './components/PhotoCard';
import { PhotoModal } from './components/PhotoModal';
import { ExhibitionSummaryModal } from './components/ExhibitionSummaryModal';
import { CosmicBackground } from './components/CosmicBackground';
import { Trophy, FileText, Orbit } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
  const [isCosmicMotionActive, setIsCosmicMotionActive] = useState<boolean>(true);

  // Group photos into the 3 rows: Soccer, Volleyball, Baseball
  const soccerPhotos = PHOTO_ITEMS.filter((p) => p.category === 'Soccer');
  const volleyballPhotos = PHOTO_ITEMS.filter((p) => p.category === 'Volleyball');
  const baseballPhotos = PHOTO_ITEMS.filter((p) => p.category === 'Baseball');

  const rows = [
    { name: 'Soccer', label: 'Row 1 · Soccer', color: 'border-emerald-400/40 text-emerald-300 bg-emerald-950/70 shadow-xs', items: soccerPhotos, startIndex: 0 },
    { name: 'Volleyball', label: 'Row 2 · Volleyball', color: 'border-amber-400/40 text-amber-300 bg-amber-950/70 shadow-xs', items: volleyballPhotos, startIndex: 3 },
    { name: 'Baseball', label: 'Row 3 · Baseball', color: 'border-rose-400/40 text-rose-300 bg-rose-950/70 shadow-xs', items: baseballPhotos, startIndex: 6 }
  ];

  return (
    <div id="app-container" className="relative min-h-screen text-white flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Animated Cosmic Black Hole Background */}
      <CosmicBackground isMotionActive={isCosmicMotionActive} />

      {/* Header */}
      <header id="main-header" className="sticky top-0 z-30 border-b border-white/10 bg-black/65 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 shadow-sm">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <h1 id="page-title" className="text-lg sm:text-xl font-bold tracking-tight text-white">
                Sports Photo Gallery
              </h1>
              <p id="page-subtitle" className="text-xs text-neutral-300">
                3 Rows × 3 Columns · Soccer, Volleyball &amp; Baseball
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              id="btn-toggle-motion"
              onClick={() => setIsCosmicMotionActive((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all cursor-pointer shadow-xs ${
                isCosmicMotionActive
                  ? 'bg-amber-500/20 border-amber-400/40 text-amber-300 hover:bg-amber-500/30'
                  : 'bg-white/10 border-white/15 text-neutral-300 hover:bg-white/15'
              }`}
              title={isCosmicMotionActive ? 'Pause cosmic background motion' : 'Resume cosmic background motion'}
            >
              <Orbit className={`h-3.5 w-3.5 ${isCosmicMotionActive ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
              <span className="hidden sm:inline">Cosmic Motion</span>
              <span className="sm:hidden">{isCosmicMotionActive ? 'Motion' : 'Static'}</span>
            </button>
            <button
              id="btn-summary-link"
              onClick={() => setShowSummaryModal(true)}
              className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 px-3.5 py-1 text-xs font-semibold text-amber-300 transition-all cursor-pointer shadow-xs"
              title="Read exhibition summary guide"
            >
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Exhibition Summary</span>
              <span className="sm:hidden">Summary</span>
            </button>
            <div id="counter-badge" className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium text-neutral-200 backdrop-blur-xs">
              {PHOTO_ITEMS.length} Photos
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Content organized by rows */}
      <main id="main-content" className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {rows.map((row, rowIdx) => (
          <section key={row.name} id={`section-row-${rowIdx + 1}`} aria-label={row.label} className="space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-white/15">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md border backdrop-blur-xs ${row.color}`}>
                  {row.label}
                </span>
              </div>
              <span className="text-xs text-neutral-400 font-medium">
                3 equal photos
              </span>
            </div>

            <div
              id={`grid-row-${rowIdx + 1}`}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6"
            >
              {row.items.map((photo, colIdx) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  index={row.startIndex + colIdx}
                  onSelect={(p) => setSelectedPhoto(p)}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer id="main-footer" className="border-t border-white/10 bg-black/60 backdrop-blur-md py-6 mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <span>9 Sports Photos · Soccer, Volleyball &amp; Baseball</span>
          <button
            id="footer-summary-link"
            onClick={() => setShowSummaryModal(true)}
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Read Exhibition Summary
          </button>
          <span>Created for Subhan</span>
        </div>
      </footer>

      {/* Exhibition Summary Modal (Includes paragraph for each image inside the link) */}
      <ExhibitionSummaryModal
        isOpen={showSummaryModal}
        onClose={() => setShowSummaryModal(false)}
        photos={PHOTO_ITEMS}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />

      {/* Lightbox / Modal */}
      <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
};

export default App;

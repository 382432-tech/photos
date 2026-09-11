import React, { useState } from 'react';
import { PHOTO_ITEMS } from './data/photos';
import { Photo } from './types';
import { PhotoCard } from './components/PhotoCard';
import { PhotoModal } from './components/PhotoModal';
import { Grid } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div id="app-container" className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      {/* Header */}
      <header id="main-header" className="sticky top-0 z-30 border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-xs">
              <Grid className="h-5 w-5" />
            </div>
            <div>
              <h1 id="page-title" className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900">
                Photo Gallery
              </h1>
              <p id="page-subtitle" className="text-xs text-neutral-500">
                3 × 3 Grid · 9 Equal Dimension Photos
              </p>
            </div>
          </div>
          <div id="counter-badge" className="rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
            {PHOTO_ITEMS.length} Photos
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main id="main-content" className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {/* 3 rows, 3 columns grid with equal dimensions */}
        <section
          id="photo-grid-section"
          aria-label="Photo Grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {PHOTO_ITEMS.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              onSelect={(p) => setSelectedPhoto(p)}
            />
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer id="main-footer" className="border-t border-neutral-200 bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <span>9-Photo Equal Dimension Grid</span>
          <span>Created for Subhan</span>
        </div>
      </footer>

      {/* Lightbox / Modal */}
      <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
};

export default App;

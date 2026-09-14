import React, { useState } from 'react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  index: number;
  onSelect?: (photo: Photo) => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index, onSelect }) => {
  const [hasError, setHasError] = useState(false);

  // High-fidelity fallback SVG in case of network restriction or ad-blocker
  const sportThemeIcons: Record<Photo['category'], string> = {
    Soccer: '⚽',
    Volleyball: '🏐',
    Baseball: '⚾'
  };

  const categoryBadgeColor: Record<Photo['category'], string> = {
    Soccer: 'bg-emerald-600 text-white',
    Volleyball: 'bg-amber-600 text-white',
    Baseball: 'bg-rose-600 text-white'
  };

  return (
    <article
      id={`photo-card-${photo.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-xs transition-all duration-300 hover:shadow-md hover:border-neutral-300 cursor-pointer"
      onClick={() => onSelect?.(photo)}
    >
      {/* Equal dimension container (1:1 square aspect ratio) */}
      <div
        id={`photo-img-container-${photo.id}`}
        className="relative w-full aspect-square overflow-hidden bg-neutral-100 flex items-center justify-center"
      >
        {!hasError ? (
          <img
            id={`photo-img-${photo.id}`}
            src={photo.imageUrl}
            alt={photo.placeholderAlt || photo.title}
            referrerPolicy="no-referrer"
            loading="eager"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            id={`photo-fallback-${photo.id}`}
            className="flex h-full w-full flex-col items-center justify-center bg-neutral-100 p-4 text-center"
          >
            <span className="text-4xl select-none mb-2" role="img" aria-label={photo.category}>
              {sportThemeIcons[photo.category]}
            </span>
            <span className="text-xs font-semibold text-neutral-700">{photo.title}</span>
            <span className="text-[11px] text-neutral-400 mt-0.5">{photo.category}</span>
          </div>
        )}

        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span
            id={`photo-cat-${photo.id}`}
            className={`rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-wide shadow-xs ${categoryBadgeColor[photo.category]}`}
          >
            {photo.category}
          </span>
        </div>
        <div
          id={`photo-badge-${photo.id}`}
          className="absolute top-2.5 right-2.5 rounded-md bg-neutral-900/70 backdrop-blur-xs px-2 py-0.5 text-[11px] font-medium text-white shadow-xs"
        >
          #{index + 1}
        </div>
      </div>

      {/* Card Details & Title */}
      <div id={`photo-info-${photo.id}`} className="p-3.5 sm:p-4 flex flex-col justify-center">
        <h2
          id={`photo-title-${photo.id}`}
          className="text-sm sm:text-base font-semibold text-neutral-800 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-1"
          title={photo.title}
        >
          {photo.title}
        </h2>
        {photo.description && (
          <p
            id={`photo-desc-${photo.id}`}
            className="mt-1 text-xs text-neutral-500 line-clamp-1"
          >
            {photo.description}
          </p>
        )}
      </div>
    </article>
  );
};

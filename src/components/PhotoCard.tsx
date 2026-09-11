import React, { useState } from 'react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  index: number;
  onSelect?: (photo: Photo) => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index, onSelect }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback SVG data URI in case remote image fails
  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="%23f3f4f6"><rect width="600" height="600" fill="%23e5e7eb"/><text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%236b7280">Photo ${index + 1}</text><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%239ca3af">Placeholder</text></svg>`;

  return (
    <article
      id={`photo-card-${photo.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-xs transition-all duration-300 hover:shadow-md hover:border-neutral-300 cursor-pointer"
      onClick={() => onSelect?.(photo)}
    >
      {/* Equal dimension container (1:1 square aspect ratio) */}
      <div
        id={`photo-img-container-${photo.id}`}
        className="relative w-full aspect-square overflow-hidden bg-neutral-100"
      >
        {!isLoaded && !hasError && (
          <div
            id={`photo-skeleton-${photo.id}`}
            className="absolute inset-0 animate-pulse bg-neutral-200"
            aria-hidden="true"
          />
        )}
        <img
          id={`photo-img-${photo.id}`}
          src={hasError ? fallbackSvg : photo.imageUrl}
          alt={photo.placeholderAlt || photo.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          id={`photo-badge-${photo.id}`}
          className="absolute top-2.5 right-2.5 rounded-md bg-neutral-900/60 backdrop-blur-xs px-2 py-0.5 text-[11px] font-medium text-white shadow-xs"
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

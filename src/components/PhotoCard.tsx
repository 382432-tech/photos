import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
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
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900/75 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-white/25 hover:bg-neutral-900/90 cursor-pointer"
      onClick={() => onSelect?.(photo)}
    >
      {/* Equal dimension container (1:1 square aspect ratio) */}
      <div
        id={`photo-img-container-${photo.id}`}
        className="relative w-full aspect-square overflow-hidden bg-neutral-950 flex items-center justify-center"
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
            className="flex h-full w-full flex-col items-center justify-center bg-neutral-950 p-4 text-center"
          >
            <span className="text-4xl select-none mb-2" role="img" aria-label={photo.category}>
              {sportThemeIcons[photo.category]}
            </span>
            <span className="text-xs font-semibold text-neutral-200">{photo.title}</span>
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
          className="absolute top-2.5 right-2.5 rounded-md bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[11px] font-medium text-white shadow-xs border border-white/10"
        >
          #{index + 1}
        </div>
      </div>

      {/* Card Details, Paragraph & External Link */}
      <div id={`photo-info-${photo.id}`} className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h2
            id={`photo-title-${photo.id}`}
            className="text-base font-semibold text-white tracking-tight group-hover:text-amber-300 transition-colors line-clamp-1"
            title={photo.title}
          >
            {photo.title}
          </h2>
          <p
            id={`photo-paragraph-${photo.id}`}
            className="mt-2 text-xs leading-relaxed text-neutral-300 line-clamp-3"
            title={photo.paragraph}
          >
            {photo.paragraph}
          </p>
        </div>

        <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between">
          <a
            id={`photo-link-${photo.id}`}
            href={photo.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors group/link"
            title={`Visit ${photo.linkLabel}`}
          >
            <span className="truncate max-w-[200px]">{photo.linkLabel}</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
          <span className="text-[11px] text-neutral-400">Click to expand</span>
        </div>
      </div>
    </article>
  );
};

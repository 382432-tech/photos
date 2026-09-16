import React, { useEffect } from 'react';
import { Photo } from '../types';
import { X, ExternalLink } from 'lucide-react';

interface PhotoModalProps {
  photo: Photo | null;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (photo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [photo, onClose]);

  if (!photo) return null;

  const categoryBadgeColor: Record<Photo['category'], string> = {
    Soccer: 'bg-emerald-600 text-white',
    Volleyball: 'bg-amber-600 text-white',
    Baseball: 'bg-rose-600 text-white'
  };

  return (
    <div
      id="photo-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        id="photo-modal-card"
        className="relative max-w-2xl w-full max-h-[90vh] flex flex-col bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-white/15 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="btn-close-modal"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/85 transition-colors focus:outline-hidden cursor-pointer border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div id="modal-image-container" className="w-full max-h-[48vh] sm:max-h-[52vh] bg-neutral-950 overflow-hidden flex items-center justify-center">
          <img
            id="modal-image"
            src={photo.imageUrl}
            alt={photo.placeholderAlt || photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain sm:object-cover"
          />
        </div>

        <div id="modal-details" className="p-5 sm:p-6 bg-neutral-900 border-t border-white/10 overflow-y-auto">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span
              id="modal-category-badge"
              className={`rounded-md px-2.5 py-0.5 text-xs font-semibold tracking-wide ${categoryBadgeColor[photo.category]}`}
            >
              {photo.category}
            </span>
            <span className="text-xs text-neutral-400">
              Photo ID: {photo.id}
            </span>
          </div>

          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {photo.title}
          </h3>

          <p id="modal-paragraph" className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-300">
            {photo.paragraph}
          </p>

          <div id="modal-actions" className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <a
              id="modal-external-link"
              href={photo.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 px-4 py-2.5 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-all cursor-pointer shadow-xs group"
            >
              <span>{photo.linkLabel}</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              id="modal-btn-dismiss"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer text-center"
            >
              Close Lightbox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { Photo } from '../types';
import { X } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        id="photo-modal-card"
        className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="btn-close-modal"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors focus:outline-hidden cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div id="modal-image-container" className="w-full aspect-square bg-neutral-900 overflow-hidden flex items-center justify-center">
          <img
            id="modal-image"
            src={photo.imageUrl}
            alt={photo.placeholderAlt || photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div id="modal-details" className="p-5 bg-white">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              id="modal-category-badge"
              className={`rounded-md px-2.5 py-0.5 text-xs font-semibold tracking-wide ${categoryBadgeColor[photo.category]}`}
            >
              {photo.category}
            </span>
          </div>
          <h3 id="modal-title" className="text-xl font-bold text-neutral-900">
            {photo.title}
          </h3>
          {photo.description && (
            <p id="modal-description" className="mt-1.5 text-sm text-neutral-600">
              {photo.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

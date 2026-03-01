

import { useState, useCallback, useEffect } from 'react';


const PHOTOS = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/lab/lab-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `AI-лаборатория VibeCoding в Гродно — фото ${i + 1}`,
}));

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setSelectedIndex(null), []);

  const handlePrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : PHOTOS.length - 1));
    },
    [],
  );

  const handleNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedIndex((prev) => (prev !== null && prev < PHOTOS.length - 1 ? prev + 1 : 0));
    },
    [],
  );

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft')
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : PHOTOS.length - 1));
      if (e.key === 'ArrowRight')
        setSelectedIndex((prev) => (prev !== null && prev < PHOTOS.length - 1 ? prev + 1 : 0));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  return (
    <section className="section" id="gallery">
      <h2 className="section-title">Наша офлайн лаборатория в Гродно</h2>
      <p className="section-subtitle">
        Реальное пространство для обучения AI-программированию — профессиональное оборудование,
        комфортные рабочие места, атмосфера для продуктивной работы
      </p>

      <div className="gallery-grid">
        {PHOTOS.map((photo, index) => (
          <div
            key={photo.src}
            className="gallery-item"
            onClick={() => setSelectedIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setSelectedIndex(index);
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="gallery-modal-overlay" onClick={handleClose} role="dialog" aria-modal="true">
          <button className="gallery-modal-close" onClick={handleClose} aria-label="Закрыть">
            ✕
          </button>
          <button className="gallery-modal-nav gallery-modal-prev" onClick={handlePrev} aria-label="Предыдущее фото">
            ‹
          </button>
          <img
            src={PHOTOS[selectedIndex].src}
            alt={PHOTOS[selectedIndex].alt}
            width={1200}
            height={800}
            className="gallery-modal-image"
            style={{ objectFit: 'contain' }}
            onClick={(e) => e.stopPropagation()}

          />
          <button className="gallery-modal-nav gallery-modal-next" onClick={handleNext} aria-label="Следующее фото">
            ›
          </button>
        </div>
      )}
    </section>
  );
}

import { useState, useEffect } from 'react';
import './HeroSection.css';

const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Changer d'image toutes les 3000ms (3 secondes)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    // Nettoyer l'intervalle si le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-section">
      {/* Conteneur des images de fond (diaporama) */}
      <div className="hero-slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Superposition sombre pour le contraste du texte */}
      <div className="hero-overlay"></div>

      {/* Contenu textuel et boutons */}
      <div className="hero-content">
        <h1 className="hero-title">
          Bienvenue chez <span className="highlight">MBOTY Village</span> votre destination authentique
        </h1>
        <p className="hero-description">
          Découvrez une cuisine raffinée alliant tradition SAKALAVA et touches contemporaines, au cœur d'un écrin de modernité.
        </p>
        <div className="hero-buttons">
          <a href="/contact" className="btn btn-primary">Au Contact</a>
          <a href="/menu" className="btn btn-secondary">Consulter la Carte</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
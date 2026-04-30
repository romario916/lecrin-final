import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Section 1 : Appel à l'action (Orange) */}
      <section className="cta-section">
        <div className="cta-content">
          <h1>ENVIE DE NOUS REJOINDRE ?</h1>
          <p>Réservez dès maintenant pour garantir votre place dans notre établissement.</p>
          
          <div className="cta-buttons">
            <a href="https://www.facebook.com/profile.php?id=61586754389229" className="btn-black">DISCUTONS</a>
            <a href="https://api.whatsapp.com/send?phone=261324182826" className="btn-white" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
          </div>
        </div>
        
        {/* Bulle flottante WhatsApp (optionnelle) */}
        <a href="https://wa.me/33123456789" className="whatsapp-floating">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </section>

      {/* Section 2 : Nous Trouver (Noir) */}
      <section className="find-us-section">
        <div className="find-us-container">
          <div className="contact-details">
            <h2>NOUS TROUVER</h2>
            
            <div className="info-block">
              <div className="info-item">
                <i className="fa-solid fa-location-dot"></i>
                <p>12 Avenue de la Gastronomie, 75008 Paris, France</p>
              </div>
              
              <div className="info-item">
                <i className="fa-solid fa-phone"></i>
                <p>+33 1 23 45 67 89</p>
              </div>
              
              <div className="info-item">
                <i className="fa-solid fa-clock"></i>
                <div>
                  <p>Lun - Sam : 12:00 - 14:30 | 19:00 - 22:30</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>

            <div className="social-links-minimal">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61586754389229"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>

          <div className="map-placeholder">
            <div className="map-overlay">
            
            
            </div>
            {/* Ici tu pourras mettre une vraie Google Map plus tard */}
            <img src="/images/1.jpg" alt="Localisation" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
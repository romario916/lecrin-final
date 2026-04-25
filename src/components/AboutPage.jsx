import './AboutPage.css';

const AboutPage = () => {
  const services = [
    { id: 1, name: "Wi-Fi Fibre", icon: "fa-solid fa-wifi" },
    { id: 2, name: "Literie Premium", icon: "fa-solid fa-bed" },
    { id: 3, name: "Climatisation", icon: "fa-solid fa-snowflake" },
    { id: 4, name: "Café & Thé", icon: "fa-solid fa-mug-hot" }
  ];

  return (
    <div className="about-page">
      {/* Section Histoire */}
      <section className="history-section">
        <div className="history-content">
          <span className="subtitle">L'HISTOIRE</span>
          <h1>Passion & Excellence depuis 2024</h1>
          <p>
            L'Écrin est né d'une vision simple : créer un lieu où la gastronomie 
            se vit sans artifice, en se concentrant sur ce qui compte vraiment — le goût.
          </p>
          <p>
            Notre fondateur, le Chef Marc Valet, a parcouru les cuisines les plus prestigieuses 
            avant de s'installer ici pour proposer une cuisine de terroir, sublimée par des techniques de pointe.
          </p>
          <p>
            Chaque détail, de la provenance de notre farine à la sélection de nos vins, 
            est pensé pour offrir une harmonie parfaite.
          </p>
        </div>
        <div className="history-image">
          <img src="/images/hero1.jpg" alt="Chef en cuisine" />
        </div>
      </section>

      {/* Section Ce que nous proposons */}
      <section className="propositions-section">
        <h2>Ce que nous proposons</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <i className={service.icon}></i>
              <span>{service.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
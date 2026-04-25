import './ChambresPage.css';

const ChambresPage = () => {
  const tarifs = [
    {
      titre: "Escapade d'une nuit",
      sousTitre: "SÉJOUR EN SEMAINE",
      prix: "145€",
      unite: "/nuit",
      options: ["Accès Suite complète", "Arrivée flexible", "Wi-Fi Haut Débit"],
      focus: false
    },
    {
      titre: "Week-end Premium",
      sousTitre: "DU VENDREDI AU DIMANCHE",
      prix: "290€",
      unite: "/séjour",
      options: ["Petit-déjeuner inclus", "Départ tardif (14h)", "Cadeau de bienvenue"],
      focus: true // Pour mettre en avant cette carte
    },
    {
      titre: "Séjour Sérénité",
      sousTitre: "7 NUITS CONSÉCUTIVES",
      prix: "850€",
      unite: "/semaine",
      options: ["Tarif préférentiel (-15%)", "Ménage de mi-séjour", "Blanchisserie incluse"],
      focus: false
    }
  ];

  return (
    <div className="chambres-page">
      {/* Section Header */}
      <section className="chambres-header">
        <h1>Un Refuge de Sérénité</h1>
        <div className="orange-line"></div>
        <p className="header-text">
          "Plus qu'une simple chambre, nous vous offrons une parenthèse hors du temps au cœur de la ville. 
          Lumière naturelle, matériaux nobles et services sur mesure définissent notre vision de l'hospitalité."
        </p>
      </section>

      {/* Section Galerie Mosaïque */}
      <section className="gallery-grid">
        <div className="main-img">
          <img src="/images/chambe1.jpg" alt="Salon spacieux" />
        </div>
        <div className="side-imgs">
          <img src="/images/chambre2.jpg" alt="Piscine extérieure" />
          <img src="/images/chambre3.jpg" alt="Détail chambre" />
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="pricing-section">
        <span className="invest-label">INVESTISSEMENT</span>
        <h2>Tarifs & Privilèges</h2>
        <div className="orange-line"></div>

        <div className="pricing-grid">
          {tarifs.map((tarif, index) => (
            <div key={index} className={`pricing-card ${tarif.focus ? 'featured' : ''}`}>
              {tarif.focus && <span className="badge">LE PLUS PRISÉ</span>}
              <h3>{tarif.titre}</h3>
              <p className="card-subtitle">{tarif.sousTitre}</p>
              
              <div className="price-tag">
                <span className="amount">{tarif.prix}</span>
                <span className="unit">{tarif.unite}</span>
              </div>

              <ul className="options-list">
                {tarif.options.map((opt, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-check"></i> {opt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChambresPage;
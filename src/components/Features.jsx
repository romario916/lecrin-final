import { UtensilsCrossed, ChefHat, Star } from 'lucide-react';
import './Features.css';

const Features = () => {
  const featuresData = [
    {
      icon: <ChefHat size={32} color='yellow' />,
      title: "Produits Frais",
      desc: "Nous travaillons exclusivement avec des producteurs locaux sélectionnés avec soin."
    },
    {
      icon: <UtensilsCrossed size={32} color='yellow' />,
      title: "Cuisine Créative",
      desc: "Notre Chef réinvente les classiques pour surprendre vos papilles à chaque bouchée."
    },
    {
      icon: <Star size={32} color='yellow' />,
      title: "Cadre Élégant",
      desc: "Un design épuré et chaleureux conçu pour vos moments d'exception."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {featuresData.map((f, index) => (
          <div key={index} className="feature-card">
            <div className="icon-circle">
              {f.icon}
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
import './MenuPage.css';

const MenuPage = () => {
  // On organise les données par catégories comme sur tes images
  const menuCategories = [
    {
      title: "Entrées",
      items: [
        { id: 1, name: "Carpaccio de Saint-Jacques", price: "18€", desc: "Fines lamelles, zestes de citron vert et huile d'olive infusée à l'aneth.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200" },
        { id: 2, name: "Œuf Parfait 64°", price: "14€", desc: "Crème de champignons des bois et mouillettes truffées.", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200" },
        { id: 3, name: "Risotto aux Gambas Royales", price: "34€", desc: "Riz Carnaroli, safran de pays et pointes d'asperges vertes.", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200" },
        { id: 4, name: "Carpaccio de Saint-Jacques", price: "18€", desc: "Fines lamelles, zestes de citron vert et huile d'olive infusée à l'aneth.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200" }
        
      ]
    },
    {
      title: "Plats Signature",
      items: [
        { id: 3, name: "Filet de Bœuf Wagyu", price: "42€", desc: "Purée de panais, jus corsé au romarin et légumes de saison.", img: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=200" },
        { id: 4, name: "Risotto aux Gambas Royales", price: "34€", desc: "Riz Carnaroli, safran de pays et pointes d'asperges vertes.", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { id: 5, name: "Sphère Chocolat Noir", price: "12€", desc: "Cœur fondant caramel beurre salé et éclats de noisettes.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200" },
        { id: 6, name: "Tarte Déstructurée au Citron", price: "11€", desc: "Sablé breton, crème onctueuse et meringue italienne brûlée.", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=200" }
      ]
    }
  ];

  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Notre Carte</h1>
        <div className="orange-line"></div>
        <p className="menu-subtitle">Une sélection rigoureuse des meilleurs produits de saison, préparés avec passion.</p>
      </header>

      <div className="menu-container">
        {menuCategories.map((category, index) => (
          <section key={index} className="menu-section">
            <h2 className="section-title">{category.title}</h2>
            <div className="menu-grid">
              {category.items.map(item => (
                <div key={item.id} className="menu-card">
                  <div className="menu-image-container">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="menu-info">
                    <div className="menu-name-price">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p className="menu-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>




  );
};

export default MenuPage;
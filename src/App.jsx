import { Routes, Route } from 'react-router-dom';

// Importation des composants de structure
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importation des sections de la page d'Accueil
import HeroSection from './components/HeroSection';
import Features from './components/Features';

// Importation des nouvelles pages
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import ChambresPage from './components/ChambresPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      {/* La Navbar reste visible sur toutes les pages */}
      <Navbar />
      
      <main>
        <Routes>
          {/* ROUTE 1 : ACCUEIL */}
          <Route path="/" element={
            <>
              <HeroSection />
              <Features />
            </>
          } />

          {/* ROUTE 2 : MENU (NOTRE CARTE) */}
          <Route path="/menu" element={<MenuPage />} />

          {/* ROUTE 3 : À PROPOS (L'HISTOIRE) */}
          <Route path="/apropos" element={<AboutPage />} />

          {/* ROUTE 4 : CHAMBRES (REFUGE DE SÉRÉNITÉ) */}
          <Route path="/chambres" element={<ChambresPage />} />

          <Route path="/contact" element={<ContactPage />} />

          {/* Redirection automatique si l'utilisateur tape une adresse inconnue */}
          <Route path="*" element={<div style={{padding: '150px', textAlign: 'center'}}><h2>Page non trouvée</h2></div>} />
        </Routes>
      </main>

      {/* Le Footer reste visible en bas de chaque page */}
      <Footer />
    </div>
  );
}

export default App;
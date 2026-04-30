import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Colonne 1 : Branding */}
        <div className="footer-column about">
          <h2 className="footer-logo">Vohemar Iharanga</h2>
          <p>
            Une table audacieuse et authentique. Nous transformons les meilleurs 
            produits pour vous offrir une expérience culinaire unique.
          </p>
          <div className="social-icons">
            <NavLink to="/contact" className="social-link" aria-label="Appeler">
            
    <i className="fa-solid fa-phone"></i>
  </NavLink>
  <NavLink to="https://www.facebook.com/profile.php?id=61586754389229" className="social-link" aria-label="Facebook">
           <i className="fa-brands fa-facebook-f"></i>
            </NavLink>
          </div>
        </div>

        {/* Colonne 2 : Navigation */}
        <div className="footer-column">
          <h3>NAVIGATION</h3>
          <ul>
            <li><NavLink to="/menu">Notre Carte</NavLink></li>
            <li><NavLink to="/apropos">L'Histoire</NavLink></li>
            <li><NavLink to="/contact">Nous Contacter</NavLink></li>
          </ul>
        </div>

        {/* Colonne 3 : Légal */}
        <div className="footer-column">
          <h3>Localisation su google maps</h3>
          <ul>
           
            <li> <NavLink to="https://www.google.com/maps/place/Vohemar/@-13.3841154,49.9813567,606m/data=!3m1!1e3!4m7!3m6!1s0x21f07d0003d7a8b5:0xc153833a008a8c90!4b1!8m2!3d-18.9133375!4d47.5357656!16s%2Fg%2F11y08cdqhb?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D">Google Maps</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} L'Écrin. Créé avec passion pour la gastronomie.</p>
      </div>



      
 
    </footer>
  );
};

export default Footer;
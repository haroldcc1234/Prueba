import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar el clic en enlaces con hash
  const handleProductLinkClick = (e, path) => {
    e.preventDefault();
    
    // Dividir la ruta en path y hash
    const [basePath, hash] = path.split('#');
    
    // Navegar a la ruta base primero
    navigate(basePath);
    
    // Usar setTimeout para asegurar que la navegación se complete
    // antes de hacer scroll al hash
    setTimeout(() => {
      if (hash) {
        // Navegar al hash
        navigate(`${basePath}#${hash}`);
        
        // Hacer scroll al elemento con el id correspondiente
        const elementId = hash.toLowerCase();
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  // Efecto para manejar el hash cuando ya estamos en la página de productos
  useEffect(() => {
    if (location.pathname === '/productos' && location.hash) {
      // Extraer el id del hash (eliminar el #)
      const elementId = location.hash.substring(1).toLowerCase();
      
      // Usar setTimeout para asegurar que el DOM esté listo
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <footer className="footer-elegant">
      <div className="footer-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="footer-brand">
                <img src="/img/apolo-logo.png" alt="Importaciones Apolo" className="footer-logo" />
                <h4>IMPORTACION Y DISTRIBUCION NACIONAL D&V APOLO S.A.C</h4>
                <p className="footer-desc">Especialistas en importación y distribución de las marcas Overts y
                  Apolo en todo el Perú.</p>
                <div className="social-links">
                  <a href="https://www.facebook.com/profile.php?id=61584625028503" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/apoloimportaciones/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.tiktok.com/@apoloimportaciones" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6 mb-4">
              <h5 className="footer-title">Productos</h5>
              <ul className="footer-links">
                <li>
                  <a 
                    href="/productos#apolo" 
                    onClick={(e) => handleProductLinkClick(e, '/productos#apolo')}
                  >
                    Apolo
                  </a>
                </li>
                <li>
                  <a 
                    href="/productos#overts" 
                    onClick={(e) => handleProductLinkClick(e, '/productos#overts')}
                  >
                    Overts
                  </a>
                </li>
                <li>
                  <a 
                    href="/productos#otras-marcas" 
                    onClick={(e) => handleProductLinkClick(e, '/productos#otras-marcas')}
                  >
                    Otras Marcas
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 mb-4">
              <h5 className="footer-title">Empresa</h5>
              <ul className="footer-links">
                <li><Link to="/about">Nosotros</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 mb-4">
              <h5 className="footer-title">Contacto</h5>
              <div className="contact-info">
                <p><i className="bi bi-geo-alt"></i> Jr. Rivero y Ustaris #246 Jesús María, Lima </p>
                <p><i className="bi bi-telephone"></i> +51 958 400 028</p>
                <p><i className="bi bi-envelope"></i> apoloimportaciones97@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Importaciones Apolo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
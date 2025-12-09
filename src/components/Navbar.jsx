import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/productos');
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    navigate('/productos'); // Clear search param from URL
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-elegant fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <div className="brand-container">
            <img src="/img/apolo-logo.png" alt="Importaciones Apolo" className="brand-logo" />
            <span className="brand-text"></span>
          </div>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/productos" id="productosDropdown" role="button" data-bs-toggle="dropdown" end>
                <i className="bi bi-box-seam me-2"></i>Productos
              </NavLink>
              <ul className="dropdown-menu dropdown-elegant">
                <li><NavLink className="dropdown-item" to="/productos" end>Todos</NavLink></li>
                <li><NavLink
                  className="dropdown-item"
                  to="/productos#apolo"
                  isActive={(match, location) => {
                    if (!match) return false;
                    return location.pathname === '/productos' && location.hash === '#apolo';
                  }}
                >Marca Apolo</NavLink></li>
                <li><NavLink
                  className="dropdown-item"
                  to="/productos#overts"
                  isActive={(match, location) => {
                    if (!match) return false;
                    return location.pathname === '/productos' && location.hash === '#overts';
                  }}
                >Marca Overts</NavLink></li>
                <li><NavLink
                  className="dropdown-item"
                  to="/productos#otras-marcas"
                  isActive={(match, location) => {
                    if (!match) return false;
                    return location.pathname === '/productos' && location.hash === '#otras-marcas';
                  }}
                >Otras Marcas</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/servicios">
                <i className="bi bi-tools me-2"></i>Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <i className="bi bi-building me-2"></i>Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                <i className="bi bi-telephone me-2"></i>Contacto
              </NavLink>
            </li>
          </ul>
          <form className="d-flex search-form" onSubmit={handleSearchSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar productos..."
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                className={`btn ${searchTerm ? 'btn-clear-search' : 'btn-search'}`}
                type="button" // Change type to button to prevent form submission on clear
                onClick={searchTerm ? clearSearch : handleSearchSubmit}
                style={{
                  // Keep position absolute for correct placement of the dynamic button
                  position: 'absolute',
                  right: '0', // Position it correctly at the right of the input group
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: '#666', // Keep the color consistent
                  zIndex: 5,
                  padding: '0.75rem 1rem', // Adjust padding for consistent size
                }}
              >
                <i className={`bi ${searchTerm ? '' : 'bi-search'}`}></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
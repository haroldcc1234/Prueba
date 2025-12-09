import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = ({ searchTerm: propSearchTerm }) => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');

  useEffect(() => {
    // Scroll to anchor when hash changes
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        const scrollToElement = () => {
          const navbarHeight = document.querySelector('.navbar-elegant')?.offsetHeight || 0;
          const offsetPosition = element.offsetTop - navbarHeight - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        };

        // Use setTimeout to ensure DOM is ready and rendered
        setTimeout(scrollToElement, 100); 
      }
    } else {
      // If no hash, scroll to top on initial load or when hash is cleared
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    const queryParams = new URLSearchParams(location.search);
    const urlSearchTerm = queryParams.get('search') || '';
    const termToUse = propSearchTerm || urlSearchTerm;
    setCurrentSearchTerm(termToUse);

    const lowerCaseSearchTerm = termToUse.toLowerCase();

    if (!lowerCaseSearchTerm) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product => {
      const { name, description, specs } = product;
      const lowerCaseName = name ? name.toLowerCase() : '';
      const lowerCaseDescription = description ? description.toLowerCase() : '';
      const lowerCaseSpecs = specs ? specs.map(s => s.toLowerCase()).join(' ') : '';

      return (
        lowerCaseName.includes(lowerCaseSearchTerm) ||
        lowerCaseDescription.includes(lowerCaseSearchTerm) ||
        lowerCaseSpecs.includes(lowerCaseSearchTerm)
      );
    });
    setFilteredProducts(filtered);
  }, [propSearchTerm, location]);

  const apoloProducts = filteredProducts.filter(p => p.brand === 'Apolo');
  const overtsProducts = filteredProducts.filter(p => p.brand === 'Overts');
  const otherBrands = filteredProducts.filter(p => p.brand === 'Other');

  const groupByCategory = (prods) => {
    return prods.reduce((acc, product) => {
      (acc[product.category] = acc[product.category] || []).push(product);
      return acc;
    }, {});
  };

  const apoloGrouped = groupByCategory(apoloProducts);
  const overtsGrouped = groupByCategory(overtsProducts);

  const hasResults = filteredProducts.length > 0;

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold text-black">Nuestros Productos</h1>
              <p className="lead fw-bold text-black">Marcas Apolo y Overts - Calidad garantizada</p>
            </div>
          </div>
        </div>
      </section>

      {!hasResults && currentSearchTerm && (
        <section className="py-5">
          <div className="container">
            <div className="no-results-message text-center">
              <i className="bi bi-search"></i>
              <h4>No se encontraron productos</h4>
              <p>No hay resultados para "<strong>{currentSearchTerm}</strong>"</p>
              <p className="text-muted">Intenta con otros términos de búsqueda</p>
              {/* This button could ideally reset the search, which would be handled by setSearchTerm from App.js */}
              <button className="btn btn-primary mt-3" onClick={() => window.location.href = '/productos'}>
                  Ver todos los productos
              </button>
            </div>
          </div>
        </section>
      )}

      {apoloProducts.length > 0 && (
        <section id="apolo" className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <img src="/img/apolo-logo.png" alt="Marca Apolo" className="brand-section-logo mb-3" />
                <h2 className="section-title">Marca <span className="text-accent">Apolo</span></h2>
                <p className="lead">Productos de alta calidad para el mantenimiento automotriz e industrial</p>
              </div>
            </div>
            {Object.entries(apoloGrouped).map(([category, prods]) => (
              <div key={category} className="row g-4 mb-5">
                <div className="col-12">
                  <h3 className="product-category-title">{category}</h3>
                </div>
                {prods.map(product => (
                  <div key={product.id} className="col-md-6 col-lg-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {overtsProducts.length > 0 && (
        <section id="overts" className="py-5 bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <img src="/img/overts-logo.png" alt="Marca Overts" className="brand-section-logo mb-3" />
                <h2 className="section-title">Marca <span className="text-accent">Overts</span></h2>
                <p className="lead">Soluciones químicas especializadas para el mantenimiento profesional</p>
              </div>
            </div>
            {Object.entries(overtsGrouped).map(([category, prods]) => (
              <div key={category} className="row g-4 mb-5">
                <div className="col-12">
                  <h3 className="product-category-title">{category}</h3>
                </div>
                {prods.map(product => (
                  <div key={product.id} className="col-md-6 col-lg-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {otherBrands.length > 0 && (
        <section id="otras-marcas" className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 className="section-title">Otras <span className="text-accent">Marcas</span></h2>
                <p className="lead">Más marcas de calidad que distribuimos</p>
              </div>
            </div>
            <div className="row g-4">
              {otherBrands.map(product => (
                <div key={product.id} className="col-md-3 col-sm-4 col-6 mb-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Products;

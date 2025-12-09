import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Define which products to feature on the home page
  const featuredProductIds = [
    'apolo-moto-10w30', 'apolo-grasa-calcio', 'apolo-transmision-80w90', 'apolo-motor-15w40',
    'overts-silicona-chicle', 'overts-monogrado-hd40', 'overts-atf', 'overts-antifreeze'
  ];

  const featuredProducts = products.filter(p => featuredProductIds.includes(p.id));
  const apoloFeatured = featuredProducts.filter(p => p.brand === 'Apolo');
  const overtsFeatured = featuredProducts.filter(p => p.brand === 'Overts');

  return (
    <>
      <section className="hero-carousel">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/carousel1.jpeg" className="d-block w-100" alt="Marcas Apolo y Overts" />
              <div className="carousel-caption">
                <h1>IMPORTACION Y DISTRIBUCION NACIONAL D&V APOLO S.A.C</h1>
                <p>15 AÑOS DE PRESENCIA EN EL MERCADO</p>
                <Link to="/productos" className="btn btn-elegant">Ver Productos</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/carousel2.jpeg" className="d-block w-100" alt="Distribución Nacional" />
              <div className="carousel-caption">
                <h1>DISTRIBUCION A NIVEL NACIONAL <p>(CON MAS DE 12 MARCAS)</p></h1>
                <p>Entregamos en todo el Perú con la mejor calidad</p>
                <Link to="/servicios" className="btn btn-elegant">Nuestros Servicios</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/carousel3.png" className="d-block w-100" alt="Productos de Calidad" />
              <div className="carousel-caption">
                <h1>PRODUCTOS CERTIFICADOS</h1>
                <p>Garantía de calidad en cada producto</p>
                <Link to="/about" className="btn btn-elegant">Conócenos</Link>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Marcas */}
      <section className="brands-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Nuestras <span className="text-accent">Marcas Exclusivas</span></h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <div className="brand-card-elegant">
                <div className="brand-header">
                  <img src="/img/apolo-logo.png" className="brand-logo-img" alt="Apolo" />
                  <h3 className="brand-title">Apolo</h3>
                </div>
                <div className="brand-body">
                  <p className="brand-description">Línea premium de aceites y lubricantes con tecnología avanzada
                    para máximo rendimiento y protección.</p>
                  <div className="brand-features">
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Grasa calcio - Grasa litio</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Aceite para moto 10w30 - 20w50</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Aceite para trasnmisión mecánica 75w90 - 80w90 - 85w140</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Lubricante motor petrolero 15w40</span></div>
                  </div>
                  <a href="/productos#apolo" className="btn btn-brand">Ver Productos Apolo</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="brand-card-elegant">
                <div className="brand-header">
                  <img src="/img/overts-logo.png" className="brand-logo-img" alt="Overts" />
                  <h3 className="brand-title">Overts</h3>
                </div>
                <div className="brand-body">
                  <p className="brand-description">Soluciones químicas innovadoras para mantenimiento industrial y
                    automotriz de alto desempeño.</p>
                  <div className="brand-features">
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Refrigerantes automotrices</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Silicona para tablero 125 Ml - 315 Ml</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Liquidos de freno</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Shampo para carros</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Limpia parabrisas</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Lubricantes automotrices</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Grasas automotrices</span></div>
                    <div className="feature-item"><i className="bi bi-check-circle"></i><span>Aceites automotrices</span></div>
                  </div>
                  <a href="/productos#overts" className="btn btn-brand">Ver Productos Overts</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="products-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Productos <span className="text-accent">Destacados</span></h2>
          <div id="productsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#productsCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#productsCarousel" data-bs-slide-to="1"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row g-4">
                  {apoloFeatured.map(product => (
                    <div key={product.id} className="col-md-3">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row g-4">
                  {overtsFeatured.map(product => (
                    <div key={product.id} className="col-md-3">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
          <div className="text-center mt-5">
            <Link to="/productos" className="btn btn-elegant btn-lg">
              <i className="bi bi-grid-3x3-gap me-2"></i>Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
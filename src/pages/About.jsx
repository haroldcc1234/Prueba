import React from 'react';

const About = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold text-black">Sobre Nosotros</h1>
              <p className="lead fw-bold text-black">Especialistas en las marcas Overts y Apolo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Nuestra Historia</h2>
              <p className="lead">Importaciones Apolo nació con la visión de convertirse en el distribuidor líder de productos automotrices e industriales en Perú.</p>
              <p>Somos una empresa con más de 10 años de presencia en el mercado de lubricantes y automotrices en el Perú</p>
              <p>Nuestra experiencia en el rubro nos permite entender las necesidades específicas de cada cliente, brindando soluciones personalizadas y un servicio de excelencia.</p>
              <div className="mt-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-accent me-3 fs-5"></i>
                  <span>Distribución exclusiva de marcas Apolo - Overts y entre otras marcas</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-accent me-3 fs-5"></i>
                  <span>Más de 10 años de experiencia en el mercado</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-accent me-3 fs-5"></i>
                  <span>Cobertura nacional con entrega garantizada</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image-container">
                <img src="/img/historia.jpg" alt="Nuestra Historia" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image-container">
                <img src="/img/mision.jpg" alt="Misión y Visión" className="img-fluid rounded shadow" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Misión y Visión</h2>
              <div className="mission-vision">
                <div className="mission-card mb-4">
                  <div className="mission-icon">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <div className="mission-content">
                    <h4 className="text-accent">Misión</h4>
                    <p>Ser los distribuidores líderes en Perú, proporcionando productos de alta calidad y soluciones innovadoras que superen las expectativas de nuestros clientes en el sector automotriz e industrial.</p>
                  </div>
                </div>
                <div className="vision-card">
                  <div className="vision-icon">
                    <i className="bi bi-eye"></i>
                  </div>
                  <div className="vision-content">
                    <h4 className="text-accent">Visión</h4>
                    <p>Consolidarnos como la empresa de referencia en la distribución de lubricantes, aceites y productos químicos especializados, siendo reconocidos por nuestra excelencia en servicio y la calidad de los productos Apolo y Overts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Corporativo */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Nuestra Historia y Productos</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="ratio ratio-16x9">
                <video controls poster="/img/historia.jpg">
                  <source src="/video/Video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Nuestros Valores</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="value-card-elegant text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-award"></i>
                </div>
                <h4>Calidad</h4>
                <p>Garantizamos la excelencia en cada producto Apolo y Overts que distribuimos.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card-elegant text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4>Confianza</h4>
                <p>Construimos relaciones duraderas basadas en la transparencia y confiabilidad.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card-elegant text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h4>Innovación</h4>
                <p>Buscamos constantemente mejorar y adaptarnos a las necesidades del mercado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

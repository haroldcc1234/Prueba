import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold text-black">Ofrecemos</h1>
              <p className="lead fw-bold text-black">Soluciones integrales para distribuidores y clientes finales</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Servicios <span className="text-accent">Especializados</span></h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card-elegant">
                <div className="service-icon">
                  <i className="bi bi-truck"></i>
                </div>
                <h4>Distribución Nacional</h4>
                <p>Entregamos productos Apolo y Overts en todo el Perú con los mejores tiempos de entrega y estándares de calidad.</p>
                <div className="service-features">
                  <li><i className="bi bi-check"></i> Cobertura nacional completa</li>
                  <li><i className="bi bi-check"></i> Seguimiento en tiempo real</li>
                  <li><i className="bi bi-check"></i> Logística personalizada</li>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card-elegant">
                <div className="service-icon">
                  <i className="bi bi-gear"></i>
                </div>
                <h4>Asesoría Técnica</h4>
                <p>Nuestros expertos te ayudan a seleccionar los productos ideales para tus necesidades específicas.</p>
                <div className="service-features">
                  <li><i className="bi bi-check"></i> Análisis de requerimientos</li>
                  <li><i className="bi bi-check"></i> Recomendaciones técnicas</li>
                  <li><i className="bi bi-check"></i> Soluciones personalizadas</li>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card-elegant">
                <div className="service-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4>Control de Calidad</h4>
                <p>Garantizamos la calidad de todos nuestros productos mediante rigurosos controles y certificaciones.</p>
                <div className="service-features">
                  <li><i className="bi bi-check"></i> Certificaciones internacionales</li>
                  <li><i className="bi bi-check"></i> Pruebas de laboratorio</li>
                  <li><i className="bi bi-check"></i> Garantía extendida</li>
                  <li><i className="bi bi-check"></i> Trazabilidad completa</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Nuestro <span className="text-accent">Proceso de Servicio</span></h2>
          <div className="row">
            <div className="col-12">
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Consulta Inicial</h4>
                    <p>Analizamos tus necesidades específicas y requerimientos técnicos para entender tu negocio.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Propuesta Técnica</h4>
                    <p>Desarrollamos una solución personalizada con los productos Apolo y Overts más adecuados.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Implementación</h4>
                    <p>Coordinamos la entrega, aplicación y capacitación en el uso de los productos seleccionados.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Seguimiento Continuo</h4>
                    <p>Monitoreamos los resultados y brindamos soporte técnico continuo para garantizar el éxito.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Beneficios <span className="text-accent">Exclusivos</span></h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="benefit-card">
                <i className="bi bi-star-fill text-accent display-6 mb-3"></i>
                <h5>Productos Certificados</h5>
                <p>Garantía de calidad en todos los productos Apolo y Overts</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="benefit-card">
                <i className="bi bi-clock-fill text-accent display-6 mb-3"></i>
                <h5>Entrega Puntual</h5>
                <p>Cumplimiento garantizado en los tiempos de entrega</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="benefit-card">
                <i className="bi bi-headset text-accent display-6 mb-3"></i>
                <h5>Soporte </h5>
                <p>Asesoría técnica disponible cuando la necesites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 text-white" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="mb-3">¿Necesitas un servicio personalizado?</h2>
              <p className="lead mb-0">Contáctanos y descubre cómo podemos ayudarte a optimizar tus operaciones con los productos Apolo y Overts.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/contacto" className="btn btn-elegant btn-lg">
                <i className="bi bi-chat-dots me-2"></i>Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

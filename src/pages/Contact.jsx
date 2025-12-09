import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.emailjs) {
      window.emailjs.sendForm('service_apolo', 'template_apolo', form.current, 'Jm_erYIMlPMfxsR3w')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            form.current.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
            alert('Error al enviar el mensaje. Por favor, inténtelo nuevamente.');
        });
    } else {
        console.error('EmailJS no está cargado.');
        alert('No se pudo conectar con el servicio de correo. Por favor, recarga la página.');
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold text-black">Contáctanos</h1>
              <p className="lead fw-bold text-black">Estamos aquí para atenderte</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <h2 className="section-title mb-4">Envíanos un Mensaje</h2>
              <form ref={form} id="contactForm" className="row g-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">Nombre completo *</label>
                  <input type="text" className="form-control" id="nombre" name="from_name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="empresa" className="form-label">Empresa</label>
                  <input type="text" className="form-control" id="empresa" name="from_company" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input type="email" className="form-control" id="email" name="from_email" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label">Teléfono *</label>
                  <input type="tel" className="form-control" id="telefono" name="from_phone" required />
                </div>
                <div className="col-12">
                  <label htmlFor="asunto" className="form-label">Asunto *</label>
                  <select className="form-select" id="asunto" name="subject" required>
                    <option value="">Seleccione un asunto</option>
                    <option value="Solicitud de Cotización">Solicitud de Cotización</option>
                    <option value="Consulta sobre Productos">Consulta sobre Productos</option>
                    <option value="Consulta sobre Servicios">Consulta sobre Servicios</option>
                    <option value="Soporte Técnico">Soporte Técnico</option>
                    <option value="Consulta General">Consulta General</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label">Mensaje *</label>
                  <textarea className="form-control" id="mensaje" name="message" rows="5" placeholder="Describe tu consulta..." required></textarea>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="newsletter" name="newsletter" />
                    <label className="form-check-label" htmlFor="newsletter">
                      Suscribirme al newsletter para recibir ofertas especiales
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-elegant btn-lg">
                    <i className="bi bi-send me-2"></i>Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card">
                <h3 className="mb-4">Información de Contacto</h3>
                <div className="contact-item">
                  <i className="bi bi-geo-alt"></i>
                  <div>
                    <h5>Dirección</h5>
                    <p>Jr. Rivero y Ustaris #246 Jesús María<br />Lima, Perú</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone"></i>
                  <div>
                    <h5>Teléfono</h5>
                    <p>(51) 958 400 028</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-whatsapp"></i>
                  <div>
                    <h5>WhatsApp</h5>
                    <p>+51 985 400 028</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope"></i>
                  <div>
                    <h5>Email</h5>
                    <p>apoloimportaciones97@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-clock"></i>
                  <div>
                    <h5>Horario de Atención</h5>
                    <p>Lunes a Viernes: 8:00 am - 6:00 pm<br />Sábados: 9:00 am - 1:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

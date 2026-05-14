import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Gavel,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react';

import alimentosIcon from '../assets/img/alimentos.png';
import amparoIcon from '../assets/img/amparo.png';
import desalojoIcon from '../assets/img/desalojo.png';
import divorcioIcon from '../assets/img/divorcio.png';
import heroBg from '../assets/img/hero-bg.jpg';
import logo from '../assets/img/logo.png';
import posesionIcon from '../assets/img/posesion.png';
import sucesionIcon from '../assets/img/plan-de-sucesion.png';

const whatsappUrl = 'https://wa.me/2664756247?text=Hola%20quiero%20m%C3%A1s%20info';

const navItems = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#practice' },
  { label: 'Equipo', href: '#staff' },
  { label: 'Contacto', href: '#contact' },
];

const services = [
  {
    title: 'Sucesiones',
    description: 'Acompañamiento legal para ordenar herencias y trámites sucesorios.',
    icon: sucesionIcon,
  },
  {
    title: 'Posesión Veinteañal',
    description: 'Asesoramiento en procesos vinculados a posesión y regularización.',
    icon: posesionIcon,
  },
  {
    title: 'Desalojo / Reivindicación',
    description: 'Estrategia jurídica para conflictos sobre inmuebles y restitución.',
    icon: desalojoIcon,
  },
  {
    title: 'Divorcios',
    description: 'Gestión clara y cuidadosa en procesos de derecho de familia.',
    icon: divorcioIcon,
  },
  {
    title: 'Amparos',
    description: 'Acciones orientadas a proteger derechos de manera urgente.',
    icon: amparoIcon,
  },
  {
    title: 'Alimentos / Reg. comunicación',
    description: 'Asistencia en acuerdos, reclamos y organización familiar.',
    icon: alimentosIcon,
  },
];

const team = [
  {
    name: 'Gladys Argentina Alaniz Fernández',
    role: 'Escribana - Abogada - Procuradora - Profesora en Ciencias Jurídicas, Políticas y Sociales - Diplomada en Derecho Constitucional',
  },
  {
    name: 'Mario Raúl Vara',
    role: 'Abogado - Procurador - Profesor de Historia y Formación Ética y Ciudadana',
  },
  {
    name: 'Lucia Alaniz Fernández',
    role: 'Abogada - Procuradora - Martillera Pública - Diplomada en Derecho Sucesorio - Diplomada en Derecho de Familia',
  },
];

const strengths = [
  { icon: ShieldCheck, title: 'Transparencia', text: 'Comunicación clara en cada etapa del proceso.' },
  { icon: Scale, title: 'Estrategia legal', text: 'Análisis serio para elegir el mejor camino disponible.' },
  { icon: Users, title: 'Atención personalizada', text: 'Cada caso se escucha y se trabaja con dedicación.' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gladys y Asociados">
          <img src={logo} alt="Logo Estudio Jurídico Gladys y Asociados" />
          <span>Estudio Jurídico</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-action" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <button className="mobile-menu__backdrop" type="button" aria-label="Cerrar menú" onClick={closeMenu} />
        <nav className="mobile-menu__panel" aria-label="Navegación móvil">
          <div className="mobile-menu__header">
            <span>Menú</span>
            <button type="button" aria-label="Cerrar menú" onClick={closeMenu}>
              <X size={22} />
            </button>
          </div>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          ))}
          <a className="mobile-menu__cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            Mandar WhatsApp
          </a>
        </nav>
      </div>

      <main id="top">
        <section className="hero" style={{ '--hero-image': `url(${heroBg})` }}>
          <div className="hero__content">
            <img className="hero__logo" src={logo} alt="Gladys y Asociados" />
            <p className="eyebrow">Abogados en San Luis, Argentina</p>
            <h1>Gladys Alaniz Fernández & Asociados</h1>
            <p className="hero__lead">
              Asesoramiento jurídico integral para personas y empresas, con atención directa,
              claridad profesional y una estrategia pensada para cada caso.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contact">
                Contactar
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button--ghost" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="hero__summary" aria-label="Datos destacados">
            <span>Derecho de familia</span>
            <span>Sucesiones</span>
            <span>Amparos</span>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section__intro">
            <p className="eyebrow">Acerca de nosotros</p>
            <h2>Soluciones legales claras, humanas y eficaces.</h2>
          </div>

          <div className="about-section__copy">
            <p>
              Somos un <strong>equipo de abogados</strong> comprometidos con brindar{' '}
              <strong>soluciones legales</strong> eficaces, claras y a la medida de cada cliente.
              Nos especializamos en distintas ramas del derecho, lo que nos permite ofrecer un
              asesoramiento integral tanto a personas como a empresas.
            </p>
            <p>
              Nuestro objetivo es acompañar y defender los intereses de nuestros clientes con
              seriedad, transparencia y ética profesional. Creemos en la importancia de una{' '}
              <strong>atención personalizada</strong>, escuchando cada caso con dedicación y buscando
              siempre <strong>la mejor estrategia legal</strong>.
            </p>
            <p>
              Con una sólida formación académica y amplia experiencia práctica, trabajamos con
              pasión para resolver conflictos, prevenir riesgos y generar confianza en cada paso
              del proceso.
            </p>
          </div>

          <div className="strength-grid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article className="strength-card" key={title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="practice" className="section services-section">
          <div className="section__intro">
            <p className="eyebrow">Nuestros servicios</p>
            <h2>Áreas de práctica con foco en resolver.</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-card__topline">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <img src={service.icon} alt="" aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="staff" className="section team-section">
          <div className="section__intro">
            <p className="eyebrow">Nuestro equipo</p>
            <h2>Profesionales con formación sólida y trato cercano.</h2>
          </div>

          <div className="team-list">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-card__icon">
                  <Gavel size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="contact-section">
        <div className="contact-section__content">
          <div className="contact-section__intro">
            <p className="eyebrow">Contacto</p>
            <h2>Coordinemos una consulta.</h2>
            <p>
              Contactá por este medio para turnos, o envianos un WhatsApp al número a continuación.
            </p>
          </div>

          <form action="https://formspree.io/f/xkgzdplg" method="POST" className="contact-form">
            <input type="hidden" name="_subject" value="Nuevo mensaje desde ESTUDIO JURÍDICO" />
            <label>
              <span>Nombre</span>
              <input type="text" name="name" id="name" autoComplete="name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" id="email" autoComplete="email" required />
            </label>
            <label>
              <span>Mensaje</span>
              <textarea name="message" id="message" rows="5" required />
            </label>
            <button className="button button--primary" type="submit">
              <Mail size={18} aria-hidden="true" />
              Enviar correo
            </button>
          </form>

          <aside className="contact-card" aria-label="Información de contacto">
            <a className="contact-card__item" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={22} aria-hidden="true" />
              <span>
                <strong>WhatsApp</strong>
                2664756247
              </span>
            </a>
            <a className="contact-card__item" href="tel:+542664756247">
              <Phone size={22} aria-hidden="true" />
              <span>
                <strong>Teléfono</strong>
                +54 266 4756247
              </span>
            </a>
            <div className="contact-card__item">
              <MapPin size={22} aria-hidden="true" />
              <span>
                <strong>Dirección</strong>
                25 de Mayo 1001. Esquina San Martín, local 2.
              </span>
            </div>
          </aside>
        </div>

        <div className="footer-bar">
          <nav aria-label="Navegación secundaria">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <p>Creado por Leonardo Pedernera - pederneraleonardo.tec@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

/* ============================================================
   ANGEL SITE STUDIO — MAIN.JS
   i18n (EN/ES) · Scroll reveal · Mobile nav · FAQ · Form
   ============================================================ */

/* ============================================================
   TRANSLATIONS
   ============================================================ */

const T = {
  en: {
    // NAV
    nav_services:  'Services',
    nav_portfolio: 'Portfolio',
    nav_process:   'Process',
    nav_pricing:   'Pricing',
    nav_contact:   'Contact',
    nav_call:      'Text (415) 660-0339',

    // HERO
    hero_eyebrow: 'Web Design Agency',
    hero_h1:      'More Calls. More Jobs. One Website Built for Your Business.',
    hero_sub:     'Stop losing leads to a slow, outdated site — we build high-converting websites for service businesses that need real results, not trophies. Priced for real people.',
    hero_cta1:    'Get a Free Quote!',
    hero_cta2:    'See Our Work',
    hero_cta3:    'See examples in your industry ↓',
    hero_b1:      'Mobile-First',
    hero_b2:      'Lightning Fast',
    hero_b3:      'Lead Forms',
    hero_b4:      'Local SEO',
    // HERO PROOF ROW
    proof_1: '15+ Sites Delivered',
    proof_2: '5.0 Client Rated',
    proof_3: 'EN / ES Bilingual',

    // TRUST BAR
    stat1_num:   '15+',
    stat1_label: 'Sites Delivered',
    stat2_num:   '100%',
    stat2_label: 'Mobile-First Builds',
    stat3_num:   '3–5 day',
    stat3_label: 'Avg. Turnaround',
    stat4_num:   'EN|ES',
    stat4_label: 'Bilingual Support',

    // FEATURES
    feat_eyebrow: 'What We Build',
    feat_h2:      'Websites Built to Generate Leads',
    feat_lead:    'Every site we build is designed from the ground up to attract and convert customers.',
    feat1_h: 'Mobile-First Design',
    feat1_p: 'Your website will look great and work perfectly on phones, tablets, and desktops — because most of your customers find you on mobile.',
    feat2_h: 'Lightning Fast Speed',
    feat2_p: 'Every second of load time costs you customers. Our sites are optimized for speed and score high on Core Web Vitals.',
    feat3_h: 'Lead Capture Forms',
    feat3_p: 'Strategic placement of contact forms and call-to-action buttons designed to turn visitors into booked jobs.',
    feat4_h: 'Seamless Launch & Management',
    feat4_p: 'From design to deployment, we handle everything — your website goes live hassle-free and stays running smoothly.',

    // PORTFOLIO
    port_eyebrow:  'Our Work',
    port_h2:       'Websites We\'ve Built',
    port_lead:     'See examples of modern, high-converting websites built for service businesses.',
    port_p1_badge: 'Example Design',
    port_p1_h:     'Construction',
    port_p1_sub:   'General Contractor',
    port_p1_desc:  'A professional authority site built to generate estimate requests from homeowners.',
    port_p1_btn:   'View Example Site →',
    port_p2_badge: 'Example Design',
    port_p2_h:     'Cleaning Service',
    port_p2_sub:   'Residential & Commercial Cleaning',
    port_p2_desc:  'Clean, conversion-focused site with quick booking form and service area page.',
    port_p2_btn:   'View Example Site →',
    port_p3_badge: 'Example Design',
    port_p3_h:     'Landscaping',
    port_p3_sub:   'Lawn Care & Landscaping',
    port_p3_desc:  'Gallery-led design that lets the work speak — with quote request CTAs throughout.',
    port_p3_btn:   'View Example Site →',
    port_p4_badge: 'Example Design',
    port_p4_h:     'Restaurant',
    port_p4_sub:   'Full-Service Restaurant',
    port_p4_desc:  'Menu and reservation focused design that drives foot traffic and online orders.',
    port_p4_btn:   'View Example Site →',

    // PROCESS
    proc_eyebrow: 'How It Works',
    proc_h2:      'Our Website Build Process',
    proc_lead:    'From strategy to launch in 3–5 days — a clear, proven process built for service businesses.',
    step1_h: 'Strategy & Discovery',
    step1_p: 'We learn about your business, customers, and goals to build the right strategy for your site.',
    step2_h: 'Website Design',
    step2_p: 'We design a modern, conversion-focused website that fits your brand and your industry.',
    step3_h: 'Development & Optimization',
    step3_p: 'Your website is built fast, mobile-friendly, and SEO-ready from day one.',
    step4_h: 'Launch & Lead Capture',
    step4_p: 'Your site goes live, lead capture is set up, and you start getting new customer inquiries.',

    // TRUST SECTION
    trust_eyebrow: 'Why Choose Us',
    trust_h2:      'Why Businesses Choose Angel Site Studio',
    trust_lead:    'We specialize in one thing: helping service businesses look professional online and get more customers.',
    trust1_h: 'Professional Modern Websites',
    trust1_p: 'Designs that make your business look established and trustworthy from the very first click.',
    trust2_h: 'Built to Convert Visitors',
    trust2_p: 'Every page is structured to turn browsers into customers who call, book, or request a quote.',
    trust3_h: 'Mobile-First by Default',
    trust3_p: 'Most of your customers find you on their phone. We design for that reality — always.',
    trust4_h: 'Fast Turnaround: 3–5 Days',
    trust4_p: 'No months-long delays. You\'ll have a live, professional website in 3 to 5 days.',
    trust5_h: 'Easy Contact for Customers',
    trust5_p: 'Click-to-call buttons, clean forms, and clear CTAs make it effortless for customers to reach you.',

    // TESTIMONIALS
    testi_eyebrow: 'Client Reviews',
    testi_h2:      'What Our Clients Say',
    t1_quote: '"Angel Site Studio built us a website that actually looks professional. We started getting call requests within the first week of launch."',
    t1_name:  'Miguel R.',
    t1_biz:   'Barrios Construction',
    t2_quote: '"I was embarrassed by my old website. Now I\'m proud to hand out my business card because the site actually represents what we do."',
    t2_name:  'Carlos M.',
    t2_biz:   'Local Contractor',

    // CTA BAND
    cta_eyebrow: 'Get Started',
    cta_h2:      'Ready to Upgrade Your Website?',
    cta_p:       'Get a custom strategy and quote for your business website.',
    cta_btn1:    'Get a Free Quote!',
    cta_btn2:    'Text (415) 660-0339',

    // CONTACT
    contact_eyebrow:      'Get In Touch',
    contact_h2:           'Let\'s Build Your Website',
    contact_lead:         'Tell us about your business. We\'ll get back to you within 1 business day.',
    contact_phone_label:  'Phone',
    contact_phone:        '(415) 660-0339',
    contact_hours_label:  'Hours',
    contact_hours:        'Mon–Fri, 9am–6pm PST',
    contact_resp_label:   'Response Time',
    contact_resp:         'Within 1 business day',
    form_name:            'Your Name',
    form_business:        'Business Name',
    form_phone:           'Phone Number',
    form_email:           'Email Address',
    form_website:         'Current Website (optional)',
    form_message:         'Message',
    form_ph_name:         'John Smith',
    form_ph_business:     'Smith Contracting',
    form_ph_phone:        '(415) 555-0100',
    form_ph_email:        'john@smithcontracting.com',
    form_ph_website:      'https://yoursite.com',
    form_ph_message:      'Tell us about your business and what you\'d like to improve...',
    form_submit:          'Send My Inquiry',
    form_success_h:       'Message Sent!',
    form_success_p:       'Thanks for reaching out. We\'ll be in touch within 1 business day.',

    // FOOTER
    footer_tagline: 'Modern websites for service businesses that want more customers.',
    footer_pages:   'Pages',
    footer_contact: 'Contact',
    footer_copy:    '© {year} Angel Site Studio. All rights reserved.',
  },

  es: {
    // NAV
    nav_services:  'Servicios',
    nav_portfolio: 'Portafolio',
    nav_process:   'Proceso',
    nav_pricing:   'Precios',
    nav_contact:   'Contacto',
    nav_call:      'Enviar Mensaje (415) 660-0339',

    // HERO
    hero_eyebrow: 'Agencia de Diseño Web',
    hero_h1:      'Más Llamadas. Más Trabajo. Un Sitio Web Hecho para Su Negocio.',
    hero_sub:     'Deje de perder clientes por un sitio lento y desactualizado — construimos sitios web de alto rendimiento para negocios de servicios que necesitan resultados reales. Con precios para personas reales.',
    hero_cta1:    '¡Obtener Cotización Gratis!',
    hero_cta2:    'Ver Nuestro Trabajo',
    hero_cta3:    'Ver ejemplos en su industria ↓',
    hero_b1:      'Móvil Primero',
    hero_b2:      'Ultra Rápido',
    hero_b3:      'Formularios',
    hero_b4:      'SEO Local',
    // HERO PROOF ROW
    proof_1: '15+ Sitios Entregados',
    proof_2: 'Calificación 5.0',
    proof_3: 'EN / ES Bilingüe',

    // TRUST BAR
    stat1_num:   '15+',
    stat1_label: 'Sitios Entregados',
    stat2_num:   '100%',
    stat2_label: 'Diseño Móvil Primero',
    stat3_num:   '3–5 días',
    stat3_label: 'Tiempo de Entrega',
    stat4_num:   'EN|ES',
    stat4_label: 'Soporte Bilingüe',

    // FEATURES
    feat_eyebrow: 'Lo Que Construimos',
    feat_h2:      'Sitios Web para Generar Clientes',
    feat_lead:    'Cada sitio que construimos está diseñado para atraer y convertir clientes desde el primer día.',
    feat1_h: 'Diseño Móvil Primero',
    feat1_p: 'Su sitio lucirá perfecto en teléfonos, tabletas y computadoras — porque la mayoría de sus clientes lo encuentran en el móvil.',
    feat2_h: 'Velocidad Ultrarrápida',
    feat2_p: 'Cada segundo de carga le cuesta clientes. Nuestros sitios están optimizados para velocidad y Core Web Vitals.',
    feat3_h: 'Formularios de Captación',
    feat3_p: 'Ubicación estratégica de formularios y botones para convertir visitantes en trabajos reservados.',
    feat4_h: 'Lanzamiento y Gestión Sin Problemas',
    feat4_p: 'Del diseño al lanzamiento, nos encargamos de todo — su sitio web se pone en marcha sin complicaciones y funciona sin problemas.',

    // PORTFOLIO
    port_eyebrow:  'Nuestro Trabajo',
    port_h2:       'Sitios Web que Hemos Construido',
    port_lead:     'Vea ejemplos de sitios web modernos y de alto rendimiento para negocios de servicios.',
    port_p1_badge: 'Diseño de Ejemplo',
    port_p1_h:     'Construction',
    port_p1_sub:   'Contratista General',
    port_p1_desc:  'Sitio de autoridad profesional construido para generar solicitudes de presupuesto de propietarios.',
    port_p1_btn:   'Ver Sitio de Ejemplo →',
    port_p2_badge: 'Diseño de Ejemplo',
    port_p2_h:     'Cleaning Service',
    port_p2_sub:   'Limpieza Residencial y Comercial',
    port_p2_desc:  'Sitio limpio y enfocado en conversión con formulario de reserva rápida.',
    port_p2_btn:   'Ver Sitio de Ejemplo →',
    port_p3_badge: 'Diseño de Ejemplo',
    port_p3_h:     'Landscaping',
    port_p3_sub:   'Cuidado del Césped y Paisajismo',
    port_p3_desc:  'Diseño de galería que deja que el trabajo hable — con CTAs de cotización.',
    port_p3_btn:   'Ver Sitio de Ejemplo →',
    port_p4_badge: 'Diseño de Ejemplo',
    port_p4_h:     'Restaurant',
    port_p4_sub:   'Restaurante de Servicio Completo',
    port_p4_desc:  'Diseño enfocado en menú y reservaciones que impulsa el tráfico y pedidos.',
    port_p4_btn:   'Ver Sitio de Ejemplo →',

    // PROCESS
    proc_eyebrow: 'Cómo Funciona',
    proc_h2:      'Nuestro Proceso de Construcción',
    proc_lead:    'De estrategia a lanzamiento en 3–5 días — un proceso claro y probado para negocios de servicios.',
    step1_h: 'Estrategia y Descubrimiento',
    step1_p: 'Aprendemos sobre su negocio, clientes y metas para construir la estrategia correcta.',
    step2_h: 'Diseño del Sitio Web',
    step2_p: 'Diseñamos un sitio moderno y de conversión que se adapta a su marca e industria.',
    step3_h: 'Desarrollo y Optimización',
    step3_p: 'Su sitio se construye rápido, amigable para móvil y listo para SEO desde el primer día.',
    step4_h: 'Lanzamiento y Captación',
    step4_p: 'Su sitio se lanza en vivo, se configura la captación y comienza a recibir consultas de clientes.',

    // TRUST SECTION
    trust_eyebrow: 'Por Qué Elegirnos',
    trust_h2:      'Por Qué los Negocios Eligen Angel Site Studio',
    trust_lead:    'Nos especializamos en una cosa: ayudar a negocios de servicios a verse profesionales en línea y obtener más clientes.',
    trust1_h: 'Sitios Web Profesionales Modernos',
    trust1_p: 'Diseños que hacen que su negocio luzca establecido y confiable desde el primer clic.',
    trust2_h: 'Diseñados para Convertir Visitantes',
    trust2_p: 'Cada página convierte visitantes en clientes que llaman, reservan o solicitan cotización.',
    trust3_h: 'Móvil Primero por Defecto',
    trust3_p: 'La mayoría de sus clientes lo encuentran en su teléfono. Diseñamos para esa realidad — siempre.',
    trust4_h: 'Entrega Rápida: 3–5 Días',
    trust4_p: 'Sin demoras de meses. Tendrá un sitio web profesional en vivo en 3 a 5 días.',
    trust5_h: 'Contacto Fácil para Clientes',
    trust5_p: 'Botones para llamar, formularios limpios y CTAs claros facilitan que los clientes lo contacten.',

    // TESTIMONIALS
    testi_eyebrow: 'Reseñas de Clientes',
    testi_h2:      'Lo Que Dicen Nuestros Clientes',
    t1_quote: '"Angel Site Studio nos construyó un sitio web que realmente se ve profesional. Empezamos a recibir solicitudes de llamada en la primera semana del lanzamiento."',
    t1_name:  'Miguel R.',
    t1_biz:   'Barrios Construction',
    t2_quote: '"Me avergonzaba mi antiguo sitio web. Ahora estoy orgulloso de entregar mi tarjeta de presentación porque el sitio representa lo que hacemos."',
    t2_name:  'Carlos M.',
    t2_biz:   'Contratista Local',

    // CTA BAND
    cta_eyebrow: 'Comenzar',
    cta_h2:      '¿Listo para Mejorar su Sitio Web?',
    cta_p:       'Obtenga una estrategia personalizada y cotización para el sitio web de su negocio.',
    cta_btn1:    '¡Obtener Cotización Gratis!',
    cta_btn2:    'Enviar Mensaje (415) 660-0339',

    // CONTACT
    contact_eyebrow:      'Contáctenos',
    contact_h2:           'Construyamos Su Sitio Web',
    contact_lead:         'Cuéntenos sobre su negocio. Le responderemos dentro de 1 día hábil.',
    contact_phone_label:  'Teléfono',
    contact_phone:        '(415) 660-0339',
    contact_hours_label:  'Horario',
    contact_hours:        'Lun–Vie, 9am–6pm PST',
    contact_resp_label:   'Tiempo de Respuesta',
    contact_resp:         'Dentro de 1 día hábil',
    form_name:            'Su Nombre',
    form_business:        'Nombre del Negocio',
    form_phone:           'Número de Teléfono',
    form_email:           'Correo Electrónico',
    form_website:         'Sitio Web Actual (opcional)',
    form_message:         'Mensaje',
    form_ph_name:         'Juan García',
    form_ph_business:     'García Construcción',
    form_ph_phone:        '(415) 555-0100',
    form_ph_email:        'juan@garciaconstruccion.com',
    form_ph_website:      'https://susitio.com',
    form_ph_message:      'Cuéntenos sobre su negocio y qué le gustaría mejorar...',
    form_submit:          'Enviar Mi Consulta',
    form_success_h:       '¡Mensaje Enviado!',
    form_success_p:       'Gracias por comunicarse. Le responderemos dentro de 1 día hábil.',

    // FOOTER
    footer_tagline: 'Sitios web modernos para negocios de servicios que quieren más clientes.',
    footer_pages:   'Páginas',
    footer_contact: 'Contacto',
    footer_copy:    '© {year} Angel Site Studio. Todos los derechos reservados.',
  }
};

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */

function applyLang(lang) {
  const tr = T[lang];
  if (!tr) return;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) {
      let val = tr[key];
      if (key === 'footer_copy') val = val.replace('{year}', new Date().getFullYear());
      el.textContent = val;
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (tr[key] !== undefined) el.setAttribute('placeholder', tr[key]);
  });

  // aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (tr[key] !== undefined) el.setAttribute('aria-label', tr[key]);
  });

  // Toggle button states
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('ss-lang', lang);
}

/* ============================================================
   MOBILE NAV
   ============================================================ */

function initNav() {
  const toggle = document.querySelector('.menu-toggle');
  const nav    = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================================
   HEADER SCROLL EFFECT
   ============================================================ */

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */

function initReveal() {
  const items = document.querySelectorAll('.reveal, .section-header h2');
  if (!items.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => obs.observe(el));
}

/* ============================================================
   HERO PARALLAX
   ============================================================ */

function initParallax() {
  // Disabled — browser-mock uses floatCard CSS animation; parallax conflicts with it
  return;
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */

function initFAQ() {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const btn = item.querySelector('.accordion-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */

function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = form.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.disabled    = true;
    btn.textContent = '...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        const success = document.querySelector('.form-success');
        if (success) { success.classList.add('visible'); form.style.display = 'none'; }
      } else {
        btn.disabled    = false;
        btn.textContent = orig;
        alert('Something went wrong. Please try again or call us at (415) 660-0339.');
      }
    } catch {
      btn.disabled    = false;
      btn.textContent = orig;
      alert('Network error. Please try again or call us at (415) 660-0339.');
    }
  });
}

/* ============================================================
   MARQUEE
   ============================================================ */

function initMarquee() {
  const band = document.querySelector('.marquee-band');
  if (!band) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const track = band.querySelector('.marquee-track');
    if (track) track.style.animationPlayState = 'paused';
  }
}

/* ============================================================
   STAT POP (IntersectionObserver for trust bar numbers)
   ============================================================ */

function initStatPop() {
  const stats = document.querySelectorAll('.stat-item');
  if (!stats.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  stats.forEach(el => obs.observe(el));
}

/* ============================================================
   IFRAME PREVIEW SCALING
   ============================================================ */

function initIframePreviews() {
  const iframeWraps = document.querySelectorAll('.browser-screen--iframe');
  if (!iframeWraps.length) return;

  function scaleIframes() {
    iframeWraps.forEach(wrap => {
      const iframe = wrap.querySelector('iframe');
      if (!iframe) return;
      const containerWidth = wrap.offsetWidth;
      const scale = containerWidth / 1200;
      iframe.style.transform = 'scale(' + scale + ')';
    });
  }

  scaleIframes();
  window.addEventListener('resize', scaleIframes);
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('ss-lang') || 'en';

  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(lang);
  initNav();
  initHeaderScroll();
  initReveal();
  initParallax();
  initFAQ();
  initForm();
  initMarquee();
  initStatPop();
  initIframePreviews();
});

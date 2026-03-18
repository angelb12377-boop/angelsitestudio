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
    nav_about:     'About',
    nav_services:  'Services',
    nav_portfolio: 'Portfolio',
    nav_industries:'Industries',
    nav_process:   'Process',
    nav_pricing:   'Pricing',
    nav_contact:   'Contact',
    nav_call:      'Text (415) 660-0339',

    // HERO
    hero_eyebrow: 'Web Design for Service Businesses',
    hero_h1:      'Your Work is Premium. Your Website Should Be Too.',
    hero_sub:     'We design premium websites for service businesses that want to stand out, win trust, and get booked. Live in days, not months.',
    hero_cta1:    'Get a Free Quote!',
    hero_cta2:    'See Our Work',
    hero_cta3:    'See examples in your industry ↓',
    hero_b1:      'Mobile-First',
    hero_b2:      'Lightning Fast',
    hero_b3:      'Lead Forms',
    hero_b4:      'Local SEO',
    // HERO PROOF ROW
    proof_1: '50+ Sites Delivered',
    proof_2: '5.0 Client Rated',
    proof_3: 'EN / ES Bilingual',

    // TRUST BAR
    stat1_num:   '50+',
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
    feat1_h: 'Built for How Customers Actually Find You',
    feat1_p: 'Your website will look great and work perfectly on phones, tablets, and desktops — because most of your customers find you on mobile.',
    feat2_h: 'Load in Under 2 Seconds or Lose the Lead',
    feat2_p: 'Every second of load time costs you customers. Our sites are optimized for speed and score high on Core Web Vitals.',
    feat3_h: 'Forms That Actually Get Filled Out',
    feat3_p: 'Strategic placement of contact forms and call-to-action buttons designed to turn visitors into booked jobs.',
    feat4_h: 'We Handle Everything — You Run Your Business',
    feat4_p: 'From design to deployment, we handle everything — your website goes live hassle-free and stays running smoothly.',

    // PORTFOLIO
    port_eyebrow:  'Our Work',
    port_h2:       'Websites We\'ve Built',
    port_lead:     'See examples of modern, high-converting websites built for service businesses.',
    port_p1_badge: 'Example Design',
    port_p1_h:     'Construction',
    port_p1_sub:   'General Contractor',
    port_p1_desc:  'Authority site that generates 30+ estimate requests per month for general contractors.',
    port_p1_btn:   'View Example Site →',
    port_p2_badge: 'Example Design',
    port_p2_h:     'Cleaning Service',
    port_p2_sub:   'Residential & Commercial Cleaning',
    port_p2_desc:  'Booking-focused site that fills recurring client schedules within the first 2 weeks.',
    port_p2_btn:   'View Example Site →',
    port_p3_badge: 'Example Design',
    port_p3_h:     'Landscaping',
    port_p3_sub:   'Lawn Care & Landscaping',
    port_p3_desc:  'Gallery-led design that converts seasonal browsers into year-round maintenance contracts.',
    port_p3_btn:   'View Example Site →',
    port_p4_badge: 'Example Design',
    port_p4_h:     'Restaurant',
    port_p4_sub:   'Full-Service Restaurant',
    port_p4_desc:  'Menu-driven design that increased online reservations by 40% in the first month.',
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
    trust1_h: 'Look Like a $10K Company Online',
    trust1_p: 'Designs that make your business look established and trustworthy from the very first click.',
    trust2_h: 'Turn Every Visitor Into a Customer',
    trust2_p: 'Every page is structured to turn browsers into customers who call, book, or request a quote.',
    trust3_h: 'Win Customers on Their Phones',
    trust3_p: 'Most of your customers find you on their phone. We design for that reality — always.',
    trust4_h: 'Live in 3–5 Days, Not 3–5 Months',
    trust4_p: 'No months-long delays. You\'ll have a live, professional website in 3 to 5 days.',
    trust5_h: 'Make It Effortless to Hire You',
    trust5_p: 'Click-to-call buttons, clean forms, and clear CTAs make it effortless for customers to reach you.',

    // TESTIMONIALS
    testi_eyebrow: 'Client Reviews',
    testi_h2:      'What Our Clients Say',
    t1_quote: '"Angel Site Studio built us a website that actually looks professional. We started getting call requests within the first week of launch."',
    t1_name:  'Miguel R.',
    t1_biz:   'Local Contractor',
    t2_quote: '"I was embarrassed by my old website. Now I\'m proud to hand out my business card because the site actually represents what we do."',
    t2_name:  'Carlos M.',
    t2_biz:   'Local Contractor',
    t3_quote: '"We went from zero online presence to fully booked weekends in less than a month. The site pays for itself every single week."',
    t3_name:  'Laura P.',
    t3_biz:   'Cleaning Service Owner',
    t4_quote: '"Customers tell us our website is what made them call us instead of the other guy. That\'s all I needed to hear."',
    t4_name:  'Roberto J.',
    t4_biz:   'Landscaping Company',

    // CTA BAND
    cta_eyebrow: 'Get Started',
    cta_h2:      'Your Next Client is Searching Right Now',
    cta_p:       'Let\'s make sure they find you — and love what they see.',
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

    // PRICING
    pricing_eyebrow: 'Pricing',
    pricing_h1:      'Simple plans built for service businesses',
    pricing_lead:    'No hidden fees, no long-term contracts. Pick a plan that fits your business and let\'s get started.',
    price1_h:    'Starter',
    price1_desc: 'A clean, professional single-page website to establish your online presence and start getting leads.',
    price1_f1:   'Single-page responsive website',
    price1_f2:   'Mobile-first design',
    price1_f3:   'Contact form with lead capture',
    price1_f4:   'Basic SEO setup',
    price1_f5:   '3-5 day turnaround',
    price2_badge:'Most Popular',
    price2_h:    'Professional',
    price2_desc: 'A full multi-page website designed to convert visitors into customers across every service you offer.',
    price2_f1:   '3-5 page custom website',
    price2_f2:   'Industry-specific design',
    price2_f3:   'Lead capture forms on every page',
    price2_f4:   'Bilingual (English + Spanish)',
    price2_f5:   'Google Business Profile setup',
    price2_f6:   'Click-to-call & SMS buttons',
    price3_h:    'Premium',
    price3_desc: 'A complete digital presence with advanced features, ongoing support, and everything you need to dominate your market.',
    price3_f1:   'Everything in Professional',
    price3_f2:   'Project portfolio & gallery',
    price3_f3:   'Booking & scheduling integration',
    price3_f4:   'Ongoing maintenance & updates',
    price3_f5:   'Priority support',
    price3_f6:   'Analytics & performance tracking',
    pricing_cta:   'Contact for Pricing',
    pricing_cta_h: 'Not sure which plan is right for you?',
    pricing_cta_p: 'Tell us about your business and we\'ll recommend the best option.',

    // ABOUT / PORTFOLIO VIEW
    port_view: 'View Full Portfolio',

    // FAQ
    faq_eyebrow: 'Common Questions',
    faq_h2:      'Frequently Asked Questions',
    faq1_q: 'How much does a website cost?',
    faq1_a: 'Every project is different. We offer flexible plans from single-page starter sites to full multi-page business suites. Contact us for a free, no-obligation quote tailored to your business.',
    faq2_q: 'How long does it take to build my website?',
    faq2_a: 'Most websites are designed, built, and launched within 3-5 business days. Complex projects with custom features may take a bit longer, but we\'ll give you a clear timeline upfront.',
    faq3_q: 'Do you provide hosting?',
    faq3_a: 'Yes. We handle hosting, security, and uptime so you don\'t have to worry about the technical side. Your site stays fast, secure, and always online.',
    faq4_q: 'Can I update my site myself?',
    faq4_a: 'You can — but you don\'t have to. We handle updates for you so you can focus on running your business. Just text or call us with changes and we\'ll take care of it.',
    faq5_q: 'What if I need changes after launch?',
    faq5_a: 'We\'ve got you covered. Post-launch updates — new photos, service changes, seasonal promotions — are part of our ongoing support. Your site stays current without the hassle.',
    faq6_q: 'Do you build bilingual websites?',
    faq6_a: 'Absolutely. Every site we build can include full English and Spanish support so you can reach every customer in your market — a major advantage most competitors don\'t offer.',
    faq7_q: 'What if I already have a website?',
    faq7_a: 'No problem. We can redesign and rebuild your existing site from scratch, or migrate your content to a modern, high-converting design. Either way, you keep your domain and don\'t lose any SEO.',
    faq8_q: 'Do you work with businesses outside my area?',
    faq8_a: 'Yes — we work with service businesses nationwide. Everything is handled remotely via phone, text, and video calls, so location is never a barrier.',

    // GUARANTEE & URGENCY
    guarantee:  '100% Satisfaction Guarantee — we don\'t stop until you\'re happy with your site.',
    hero_avail: 'Fast turnaround — most sites live in under a week',

    // FOOTER
    footer_tagline: 'Designed to Get You Booked.',
    footer_pages:   'Pages',
    footer_contact: 'Contact',
    footer_copy:    '© {year} Angel Site Studio. All rights reserved.',
  },

  es: {
    // NAV
    nav_about:     'Nosotros',
    nav_services:  'Servicios',
    nav_portfolio: 'Portafolio',
    nav_industries:'Industrias',
    nav_process:   'Proceso',
    nav_pricing:   'Precios',
    nav_contact:   'Contacto',
    nav_call:      'Enviar Mensaje (415) 660-0339',

    // HERO
    hero_eyebrow: 'Diseño Web para Negocios de Servicios',
    hero_h1:      'Su Trabajo es Premium. Su Sitio Web También Debería Serlo.',
    hero_sub:     'Diseñamos sitios web premium para negocios de servicios que quieren destacar, ganar confianza y ser contratados. En vivo en días, no meses.',
    hero_cta1:    '¡Obtener Cotización Gratis!',
    hero_cta2:    'Ver Nuestro Trabajo',
    hero_cta3:    'Ver ejemplos en su industria ↓',
    hero_b1:      'Móvil Primero',
    hero_b2:      'Ultra Rápido',
    hero_b3:      'Formularios',
    hero_b4:      'SEO Local',
    // HERO PROOF ROW
    proof_1: '50+ Sitios Entregados',
    proof_2: 'Calificación 5.0',
    proof_3: 'EN / ES Bilingüe',

    // TRUST BAR
    stat1_num:   '50+',
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
    feat1_h: 'Diseñado para Cómo los Clientes lo Encuentran',
    feat1_p: 'Su sitio lucirá perfecto en teléfonos, tabletas y computadoras — porque la mayoría de sus clientes lo encuentran en el móvil.',
    feat2_h: 'Carga en Menos de 2 Segundos o Pierde el Cliente',
    feat2_p: 'Cada segundo de carga le cuesta clientes. Nuestros sitios están optimizados para velocidad y Core Web Vitals.',
    feat3_h: 'Formularios que Realmente se Llenan',
    feat3_p: 'Ubicación estratégica de formularios y botones para convertir visitantes en trabajos reservados.',
    feat4_h: 'Nosotros nos Encargamos — Usted Dirige su Negocio',
    feat4_p: 'Del diseño al lanzamiento, nos encargamos de todo — su sitio web se pone en marcha sin complicaciones y funciona sin problemas.',

    // PORTFOLIO
    port_eyebrow:  'Nuestro Trabajo',
    port_h2:       'Sitios Web que Hemos Construido',
    port_lead:     'Vea ejemplos de sitios web modernos y de alto rendimiento para negocios de servicios.',
    port_p1_badge: 'Diseño de Ejemplo',
    port_p1_h:     'Construction',
    port_p1_sub:   'Contratista General',
    port_p1_desc:  'Sitio de autoridad que genera 30+ solicitudes de presupuesto al mes para contratistas generales.',
    port_p1_btn:   'Ver Sitio de Ejemplo →',
    port_p2_badge: 'Diseño de Ejemplo',
    port_p2_h:     'Cleaning Service',
    port_p2_sub:   'Limpieza Residencial y Comercial',
    port_p2_desc:  'Sitio enfocado en reservas que llena agendas de clientes recurrentes en las primeras 2 semanas.',
    port_p2_btn:   'Ver Sitio de Ejemplo →',
    port_p3_badge: 'Diseño de Ejemplo',
    port_p3_h:     'Landscaping',
    port_p3_sub:   'Cuidado del Césped y Paisajismo',
    port_p3_desc:  'Diseño de galería que convierte visitantes estacionales en contratos de mantenimiento todo el año.',
    port_p3_btn:   'Ver Sitio de Ejemplo →',
    port_p4_badge: 'Diseño de Ejemplo',
    port_p4_h:     'Restaurant',
    port_p4_sub:   'Restaurante de Servicio Completo',
    port_p4_desc:  'Diseño centrado en menú que aumentó las reservaciones en línea un 40% en el primer mes.',
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
    trust1_h: 'Luzca Como una Empresa de $10K en Línea',
    trust1_p: 'Diseños que hacen que su negocio luzca establecido y confiable desde el primer clic.',
    trust2_h: 'Convierta Cada Visitante en Cliente',
    trust2_p: 'Cada página convierte visitantes en clientes que llaman, reservan o solicitan cotización.',
    trust3_h: 'Gane Clientes Desde Sus Teléfonos',
    trust3_p: 'La mayoría de sus clientes lo encuentran en su teléfono. Diseñamos para esa realidad — siempre.',
    trust4_h: 'En Vivo en 3–5 Días, No en 3–5 Meses',
    trust4_p: 'Sin demoras de meses. Tendrá un sitio web profesional en vivo en 3 a 5 días.',
    trust5_h: 'Haga Fácil que lo Contraten',
    trust5_p: 'Botones para llamar, formularios limpios y CTAs claros facilitan que los clientes lo contacten.',

    // TESTIMONIALS
    testi_eyebrow: 'Reseñas de Clientes',
    testi_h2:      'Lo Que Dicen Nuestros Clientes',
    t1_quote: '"Angel Site Studio nos construyó un sitio web que realmente se ve profesional. Empezamos a recibir solicitudes de llamada en la primera semana del lanzamiento."',
    t1_name:  'Miguel R.',
    t1_biz:   'Local Contractor',
    t2_quote: '"Me avergonzaba mi antiguo sitio web. Ahora estoy orgulloso de entregar mi tarjeta de presentación porque el sitio representa lo que hacemos."',
    t2_name:  'Carlos M.',
    t2_biz:   'Contratista Local',
    t3_quote: '"Pasamos de cero presencia en línea a fines de semana completamente reservados en menos de un mes. El sitio se paga solo cada semana."',
    t3_name:  'Laura P.',
    t3_biz:   'Servicio de Limpieza',
    t4_quote: '"Los clientes nos dicen que nuestro sitio web fue lo que los hizo llamarnos a nosotros en vez del otro. Eso es todo lo que necesitaba escuchar."',
    t4_name:  'Roberto J.',
    t4_biz:   'Empresa de Paisajismo',

    // CTA BAND
    cta_eyebrow: 'Comenzar',
    cta_h2:      'Su Próximo Cliente Está Buscando Ahora Mismo',
    cta_p:       'Asegurémonos de que lo encuentren — y les encante lo que ven.',
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

    // PRICING
    pricing_eyebrow: 'Precios',
    pricing_h1:      'Planes simples hechos para negocios de servicios',
    pricing_lead:    'Sin costos ocultos, sin contratos a largo plazo. Elija un plan que se ajuste a su negocio y comencemos.',
    price1_h:    'Inicial',
    price1_desc: 'Un sitio web limpio y profesional de una página para establecer su presencia en línea y empezar a captar clientes.',
    price1_f1:   'Sitio web responsive de una página',
    price1_f2:   'Diseño móvil primero',
    price1_f3:   'Formulario de contacto con captación',
    price1_f4:   'Configuración básica de SEO',
    price1_f5:   'Entrega en 3-5 días',
    price2_badge:'Más Popular',
    price2_h:    'Profesional',
    price2_desc: 'Un sitio web completo de varias páginas diseñado para convertir visitantes en clientes en cada servicio que ofrece.',
    price2_f1:   'Sitio web personalizado de 3-5 páginas',
    price2_f2:   'Diseño específico para su industria',
    price2_f3:   'Formularios de captación en cada página',
    price2_f4:   'Bilingüe (Inglés + Español)',
    price2_f5:   'Configuración de Google Business',
    price2_f6:   'Botones de llamada y SMS',
    price3_h:    'Premium',
    price3_desc: 'Una presencia digital completa con funciones avanzadas, soporte continuo y todo lo que necesita para dominar su mercado.',
    price3_f1:   'Todo lo del plan Profesional',
    price3_f2:   'Portafolio y galería de proyectos',
    price3_f3:   'Integración de reservas y citas',
    price3_f4:   'Mantenimiento y actualizaciones continuas',
    price3_f5:   'Soporte prioritario',
    price3_f6:   'Análisis y seguimiento de rendimiento',
    pricing_cta:   'Contactar por Precio',
    pricing_cta_h: '¿No está seguro de qué plan es el adecuado?',
    pricing_cta_p: 'Cuéntenos sobre su negocio y le recomendaremos la mejor opción.',

    // ABOUT / PORTFOLIO VIEW
    port_view: 'Ver Portafolio Completo',

    // FAQ
    faq_eyebrow: 'Preguntas Frecuentes',
    faq_h2:      'Preguntas Frecuentes',
    faq1_q: '¿Cuánto cuesta un sitio web?',
    faq1_a: 'Cada proyecto es diferente. Ofrecemos planes flexibles desde sitios de una página hasta suites completas para negocios. Contáctenos para una cotización gratuita y sin compromiso.',
    faq2_q: '¿Cuánto tiempo tarda en construirse mi sitio web?',
    faq2_a: 'La mayoría de los sitios web se diseñan, construyen y lanzan en 3-5 días hábiles. Proyectos complejos pueden tomar un poco más, pero le daremos un plazo claro desde el inicio.',
    faq3_q: '¿Proporcionan hosting?',
    faq3_a: 'Sí. Nos encargamos del hosting, seguridad y tiempo de actividad para que no tenga que preocuparse por el lado técnico.',
    faq4_q: '¿Puedo actualizar mi sitio yo mismo?',
    faq4_a: 'Puede — pero no tiene que hacerlo. Nosotros manejamos las actualizaciones para que usted se enfoque en su negocio. Solo llámenos o envíe un mensaje con los cambios.',
    faq5_q: '¿Qué pasa si necesito cambios después del lanzamiento?',
    faq5_a: 'Lo tenemos cubierto. Las actualizaciones post-lanzamiento — nuevas fotos, cambios de servicios, promociones — son parte de nuestro soporte continuo.',
    faq6_q: '¿Construyen sitios web bilingües?',
    faq6_a: 'Absolutamente. Cada sitio que construimos puede incluir soporte completo en inglés y español para que alcance a cada cliente en su mercado.',
    faq7_q: '¿Qué pasa si ya tengo un sitio web?',
    faq7_a: 'No hay problema. Podemos rediseñar y reconstruir su sitio existente o migrar su contenido a un diseño moderno. Usted conserva su dominio y no pierde SEO.',
    faq8_q: '¿Trabajan con negocios fuera de mi área?',
    faq8_a: 'Sí — trabajamos con negocios de servicios en todo el país. Todo se maneja remotamente por teléfono, texto y videollamadas.',

    // GUARANTEE & URGENCY
    guarantee:  'Garantía de Satisfacción al 100% — no paramos hasta que esté feliz con su sitio.',
    hero_avail: 'Entrega rápida — la mayoría de sitios en vivo en menos de una semana',

    // FOOTER
    footer_tagline: 'Sitios Web que le Traen Más Llamadas, Más Trabajos, Más Ingresos.',
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

  // Click showcase → scroll to portfolio
  const showcase = document.getElementById('hero-showcase-click');
  if (showcase) {
    showcase.addEventListener('click', () => {
      const portfolio = document.getElementById('portfolio');
      if (portfolio) portfolio.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

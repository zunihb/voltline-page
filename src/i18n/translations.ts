export type Lang = 'es' | 'en';

export const defaultLang: Lang = 'es';

export const languages: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Layout
    'site.title': 'LiveElectric | Seguridad operacional para lineas vivas',
    'site.description': 'LiveElectric digitaliza trabajos de lineas vivas con checklists guiados, trazabilidad completa y evidencia fotografica.',
    'site.skipLink': 'Saltar al contenido principal',

    // Navbar
    'nav.tagline': 'Sistema de seguridad operacional',
    'nav.work': 'Nuestro trabajo',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.cta': 'Solicitar demo',
    'nav.menuLabel': 'Abrir menu',
    'nav.ariaLabel': 'Navegacion principal',

    // Hero
    'hero.eyebrow': 'Plataforma PWA para cuadrillas electricas',
    'hero.title.1': 'Transformamos las',
    'hero.title.accent': 'operaciones en lineas vivas',
    'hero.title.2': 'con control experto.',
    'hero.subtitle': 'Gestiona riesgo en tiempo real, valida certificaciones en terreno y activa prevencion de incidentes con evidencia verificable y trazabilidad completa.',
    'hero.cta': 'Solicitar demo',
    'hero.secondary': 'Ver modulos',

    // WorkShowcase
    'work.eyebrow': 'Modulos informativos',
    'work.title': 'Control operacional en cada etapa',
    'work.link': 'Solicitar presentacion +',
    'work.p1.title': 'Control de riesgo integrado',
    'work.p1.location': 'Gestion de riesgo en tiempo real',
    'work.p2.title': 'Verificacion de certificacion en terreno',
    'work.p2.location': 'Chequeo de cumplimiento en campo',
    'work.p3.title': 'Control y prevencion de incidentes',
    'work.p3.location': 'Gestion de incidentes y cuasi incidentes',

    // TrustedSection
    'trusted.eyebrow': 'Plataforma de seguridad en lineas vivas',
    'trusted.title': 'Especialistas en trabajos energizados con foco en seguridad operacional',
    'trusted.copy': 'LiveElectric permite identificar peligros, asignar controles y ejecutar criterios go/no-go antes y durante la operacion para que cada paso se cumpla bajo condiciones verificadas.',
    'trusted.bullet1': 'Verifica certificacion requerida, metodo de trabajo y cuadrilla autorizada en sitio.',
    'trusted.bullet2': 'Activa alertas stop-work para desviaciones criticas y captura evidencia con sello temporal.',
    'trusted.bullet3': 'Genera trazabilidad completa para auditorias y mejora continua en terreno.',
    'trusted.imgAlt': 'Cuadrilla en canastillo sobre linea energizada',
    'trusted.cta': 'Agendar demostracion',

    // MissionVision
    'mv.eyebrow': 'Direccion estrategica',
    'mv.title': 'Vision y mision',
    'mv.vision': 'Vision',
    'mv.visionText': 'Ser la plataforma referente en seguridad para trabajos en lineas vivas, impulsando operaciones electricas mas confiables, trazables y libres de omisiones criticas.',
    'mv.mission': 'Mision',
    'mv.missionText': 'Digitalizar y estandarizar la ejecucion en terreno mediante checklists guiados, controles de riesgo y evidencia verificable, para proteger a las cuadrillas y elevar el cumplimiento operativo.',

    // WhatWeDo
    'wwd.eyebrow': 'Capacidades clave',
    'wwd.title': 'Que controla la plataforma',
    'wwd.c1': 'Gestion de riesgo',
    'wwd.c2': 'Verificacion de certificacion',
    'wwd.c3': 'Control de incidentes',
    'wwd.c4': 'Checklist pre-trabajo',
    'wwd.c5': 'Auditoria y trazabilidad',

    // Problem
    'problem.eyebrow': 'Riesgo operacional',
    'problem.title': 'El costo oculto de operar con procedimientos en papel',
    'problem.copy': 'En trabajos de lineas vivas, cada omision puede convertirse en un evento critico. LiveElectric reemplaza formularios sueltos por un flujo auditable, verificable y accionable.',
    'problem.p1.title': 'Pasos omitidos',
    'problem.p1.desc': 'Sin verificacion digital, pasos criticos de seguridad pueden saltarse sin registro confiable.',
    'problem.p2.title': 'Sin trazabilidad',
    'problem.p2.desc': 'El papel se pierde, se dana o se completa tarde. Auditar cumplimiento real se vuelve incierto.',
    'problem.p3.title': 'Demoras operativas',
    'problem.p3.desc': 'La gestion manual frena decisiones, retrasa reportes y limita la visibilidad en terreno.',

    // Features
    'feat.eyebrow': 'Capacidades',
    'feat.title': 'Todo lo que necesitas para operar con seguridad',
    'feat.f1.title': 'Offline-First',
    'feat.f1.desc': 'Opera sin internet y sincroniza automaticamente cuando vuelve la conectividad.',
    'feat.f2.title': 'Checklists guiados',
    'feat.f2.desc': 'Plantillas con pasos criticos obligatorios para asegurar cumplimiento total.',
    'feat.f3.title': 'Trazabilidad total',
    'feat.f3.desc': 'Cada accion queda asociada a usuario, fecha, hora y contexto de ejecucion.',
    'feat.f4.title': 'Evidencia fotografica',
    'feat.f4.desc': 'Captura y vincula fotos directamente a cada paso del procedimiento.',
    'feat.f5.title': 'Arquitectura multi-tenant',
    'feat.f5.desc': 'Empresas aisladas entre si, con configuracion y datos completamente separados.',
    'feat.f6.title': 'Bilingue nativo',
    'feat.f6.desc': 'Interfaz completa en espanol e ingles configurable por usuario y equipo.',

    // HowItWorks
    'hiw.eyebrow': 'Metodo',
    'hiw.title': 'Tres pasos para transformar tu operacion',
    'hiw.s1.title': 'Configura',
    'hiw.s1.desc': 'Define procedimientos, plantillas y reglas de seguridad por tipo de trabajo en minutos.',
    'hiw.s2.title': 'Ejecuta',
    'hiw.s2.desc': 'Inspectores completan checklists guiados en terreno con evidencia y validaciones automaticas.',
    'hiw.s3.title': 'Supervisa',
    'hiw.s3.desc': 'Monitorea cumplimiento en tiempo real y genera reportes listos para auditoria.',

    // ForWho
    'fw.eyebrow': 'Roles',
    'fw.title': 'Disenado para cada rol en tu organizacion',
    'fw.profileLabel': 'Perfil',
    'fw.link': 'Ver aplicacion',
    'fw.r1.role': 'Inspectores de campo',
    'fw.r1.copy': 'Checklists intuitivos que guian cada paso de forma segura, incluso sin conexion.',
    'fw.r2.role': 'Jefes de operaciones',
    'fw.r2.copy': 'Visibilidad en tiempo real del estado de cada faena, equipo y cumplimiento.',
    'fw.r3.role': 'Oficiales de seguridad',
    'fw.r3.copy': 'Reportes automaticos y evidencia auditable para responder rapido ante fiscalizaciones.',

    // ServicesBoard
    'svc.eyebrow': 'Modelo de servicio',
    'svc.title': 'Nuestros servicios',
    'svc.link': 'Conocer servicio +',
    'svc.s1.title': 'Suscripcion mensual de plataforma',
    'svc.s1.copy': 'Acceso continuo a LiveElectric con actualizaciones, seguridad y soporte base.',
    'svc.s2.title': 'Capacitacion y onboarding de equipos',
    'svc.s2.copy': 'Implementacion guiada para supervisores, cuadrillas y responsables de cumplimiento.',
    'svc.s3.title': 'Ingeniero remoto certificado (Chile)',
    'svc.s3.copy': 'Soporte tecnico-operacional remoto en espanol e ingles para operaciones criticas.',
    'svc.s4.title': 'Ingeniero en sitio',
    'svc.s4.copy': 'Acompanamiento en terreno para faenas energizadas y verificacion operacional.',
    'svc.s5.title': 'Checklist pre-trabajo por criticidad',
    'svc.s5.copy': 'Pasos obligatorios con validacion de controles antes de iniciar la ejecucion.',
    'svc.s6.title': 'Evidencia con sello temporal',
    'svc.s6.copy': 'Registro fotografico y documental asociado a cada paso del procedimiento.',
    'svc.s7.title': 'Alertas stop-work',
    'svc.s7.copy': 'Deteccion de desviaciones criticas para detener el trabajo y corregir a tiempo.',
    'svc.s8.title': 'Reportes y auditoria en tiempo real',
    'svc.s8.copy': 'Visibilidad total del estado de cumplimiento para seguridad y fiscalizacion.',

    // MidCTA
    'midcta.eyebrow': 'Resultado esperado',
    'midcta.title': 'Menos papeleo y mayor trazabilidad operacional',
    'midcta.cta': 'Solicitar demo',
    'midcta.secondary': 'Ver servicios',

    // Stats
    'stats.s1.label': 'Disponibilidad offline',
    'stats.s2.label': 'Reduccion del tiempo de reporte',
    'stats.s3.label': 'Trazabilidad de procedimientos',
    'stats.s4.label': 'Pasos criticos omitidos',

    // ValuePanels
    'vp.imgAlt': 'Equipo en canastillo inspeccionando lineas vivas',
    'vp.eyebrow': 'Gestion en tiempo real',
    'vp.title': 'Sistema operativo para planificar y ejecutar trabajos en lineas vivas',
    'vp.copy': 'LiveElectric conecta seguridad, cumplimiento y trazabilidad en una sola plataforma para equipos de terreno, jefaturas operativas y areas de auditoria.',
    'vp.cta': 'Ver demostracion',
    'vp.v1.title': 'Control de riesgo integrado',
    'vp.v1.copy': 'Identifica peligros, asigna controles y aplica criterios go/no-go antes de energizar.',
    'vp.v2.title': 'Verificacion de certificacion en sitio',
    'vp.v2.copy': 'Confirma metodo correcto, cuadrilla habilitada y aprobaciones con evidencia trazable.',
    'vp.v3.title': 'Control y prevencion de incidentes',
    'vp.v3.copy': 'Reporta, investiga, corrige y previene desviaciones con seguimiento en tiempo real.',

    // FinalNarrative
    'fn.eyebrow': 'Impacto medible',
    'fn.title': 'Construimos el futuro de la seguridad operacional',
    'fn.stat1.label': 'Monitoreo activo',
    'fn.stat2.label': 'Trazabilidad de pasos',
    'fn.stat3.label': 'Omisiones criticas',
    'fn.bizEyebrow': 'Modelo de negocio',
    'fn.bizTitle': 'Suscripcion flexible con soporte remoto o en sitio',
    'fn.bizCopy': 'Ofrecemos paquetes de suscripcion con capacitacion, ingeniero remoto (Chile) o ingeniero en sitio para acompanar la adopcion segun el nivel de criticidad y madurez operativa de cada cliente.',
    'fn.bizCta': 'Solicitar demo',

    // CTASection
    'cta.eyebrow': 'Siguiente paso',
    'cta.title': 'Transforma la seguridad de tu equipo',
    'cta.copy': 'Agenda una demostracion y descubre como LiveElectric puede digitalizar tus operaciones en menos de una semana.',
    'cta.button': 'Solicitar demo gratuita',
    'cta.note': 'Sin compromiso y con onboarding guiado.',

    // Footer
    'footer.tagline': 'Plataforma digital de cumplimiento para operaciones en lineas vivas.',
    'footer.work': 'Nuestro trabajo',
    'footer.capabilities': 'Capacidades',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Politica de privacidad',
    'footer.rights': 'LiveElectric. Todos los derechos reservados.',
    'footer.ariaLabel': 'Links de footer',

    // Privacy page
    'privacy.title': 'Politica de Privacidad | LiveElectric',
    'privacy.description': 'Politica de privacidad de LiveElectric para el tratamiento de datos personales en la plataforma de gestion de operaciones en lineas vivas.',
  },

  en: {
    // Layout
    'site.title': 'LiveElectric | Operational safety for live power lines',
    'site.description': 'LiveElectric digitizes live-line work with guided checklists, full traceability, and photographic evidence.',
    'site.skipLink': 'Skip to main content',

    // Navbar
    'nav.tagline': 'Operational safety system',
    'nav.work': 'Our work',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.cta': 'Request demo',
    'nav.menuLabel': 'Open menu',
    'nav.ariaLabel': 'Main navigation',

    // Hero
    'hero.eyebrow': 'PWA platform for electrical crews',
    'hero.title.1': 'We transform',
    'hero.title.accent': 'live-line operations',
    'hero.title.2': 'with expert control.',
    'hero.subtitle': 'Manage risk in real time, validate field certifications, and activate incident prevention with verifiable evidence and full traceability.',
    'hero.cta': 'Request demo',
    'hero.secondary': 'View modules',

    // WorkShowcase
    'work.eyebrow': 'Core modules',
    'work.title': 'Operational control at every stage',
    'work.link': 'Request presentation +',
    'work.p1.title': 'Integrated risk control',
    'work.p1.location': 'Real-time risk management',
    'work.p2.title': 'Field certification verification',
    'work.p2.location': 'On-site compliance checking',
    'work.p3.title': 'Incident control & prevention',
    'work.p3.location': 'Incident & near-miss management',

    // TrustedSection
    'trusted.eyebrow': 'Live-line safety platform',
    'trusted.title': 'Specialists in energized work with a focus on operational safety',
    'trusted.copy': 'LiveElectric lets you identify hazards, assign controls, and enforce go/no-go criteria before and during operations so every step is carried out under verified conditions.',
    'trusted.bullet1': 'Verifies required certification, work method, and authorized crew on site.',
    'trusted.bullet2': 'Triggers stop-work alerts for critical deviations and captures time-stamped evidence.',
    'trusted.bullet3': 'Generates full traceability for audits and continuous field improvement.',
    'trusted.imgAlt': 'Crew in bucket truck on energized line',
    'trusted.cta': 'Schedule a demo',

    // MissionVision
    'mv.eyebrow': 'Strategic direction',
    'mv.title': 'Vision & Mission',
    'mv.vision': 'Vision',
    'mv.visionText': 'To be the leading safety platform for live-line work, driving more reliable, traceable, and error-free electrical operations.',
    'mv.mission': 'Mission',
    'mv.missionText': 'To digitize and standardize field execution through guided checklists, risk controls, and verifiable evidence — protecting crews and raising operational compliance.',

    // WhatWeDo
    'wwd.eyebrow': 'Key capabilities',
    'wwd.title': 'What the platform controls',
    'wwd.c1': 'Risk management',
    'wwd.c2': 'Certification verification',
    'wwd.c3': 'Incident control',
    'wwd.c4': 'Pre-work checklist',
    'wwd.c5': 'Audit & traceability',

    // Problem
    'problem.eyebrow': 'Operational risk',
    'problem.title': 'The hidden cost of paper-based procedures',
    'problem.copy': 'In live-line work, every omission can become a critical event. LiveElectric replaces loose forms with an auditable, verifiable, and actionable workflow.',
    'problem.p1.title': 'Skipped steps',
    'problem.p1.desc': 'Without digital verification, critical safety steps can be skipped with no reliable record.',
    'problem.p2.title': 'No traceability',
    'problem.p2.desc': 'Paper gets lost, damaged, or filled in late. Auditing actual compliance becomes uncertain.',
    'problem.p3.title': 'Operational delays',
    'problem.p3.desc': 'Manual management slows decisions, delays reports, and limits field visibility.',

    // Features
    'feat.eyebrow': 'Capabilities',
    'feat.title': 'Everything you need to operate safely',
    'feat.f1.title': 'Offline-First',
    'feat.f1.desc': 'Works without internet and syncs automatically when connectivity returns.',
    'feat.f2.title': 'Guided checklists',
    'feat.f2.desc': 'Templates with mandatory critical steps to ensure total compliance.',
    'feat.f3.title': 'Full traceability',
    'feat.f3.desc': 'Every action is linked to user, date, time, and execution context.',
    'feat.f4.title': 'Photographic evidence',
    'feat.f4.desc': 'Capture and link photos directly to each procedure step.',
    'feat.f5.title': 'Multi-tenant architecture',
    'feat.f5.desc': 'Companies fully isolated from each other, with separate configuration and data.',
    'feat.f6.title': 'Native bilingual',
    'feat.f6.desc': 'Full interface in Spanish and English, configurable per user and team.',

    // HowItWorks
    'hiw.eyebrow': 'Method',
    'hiw.title': 'Three steps to transform your operation',
    'hiw.s1.title': 'Configure',
    'hiw.s1.desc': 'Define procedures, templates, and safety rules by work type in minutes.',
    'hiw.s2.title': 'Execute',
    'hiw.s2.desc': 'Inspectors complete guided checklists in the field with evidence and automatic validations.',
    'hiw.s3.title': 'Supervise',
    'hiw.s3.desc': 'Monitor compliance in real time and generate audit-ready reports.',

    // ForWho
    'fw.eyebrow': 'Roles',
    'fw.title': 'Designed for every role in your organization',
    'fw.profileLabel': 'Profile',
    'fw.link': 'View app',
    'fw.r1.role': 'Field inspectors',
    'fw.r1.copy': 'Intuitive checklists that guide every step safely, even offline.',
    'fw.r2.role': 'Operations managers',
    'fw.r2.copy': 'Real-time visibility into the status of every task, team, and compliance.',
    'fw.r3.role': 'Safety officers',
    'fw.r3.copy': 'Automatic reports and auditable evidence to respond quickly to inspections.',

    // ServicesBoard
    'svc.eyebrow': 'Service model',
    'svc.title': 'Our services',
    'svc.link': 'Learn more +',
    'svc.s1.title': 'Monthly platform subscription',
    'svc.s1.copy': 'Continuous access to LiveElectric with updates, security, and base support.',
    'svc.s2.title': 'Team training & onboarding',
    'svc.s2.copy': 'Guided implementation for supervisors, crews, and compliance officers.',
    'svc.s3.title': 'Certified remote engineer (Chile)',
    'svc.s3.copy': 'Remote technical-operational support in Spanish and English for critical operations.',
    'svc.s4.title': 'On-site engineer',
    'svc.s4.copy': 'In-field support for energized tasks and operational verification.',
    'svc.s5.title': 'Criticality-based pre-work checklist',
    'svc.s5.copy': 'Mandatory steps with control validation before starting execution.',
    'svc.s6.title': 'Time-stamped evidence',
    'svc.s6.copy': 'Photographic and documentary record linked to each procedure step.',
    'svc.s7.title': 'Stop-work alerts',
    'svc.s7.copy': 'Detection of critical deviations to halt work and correct in time.',
    'svc.s8.title': 'Real-time reports & audit',
    'svc.s8.copy': 'Full visibility into compliance status for safety and inspection.',

    // MidCTA
    'midcta.eyebrow': 'Expected outcome',
    'midcta.title': 'Less paperwork, greater operational traceability',
    'midcta.cta': 'Request demo',
    'midcta.secondary': 'View services',

    // Stats
    'stats.s1.label': 'Offline availability',
    'stats.s2.label': 'Report time reduction',
    'stats.s3.label': 'Procedure traceability',
    'stats.s4.label': 'Critical steps skipped',

    // ValuePanels
    'vp.imgAlt': 'Team in bucket truck inspecting live lines',
    'vp.eyebrow': 'Real-time management',
    'vp.title': 'Operating system to plan and execute live-line work',
    'vp.copy': 'LiveElectric connects safety, compliance, and traceability in a single platform for field teams, operations managers, and audit departments.',
    'vp.cta': 'View demo',
    'vp.v1.title': 'Integrated risk control',
    'vp.v1.copy': 'Identifies hazards, assigns controls, and applies go/no-go criteria before energizing.',
    'vp.v2.title': 'On-site certification verification',
    'vp.v2.copy': 'Confirms correct method, qualified crew, and approvals with traceable evidence.',
    'vp.v3.title': 'Incident control & prevention',
    'vp.v3.copy': 'Reports, investigates, corrects, and prevents deviations with real-time follow-up.',

    // FinalNarrative
    'fn.eyebrow': 'Measurable impact',
    'fn.title': 'Building the future of operational safety',
    'fn.stat1.label': 'Active monitoring',
    'fn.stat2.label': 'Step traceability',
    'fn.stat3.label': 'Critical omissions',
    'fn.bizEyebrow': 'Business model',
    'fn.bizTitle': 'Flexible subscription with remote or on-site support',
    'fn.bizCopy': 'We offer subscription packages with training, remote engineer (Chile), or on-site engineer to support adoption based on each client\'s criticality level and operational maturity.',
    'fn.bizCta': 'Request demo',

    // CTASection
    'cta.eyebrow': 'Next step',
    'cta.title': 'Transform your team\'s safety',
    'cta.copy': 'Schedule a demo and discover how LiveElectric can digitize your operations in less than a week.',
    'cta.button': 'Request free demo',
    'cta.note': 'No commitment. Guided onboarding included.',

    // Footer
    'footer.tagline': 'Digital compliance platform for live-line operations.',
    'footer.work': 'Our work',
    'footer.capabilities': 'Capabilities',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy policy',
    'footer.rights': 'LiveElectric. All rights reserved.',
    'footer.ariaLabel': 'Footer links',

    // Privacy page
    'privacy.title': 'Privacy Policy | LiveElectric',
    'privacy.description': 'LiveElectric privacy policy for personal data processing on the live-line operations management platform.',
  },
};

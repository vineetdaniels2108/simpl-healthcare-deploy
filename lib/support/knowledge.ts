type KnowledgeEntry = {
  id: string
  title: string
  url: string
  content: string
  answer: string
  tags?: string[]
}

const DOCS_BASE = 'https://api-docs.simplhealthcare.com/docs/getting-started#/'
const GETTING_STARTED_WITH_SIMPL = 'https://api-docs.simplhealthcare.com/docs/getting-started-with-simpl#/'
const PATIENT_MANAGEMENT = 'https://api-docs.simplhealthcare.com/docs/patient-management#/'
const CREATE_TEMPLATES_NOTES = 'https://api-docs.simplhealthcare.com/docs/create-notes-forms-templates#/'
const NOTES_MANAGEMENT = 'https://api-docs.simplhealthcare.com/docs/notes-management#/'
const RX_LABS_MANAGEMENT = 'https://api-docs.simplhealthcare.com/docs/rx-labs-management#/'
const BILLING = 'https://api-docs.simplhealthcare.com/docs/billing#/'

const knowledgeBase: KnowledgeEntry[] = [
  {
    id: 'welcome',
    title: 'Welcome to Simpl Healthcare',
    url: DOCS_BASE,
    content:
      'Overview of Simpl Healthcare mission and platform. AI-driven EHR, patient-centered workflows, secure data handling, interoperability.',
    answer:
      'Simpl Healthcare provides an all-in-one EHR with AI-powered tooling to streamline workflows and improve patient care. Read the welcome section for a high-level overview: https://api-docs.simplhealthcare.com/docs/getting-started#/',
    tags: ['welcome', 'overview', 'about'],
  },
  // ---- Finer-grained anchors (static URLs, easy to expand) ----
  {
    id: 'patient-single-add',
    title: 'Add a Single Patient',
    url: PATIENT_MANAGEMENT,
    content:
      'Add a single patient from Dashboard (+) or Patients tab. Required fields and basic steps.',
    answer:
      'Add one patient from the Patients tab or Dashboard (+). See required fields and steps here: https://api-docs.simplhealthcare.com/docs/patient-management#/',
    tags: ['patient', 'add patient', 'single add'],
  },
  {
    id: 'patient-bulk-upload',
    title: 'Bulk Upload Patients (CSV)',
    url: PATIENT_MANAGEMENT,
    content:
      'Bulk upload up to 100 patients using CSV. Includes required columns, format rules, and troubleshooting.',
    answer:
      'Use Upload Patient Roster to bulk upload via CSV (required columns, 100 row limit). CSV rules and troubleshooting: https://api-docs.simplhealthcare.com/docs/patient-management#/',
    tags: ['patients', 'bulk upload', 'csv', 'roster'],
  },
  {
    id: 'template-create',
    title: 'Create a Note/Form Template',
    url: CREATE_TEMPLATES_NOTES,
    content:
      'Create templates from Settings > Notes & Forms Templates. Choose type, add questions (Section, Text, Checkbox, Radio, Date/Time, etc.).',
    answer:
      'Create templates under Settings > Notes & Forms Templates. Pick the type and add questions: https://api-docs.simplhealthcare.com/docs/create-notes-forms-templates#/',
    tags: ['template', 'note template', 'form template'],
  },
  {
    id: 'note-create-sign',
    title: 'Create and Sign a Note',
    url: NOTES_MANAGEMENT,
    content:
      'My Notes overview, start new note from patient, fill sections, then sign. Includes HPI, summary, template selection.',
    answer:
      'Create a note from the patient profile or My Notes, fill required sections, then Sign. Steps: https://api-docs.simplhealthcare.com/docs/notes-management#/',
    tags: ['note', 'sign note', 'my notes', 'hpi'],
  },
  {
    id: 'appointments-booking',
    title: 'Book an Appointment',
    url: GETTING_STARTED_WITH_SIMPL,
    content:
      'Navigate to Scheduling, select provider/location, choose service (visit type), pick time, confirm, and send confirmation.',
    answer:
      'Go to Scheduling, select provider/location, choose service and time, confirm appointment. Guide: https://api-docs.simplhealthcare.com/docs/getting-started-with-simpl#/',
    tags: ['appointment', 'schedule', 'book'],
  },
  {
    id: 'appointments-telehealth',
    title: 'Start a Telehealth Visit',
    url: GETTING_STARTED_WITH_SIMPL,
    content:
      'Ensure telehealth enabled, create/open appointment, set visit type Telehealth, send join link, start session at scheduled time.',
    answer:
      'Set visit type to Telehealth and send the secure link. Start session at scheduled time. Details: https://api-docs.simplhealthcare.com/docs/getting-started-with-simpl#/',
    tags: ['telehealth', 'virtual visit'],
  },
  {
    id: 'rx-create',
    title: 'Create a Prescription (Rx)',
    url: RX_LABS_MANAGEMENT,
    content:
      'Create prescription, ePrescribe/print, manage refills or discontinue. Provider verification as needed.',
    answer:
      'Create a prescription and ePrescribe or print. Manage refills/discontinue. Guide: https://api-docs.simplhealthcare.com/docs/rx-labs-management#/',
    tags: ['rx', 'prescription', 'eprescribe', 'refill'],
  },
  {
    id: 'labs-order',
    title: 'Order Labs',
    url: RX_LABS_MANAGEMENT,
    content:
      'Order labs and manage results in the Rx & Labs module.',
    answer:
      'Order labs and track results. Steps: https://api-docs.simplhealthcare.com/docs/rx-labs-management#/',
    tags: ['labs', 'lab order', 'results'],
  },
  {
    id: 'billing-create-invoice',
    title: 'Create an Invoice',
    url: BILLING,
    content:
      'Create invoices, manage payer info, and adjust codes as needed.',
    answer:
      'Create an invoice and manage payer/codes. See: https://api-docs.simplhealthcare.com/docs/billing#/',
    tags: ['billing', 'invoice'],
  },
  {
    id: 'billing-payments',
    title: 'Post a Payment',
    url: BILLING,
    content:
      'Post payments and reconcile balances within billing.',
    answer:
      'Post payments and reconcile balances. Guide: https://api-docs.simplhealthcare.com/docs/billing#/',
    tags: ['billing', 'payment', 'post payment'],
  },
  {
    id: 'billing-claims',
    title: 'Submit Claims',
    url: BILLING,
    content:
      'Create and submit claims with common codes, review and adjust as needed.',
    answer:
      'Create/submit claims with the right codes. Steps: https://api-docs.simplhealthcare.com/docs/billing#/',
    tags: ['billing', 'claims', 'coding'],
  },
  {
    id: 'telehealth-start',
    title: 'Start a Telehealth Visit',
    url: DOCS_BASE,
    content:
      'Guidance on initiating a telehealth session: prerequisites, scheduling, launching a virtual visit, and patient access steps.',
    answer:
      'To start a telehealth session, follow the Telehealth section in the Getting Started guide for scheduling and launching a virtual visit: https://api-docs.simplhealthcare.com/docs/getting-started#/',
    tags: ['telehealth', 'virtual', 'visit', 'start', 'video'],
  },
  {
    id: 'appointments-book',
    title: 'Book an Appointment',
    url: DOCS_BASE,
    content:
      'How to book an appointment: navigating to scheduling, selecting provider, time slots, and confirming the appointment.',
    answer:
      'To book an appointment, see the scheduling instructions in the Getting Started guide: https://api-docs.simplhealthcare.com/docs/getting-started#/',
    tags: ['appointment', 'book', 'schedule', 'scheduling'],
  },
  {
    id: 'platforms-services',
    title: 'Platforms and Services',
    url: DOCS_BASE,
    content:
      'Electronic Health Records, Practice Management, Patient Platform, Telehealth, AI-powered insights. Centralized and secure.',
    answer:
      'Explore our Platforms & Services (EHR, Practice Management, Patient Platform, Telehealth, AI insights) here: https://api-docs.simplhealthcare.com/docs/getting-started#/',
    tags: ['platforms', 'services', 'ehr', 'telehealth', 'practice management'],
  },
  {
    id: 'web-services-overview',
    title: 'Web Services Overview',
    url: DOCS_BASE,
    content:
      'High-level description of web services, integration options, data sharing, and partner connectivity across the Simpl platform.',
    answer:
      'See the Web Services Overview for capabilities and integration paths: https://api-docs.simplhealthcare.com/docs/getting-started#/',
    tags: ['web services', 'overview', 'integration'],
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    url: GETTING_STARTED_WITH_SIMPL,
    content:
      'Onboarding steps for new users and teams: account activation, terms acceptance, password creation, verification code, login, browser recommendations, organization and location setup, staff & resources, and role types.',
    answer:
      'Start here for onboarding and initial setup: https://api-docs.simplhealthcare.com/docs/getting-started-with-simpl#/',
    tags: ['getting started', 'onboarding', 'setup', 'activate account', 'roles'],
  },
  {
    id: 'patient-management',
    title: 'Add Patients',
    url: PATIENT_MANAGEMENT,
    content:
      'Add patients via Dashboard (+) or Patients tab; supports single add or bulk upload (CSV up to 100 rows). Includes required fields, optional fields, file format rules, and troubleshooting (SSN/Zip leading zeros, date format, gender errors).',
    answer:
      'See how to add patients (single or bulk) and required CSV format: https://api-docs.simplhealthcare.com/docs/patient-management#/',
    tags: ['patients', 'add patient', 'bulk upload', 'csv', 'roster'],
  },
  {
    id: 'create-templates-notes',
    title: 'Create Templates & Forms',
    url: CREATE_TEMPLATES_NOTES,
    content:
      'Create notes & forms templates from Settings > Notes & Forms Templates. Types: Encounter, Patient & Forms, Assessment, Referrals (coming). Includes question types (Section, Checkbox, Date/Time, Dropdown, HTML, Radio, Signature, Text Box, Visual Editor, Face, Table) and Sending patient forms.',
    answer:
      'Create note/form templates and learn question types here: https://api-docs.simplhealthcare.com/docs/create-notes-forms-templates#/',
    tags: ['templates', 'forms', 'encounter', 'assessment', 'patient forms'],
  },
  {
    id: 'notes-management',
    title: 'Create & Sign Notes',
    url: NOTES_MANAGEMENT,
    content:
      'My Notes overview, starting a new note from patient profile, note sections (Overview, Patient History, Quick Add, Forms, Medications). Multiple versions of notes and template selection; AI usage in HPI and summarization.',
    answer:
      'Create and sign notes step-by-step: https://api-docs.simplhealthcare.com/docs/notes-management#/',
    tags: ['notes', 'sign', 'HPI', 'templates', 'my notes'],
  },
  {
    id: 'appointments-services',
    title: 'Appointments & Services',
    url: GETTING_STARTED_WITH_SIMPL,
    content:
      'Create services and schedule appointments: navigate to Scheduling, select provider/location, choose service (visit type), pick time, confirm details, send confirmation. Provider admins can configure services in settings.',
    answer:
      'Learn how to create services and book appointments in the Getting Started guide: https://api-docs.simplhealthcare.com/docs/getting-started-with-simpl#/',
    tags: ['appointments', 'services', 'scheduling', 'book appointment'],
  },
  {
    id: 'rx-labs',
    title: 'Rx & Labs Management',
    url: RX_LABS_MANAGEMENT,
    content:
      'Order Rx and labs: create prescriptions, print/ePrescribe, manage refills, discontinue; lab orders selection and result management.',
    answer:
      'See Rx and Labs workflows: https://api-docs.simplhealthcare.com/docs/rx-labs-management#/',
    tags: ['rx', 'prescription', 'labs', 'orders', 'refill', 'discontinue'],
  },
  {
    id: 'billing-invoicing',
    title: 'Billing & Invoicing',
    url: BILLING,
    content:
      'Create invoices, manage payer info, post payments, and run billing reports. Supports common codes, claims workflows, and adjustments.',
    answer:
      'Billing and invoicing overview: https://api-docs.simplhealthcare.com/docs/billing#/',
    tags: ['billing', 'invoices', 'claims', 'payments', 'coding'],
  },
  {
    id: 'start-integration',
    title: 'Start Integration',
    url: DOCS_BASE,
    content:
      'Guidance for developer integration flows, authentication, and connecting with Simpl partner services.',
    answer:
      'Follow the Start Integration guide for developer setup and auth steps: https://api-docs.simplhealthcare.com/docs/getting-started#/',
    tags: ['integration', 'developer', 'api', 'auth'],
  },
  {
    id: 'glossary',
    title: 'Glossary',
    url: DOCS_BASE,
    content:
      'Definitions of key terms and concepts used across the Simpl platform and documentation.',
    answer:
      'Browse definitions in the Glossary: https://api-docs.simplhealthcare.com/docs/getting-started#/',
    tags: ['glossary', 'definitions', 'terms'],
  },
  {
    id: 'faq',
    title: 'FAQ',
    url: DOCS_BASE,
    content:
      'Frequently asked questions covering common customer scenarios and resolutions.',
    answer:
      'Check the FAQ for quick answers to common questions: https://api-docs.simplhealthcare.com/docs/getting-started#/',
    tags: ['faq', 'questions', 'help'],
  },
  {
    id: 'contact',
    title: 'Contact Support',
    url: 'https://www.simplhealthcare.com/contact',
    content:
      'Reach out to the Simpl Healthcare team for additional help, escalations, or account assistance.',
    answer:
      'If you need direct assistance, contact us: https://www.simplhealthcare.com/contact',
    tags: ['contact', 'support'],
  },
]

export default knowledgeBase



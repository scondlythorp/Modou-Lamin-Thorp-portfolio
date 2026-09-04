import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ges',
    slug: 'gambia-education-suite',
    title: 'Gambia Education Suite (GES)',
    subtitle: 'Modular Multi-Tenant Academic Management SaaS Prototype',
    tagline: 'Streamlining academic administration, role-based records, and student assessment workflows for Gambian secondary schools and colleges.',
    category: 'Enterprise & SaaS',
    secondaryCategories: ['Backend & APIs', 'Local Problem Solving'],
    status: 'Flagship Prototype',
    isFeatured: true,
    featuredOrder: 1,
    role: 'Lead Architect & Full-Stack Developer',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'bcrypt', 'Zod', 'Tailwind CSS'],
    githubUrl: 'https://github.com/scondlythorp/gambia-education-suite',
    overview: 'An integrated educational administration platform designed to replace fragmented paper record-keeping in Gambian educational institutions with a secure, centralized database and role-governed portals.',
    metricsOrScope: 'Modeled for multi-role workflows: Administrators, Department Heads, Teachers, and Students.',
    caseStudy: {
      summary: 'Gambia Education Suite addresses the operational inefficiencies and grade audit vulnerabilities faced by secondary schools and post-secondary colleges in The Gambia. By centralizing student enrollment, curriculum subject assignment, continuous assessments, and transcript generation into a relational PostgreSQL database backed by Express.js APIs, it establishes an auditable academic record lifecycle.',
      problem: 'Many educational institutions in The Gambia rely on physical ledgers or fragmented spreadsheets to track attendance, continuous assessment test scores, and terminal exam grades. This leads to high error rates during grade tabulation, vulnerability to data tampering, delayed report cards, and administrative burdens when transferring student historical records.',
      problemImportance: 'Accurate, tamper-resistant academic records are vital for student progression and tertiary accreditation. In resource-constrained environments where internet bandwidth can fluctuate, schools need an architectural model that offers fast local network queries, strict audit trails, and predictable schema structures.',
      solution: 'Designed and built a centralized web platform featuring granular Role-Based Access Control (RBAC). The system separates administrative oversight from teacher grade entries and student view-only transcripts, enforcing data integrity via relational foreign keys and Zod input validation schemas on all backend endpoints.',
      keyFeatures: [
        'Granular RBAC: Distinct operational permissions for Super Admins, School Principals, Teachers, and Students.',
        'Academic Term & Assessment Modeling: Configurable weighting for continuous assessments (40%) and terminal examinations (60%).',
        'Automated Grade Point Calculation: Algorithmic conversion of numeric scores to standardized WAEC/national grading scales.',
        'Student Enrollment & Class Rosters: Relational associations between academic sessions, terms, classrooms, and teacher course assignments.',
        'Audit Logging & Score Locking: Mechanism to prevent grade modifications once an academic term is officially finalized by the examination officer.'
      ],
      architecture: [
        {
          layer: 'Backend',
          details: 'Node.js runtime with Express.js REST API layer, structured following MVC and Service-Repository design principles for maintainability.'
        },
        {
          layer: 'Database',
          details: 'PostgreSQL database with Prisma ORM migrations, leveraging composite keys, foreign key cascading constraints, and indexed student matriculation numbers.'
        },
        {
          layer: 'Auth & Security',
          details: 'Stateless JSON Web Tokens (JWT) stored securely with HTTP-only cookie support, bcrypt password hashing with salt rounds, and role verification middlewares.'
        },
        {
          layer: 'APIs & Integration',
          details: 'RESTful endpoints returning standardized JSON responses with error handling and Zod schema payload validation.'
        }
      ],
      databaseSchemaHighlights: [
        'Users & Roles: id, email, passwordHash, role (ADMIN | TEACHER | STUDENT | EXAM_OFFICER), isActive',
        'Students: id, matriculationNo (unique indexed), userId, dateOfBirth, classId, guardianContact',
        'Courses & Enrollments: courseId, academicTermId, teacherId, creditHours',
        'Grades: id, studentId, courseId, termId, caScore, examScore, totalScore, gradeLetter, isLocked'
      ],
      businessLogicHighlights: [
        'Atomic grade submission: Validates that caScore <= 40 and examScore <= 60 before computing total and assigning standard letter grade.',
        'Term finalization workflow: Only authenticated exam officers can flip the term state to CLOSED, triggering automatic write-lock on grade tables.',
        'Enrollment collision protection: Composite unique constraint on [studentId, courseId, academicTermId] prevents duplicate registrations.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Managing complex relational queries for term-end report cards without causing severe N+1 database performance bottlenecks.',
          solution: 'Utilized Prisma ORM relation joins (`include` and `select` filters) to fetch student profiles, enrolled subjects, and computed grades in single round-trip transactions.'
        },
        {
          challenge: 'Preventing unauthorized score adjustments after grading periods close.',
          solution: 'Implemented a database status flag check in the Express middleware that verifies term lock status before permitting any PUT/PATCH operation on grade records.'
        }
      ],
      whatLearned: [
        'Advanced relational database modeling with PostgreSQL and Prisma schema migrations.',
        'Architecting role-based security layers that reflect real-world organizational hierarchies.',
        'Designing software specifically tailored for West African administrative and connectivity constraints.'
      ],
      futureRoadmap: [
        'Offline-capable local network caching (PWA / Service Worker) for periodic power and connection outages.',
        'Automated SMS notification integration for parent grade report releases.',
        'Export module for bulk Ministry of Basic and Senior Secondary Education (MoBSE) statistical reports.'
      ]
    }
  },
  {
    id: 'psis',
    slug: 'pharmacy-management-system',
    title: 'Pharmacy Sales & Inventory Management System (PSIS)',
    subtitle: 'Relational Inventory Control & Point-of-Sale System with FEFO Tracking',
    tagline: 'Production-minded pharmaceutical inventory platform featuring batch expiry tracking, FEFO dispatching, and role-governed dispensing.',
    category: 'Backend & APIs',
    secondaryCategories: ['Enterprise & SaaS', 'Local Problem Solving'],
    status: 'Completed System',
    isFeatured: true,
    featuredOrder: 2,
    role: 'Backend & Database Engineer',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'bcrypt', 'Zod', 'Postman'],
    githubUrl: 'https://github.com/scondlythorp/pharmacy-management-system',
    overview: 'A full-stack pharmaceutical inventory and POS engine engineered to prevent drug expiration losses, automate low-stock restocking orders, and track transactional medicine sales with auditable receipt generation.',
    metricsOrScope: 'Engineered with FEFO (First-Expired, First-Out) batch dispatching, transactional sales recording, and multi-user access (Admin vs Pharmacist Dispenser).',
    caseStudy: {
      summary: 'In retail pharmacies, dispensing expired medications is a catastrophic health hazard, while poor inventory rotation leads to financial waste. PSIS implements strict batch tracking with FEFO (First-Expired, First-Out) logic, preventing stock rot and ensuring complete auditability for controlled substances.',
      problem: 'Small and medium community pharmacies frequently track inventory manually or with generic point-of-sale software that fails to differentiate medicine batches, production lots, and varied expiration dates. This results in older stock being pushed to the back of shelves while newer batches expire unnoticed.',
      problemImportance: 'Healthcare regulatory standards demand strict traceability of medicine batches and expiration dates. A dedicated system prevents financial losses from dead stock and safeguards patient health.',
      solution: 'Developed an Express.js and PostgreSQL system that models Medicines as parent entities with multiple time-stamped Batches. When a pharmacist processes a sale, the dispatch engine automatically pulls stock from the batch expiring soonest (FEFO), updating inventory counts within an atomic database transaction.',
      keyFeatures: [
        'FEFO Inventory Rotation: Automatic sorting of active medicine batches by earliest expiry date upon checkout.',
        'Automated Low-Stock & Expiry Alerts: Scheduled and on-demand queries highlighting batches nearing expiration (30/60/90 days) and items below reorder threshold.',
        'Role-Based Dispensing: Admins manage procurement costs, suppliers, and staff accounts; Pharmacists operate the fast sales counter and customer receipt generation.',
        'Transactional Sales Engine: Atomic database commits ensuring that stock is only decremented if the sale record and payment line items are successfully written.',
        'Reporting & CSV Exports: Query endpoints for daily revenue, fast-moving drug analytics, and supplier purchase histories.'
      ],
      architecture: [
        {
          layer: 'Backend',
          details: 'RESTful API server built on Express.js, featuring modular routing for /auth, /medicines, /batches, /sales, and /suppliers.'
        },
        {
          layer: 'Database',
          details: 'PostgreSQL relational database managed via Prisma ORM with strict referential integrity and indexes on expiryDate and batchNumber.'
        },
        {
          layer: 'Auth & Security',
          details: 'JWT bearer tokens with role-based route guards and input sanitization using Zod schema validators.'
        },
        {
          layer: 'Business Logic',
          details: 'FEFO stock allocation algorithm running inside Prisma $transaction blocks to eliminate race conditions during concurrent sales.'
        }
      ],
      databaseSchemaHighlights: [
        'Medicine: id, genericName, brandName, category, unitOfMeasure, reorderLevel',
        'Batch: id, medicineId, batchNumber, quantityInStock, purchasePrice, sellingPrice, expiryDate, supplierId',
        'Sale & SaleItem: id, receiptNo, totalAmount, paymentMethod, cashierId, items: [batchId, quantity, unitPrice, subtotal]',
        'StockAdjustmentLog: id, batchId, reason (DAMAGED | EXPIRED | COUNT_CORRECTION), adjustedBy, timestamp'
      ],
      businessLogicHighlights: [
        'FEFO batch selection: When quantity Q of Medicine M is sold, the system queries active batches WHERE quantityInStock > 0 ORDER BY expiryDate ASC, decrementing batches iteratively until Q is fulfilled.',
        'Concurrency protection: Wrapped inside a database transaction to prevent two cashiers from selling the last unit of a batch simultaneously.',
        'Zero-stock validation: Rejects sales attempts when total aggregate batch quantity is lower than requested quantity, returning descriptive error payloads.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Splitting an order across multiple batches when a single batch has insufficient quantity to fulfill the requested dosage.',
          solution: 'Engineered a greedy batch-decrement loop in the service layer that creates distinct SaleItem records linked to respective batch IDs while rolling back the entire checkout if any batch update fails.'
        },
        {
          challenge: 'Maintaining accurate historical sales records if a medicine or batch is deleted.',
          solution: 'Enforced soft deletes (`isArchived: boolean`) and restrictive foreign key constraints on the database level, preventing historical audit loss.'
        }
      ],
      whatLearned: [
        'Implementation of ACID transactions in relational databases using Prisma $transaction API.',
        'Real-world domain modeling for retail pharmacy compliance and inventory optimization.',
        'Comprehensive API validation using Zod to reject malformed numeric inputs and past dates on new batches.'
      ],
      futureRoadmap: [
        'Barcode scanner hardware integration (EAN-13 / DataMatrix) for rapid point-of-sale scanning.',
        'Thermal printer ESC/POS integration for direct standard 80mm receipt generation.',
        'Automated purchase order drafting when batch levels drop below safety reorder thresholds.'
      ]
    }
  },
  {
    id: 'techworld',
    slug: 'techworld-technology-services-website',
    title: 'Techworld — Responsive Technology Services Website',
    subtitle: 'Responsive Multi-Page Commercial Web Architecture for IT Services',
    tagline: 'Designed and developed a responsive static website for a technology services company based in The Gambia with zero build dependencies.',
    category: 'Enterprise & SaaS',
    secondaryCategories: ['Local Problem Solving'],
    status: 'Completed System',
    isFeatured: true,
    featuredOrder: 3,
    role: 'Web Developer & UI Designer',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'CSS Grid', 'Flexbox'],
    githubUrl: 'https://github.com/scondlythorp/techworld-website',
    overview: 'Designed and developed a responsive static website for a technology services company based in The Gambia. Implemented structured pages for company information, services, contact details, and reusable page templates using HTML and CSS. Built with a lightweight architecture requiring no build process or external dependencies.',
    metricsOrScope: 'Multi-page information architecture, service catalog, responsive contact channels, and zero-build static performance.',
    caseStudy: {
      summary: 'Designed and developed a responsive static website for a technology services company based in The Gambia. Implemented structured pages for company information, services, contact details, and reusable page templates using HTML and CSS. Built with a lightweight architecture requiring no build process or external dependencies.',
      problem: 'Technology service providers operating in emerging markets often suffer from bloated, template-heavy websites that load sluggishly on mobile networks, break across non-standard viewports, or require complex build pipelines that complicate future maintenance.',
      problemImportance: 'A fast, responsive, and clear digital front door is essential for local technology service enterprises to establish professional credibility, present core service offerings, and capture inbound client inquiries reliably regardless of user device or connection speed.',
      solution: 'Architected and built a responsive static website with zero external build dependencies. Structured modular, reusable page templates for corporate overview, service catalog, quotation inquiries, and company contact details, guaranteeing sub-second load times on mobile networks.',
      keyFeatures: [
        'Structured Information Architecture: Dedicated, organized pages for company profile, service offerings, and consultation contact channels.',
        'Zero-Dependency Static Architecture: Pure semantic HTML5 and vanilla CSS3 requiring no compilation steps, bundlers, or external runtime libraries.',
        'Responsive Multi-Device Layouts: Fluid CSS Flexbox and Grid layouts rigorously optimized for smartphones, tablets, and desktop displays.',
        'Reusable Component Templates: Standardized header navigation, footer, service cards, and call-to-action blocks for unified brand consistency.',
        'Direct Client Inquiries: Accessible contact sections with telephone direct-dial links, email anchors, and business location details in The Gambia.'
      ],
      architecture: [
        {
          layer: 'Frontend',
          details: 'Semantic HTML5 structure with accessible navigation, landmarks, and responsive CSS3 Grid and Flexbox layouts.'
        },
        {
          layer: 'APIs & Integration',
          details: 'Client-side contact triggers, telephone direct-dials, mailto hooks, and embedded location map integration.'
        },
        {
          layer: 'Business Logic',
          details: 'Zero-overhead static delivery with mobile-first breakpoints (480px, 768px, 1024px) ensuring zero horizontal scroll across devices.'
        }
      ],
      databaseSchemaHighlights: [
        'Static Page Architecture: index.html (Homepage), about.html (Company Information), services.html (IT Solutions), contact.html (Inquiries & Location).',
        'Service Catalog Structure: IT Support & Consulting, Network Installation, Hardware Maintenance, and Custom Software Solutions.',
        'Contact Metadata: Business hours (UTC+0), Banjul/Serekunda municipal service areas, direct business phone endpoints.'
      ],
      businessLogicHighlights: [
        'Zero-build maintenance: Cleanly formatted source files allow non-developer administrative staff to update text, pricing, and services directly.',
        'Mobile-first responsive styling: Fluid typography and viewport scaling preventing layout breakages across all form factors.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Maintaining visual and structural consistency across multiple distinct HTML pages without a template engine or bundler.',
          solution: 'Created a standardized CSS component library with reusable class patterns (.btn, .card, .service-box) and boilerplate template documents.'
        },
        {
          challenge: 'Ensuring ultra-fast page load times over constrained mobile data connections in The Gambia.',
          solution: 'Hand-crafted responsive layout structures and minimized CSS overhead, achieving sub-100KB total page weight without external CDN dependencies.'
        }
      ],
      whatLearned: [
        'Mastery of foundational web standards: semantic HTML5 markup, modern CSS Grid/Flexbox, and responsive typography scales.',
        'Designing for reliability and extreme performance in bandwidth-sensitive environments.',
        'Client communication and information architecture for commercial technology service enterprises.'
      ],
      futureRoadmap: [
        'Integration of interactive quotation request calculator.',
        'Direct WhatsApp Business instant messaging integration for live technical support dispatch.',
        'Static site generator (SSG) pipeline for automated publishing of technical advisory blog posts.'
      ]
    }
  },
  {
    id: 'rkp',
    slug: 'restaurant-cloud-kitchen-platform',
    title: 'Restaurant & Cloud Kitchen Management Platform',
    subtitle: 'Multi-Tenant Order Routing, Menu Management & Kitchen Display System (KDS)',
    tagline: 'SaaS operational architecture connecting customer digital ordering, payment status verification, and real-time kitchen ticket workflows.',
    category: 'Enterprise & SaaS',
    secondaryCategories: ['Backend & APIs'],
    status: 'Functional Prototype',
    isFeatured: true,
    featuredOrder: 4,
    role: 'Full-Stack Developer & API Designer',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'REST API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/scondlythorp/restaurant-cloud-kitchen-platform',
    overview: 'A digital food service operations platform engineered for modern eateries and multi-brand cloud kitchens to manage menus, track customer orders, and streamline kitchen prep stations.',
    metricsOrScope: 'Designed around multi-station kitchen display workflows (Prep, Cook, Assembly, Ready for Pickup) and order status verification.',
    caseStudy: {
      summary: 'Restaurants and burgeoning cloud kitchens struggle to maintain order accuracy when handling dine-in, takeaway, and delivery orders through uncoordinated paper tickets. This platform digitizes order ingestion, routes order line items to specific kitchen prep stations, and provides a clean management dashboard for managers.',
      problem: 'Kitchen miscommunication leads to delayed orders, incorrect ingredient modifications, and inventory discrepancies between what is sold at the front desk and what is actually available in the pantry.',
      problemImportance: 'In competitive food service environments, table turnover and order fulfillment speed dictate profitability. A resilient digital pipeline minimizes food waste and improves customer retention.',
      solution: 'Built an order lifecycle backend with Express.js and PostgreSQL. The system processes order submissions, updates live status codes, and groups menu items by preparation categories for organized display on kitchen station screens.',
      keyFeatures: [
        'Dynamic Menu & Modifier Engine: Categorized menu management with optional add-ons, price modifiers, and instant out-of-stock toggles.',
        'Kitchen Display System (KDS) View: Color-coded order queue tracking prep time elapsed per ticket (Green < 10m, Amber 10-20m, Red > 20m).',
        'Order State Transitions: Validated workflow progression (RECEIVED → PREPARING → READY → DISPATCHED / SERVED).',
        'Multi-Station Routing: Capability to route beverage items to the bar and hot items to the grill station.',
        'Daily Shift Summary: Consolidated metrics on total orders completed, top-selling dishes, and average prep time.'
      ],
      architecture: [
        {
          layer: 'Backend',
          details: 'Express.js RESTful API handling order creation, status patching, and inventory availability checks.'
        },
        {
          layer: 'Database',
          details: 'PostgreSQL schema with Prisma ORM modeling restaurants, categories, menu items, modifiers, orders, and order items.'
        },
        {
          layer: 'Business Logic',
          details: 'Validation rules preventing orders on archived or out-of-stock items, and automated calculation of tax/service totals.'
        }
      ],
      databaseSchemaHighlights: [
        'Restaurants: id, name, slug, address, phone, currency, isActive',
        'MenuItems: id, restaurantId, name, description, basePrice, categoryId, isAvailable',
        'Orders: id, restaurantId, orderNumber, orderType (DINE_IN | TAKEAWAY | DELIVERY), status, totalAmount, createdAt',
        'OrderItems: id, orderId, menuItemId, quantity, unitPrice, specialInstructions'
      ],
      businessLogicHighlights: [
        'Order number generation: Daily auto-resetting counter per restaurant (e.g., #001 to #999) for quick verbal kitchen calls.',
        'Atomic checkout: Price snapshots stored in OrderItem table so subsequent menu price modifications do not corrupt historical receipts.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Ensuring kitchen staff have immediate visibility into new incoming orders without requiring continuous page refreshes.',
          solution: 'Designed an optimized lightweight polling endpoint that returns order status deltas based on client last-checked timestamps.'
        },
        {
          challenge: 'Handling complex custom dietary notes and dish modifications cleanly within relational tables.',
          solution: 'Structured a JSONB metadata column for flexible modifier configurations while keeping core pricing fields strictly relational.'
        }
      ],
      whatLearned: [
        'Designing multi-tenant database schemas for SaaS application foundations.',
        'Optimizing high-frequency read/write operations for kitchen fast-paced environments.',
        'Creating accessible, high-contrast UI layouts suitable for bustling kitchen touchscreen devices.'
      ],
      futureRoadmap: [
        'Real-time WebSocket notifications for kitchen prep alarms.',
        'Integration with local mobile money payment gateway webhooks.',
        'Ingredient-level depletion tracking connected to recipe bills of materials (BOM).'
      ]
    }
  },
  {
    id: 'ai-agri',
    slug: 'ai-agriculture-decision-support',
    title: 'AI Agriculture Decision Support Platform',
    subtitle: 'Data-Driven Agronomic Guidance & Crop Advisory System',
    tagline: 'Evaluating soil nutrient parameters (N-P-K), soil pH, and environmental climate metrics to provide practical crop selection advice.',
    category: 'Agritech & Data',
    secondaryCategories: ['Local Problem Solving', 'Academic & Systems'],
    status: 'Functional Prototype',
    isFeatured: true,
    featuredOrder: 5,
    role: 'Researcher & Software Developer',
    technologies: ['Python', 'Data Modeling', 'REST API', 'JavaScript', 'HTML/CSS'],
    githubUrl: 'https://github.com/scondlythorp/ai-agriculture-decision-support',
    overview: 'An applied data analysis and agronomic decision support prototype designed to assist smallholder agricultural extension agents in recommending optimal crop varieties based on empirical soil and climate inputs.',
    metricsOrScope: 'Evaluates 7 primary agronomic parameters: Nitrogen (N), Phosphorus (P), Potassium (K), soil pH, ambient temperature, relative humidity, and rainfall.',
    caseStudy: {
      summary: 'Agriculture forms the backbone of the Gambian and broader West African economy, yet smallholder farmers frequently suffer yield losses due to planting crops ill-suited to their soil nutrient profiles and changing seasonal rainfall. This project implements an agronomic rule and classification engine that evaluates input soil data against crop tolerance thresholds, providing actionable planting guidance.',
      problem: 'Extension workers and local farmers often lack accessible, localized digital tools to interpret soil test lab results. Planting decisions remain reliant on habit rather than data, reducing food security and fertilizer efficiency.',
      problemImportance: 'Climate variability and soil degradation directly impact agricultural productivity. Providing accessible decision-support software bridges the gap between scientific agronomy and grassroots farming communities.',
      solution: 'Constructed an agronomic decision-support engine in Python. The system ingests soil chemical analysis metrics (Nitrogen, Phosphorus, Potassium, pH) alongside regional climate averages, passing them through multi-parameter suitability scoring algorithms to output ranked crop viability recommendations.',
      keyFeatures: [
        'Nutrient Suitability Engine: Compares soil N-P-K and pH levels against requirement matrices for staple regional crops (e.g., groundnuts, rice, maize, cassava, millet).',
        'Fertilizer Correction Guidance: Identifies soil nutrient deficits and outputs targeted corrective recommendations (e.g., lime application for acidic soils).',
        'Climate Factor Weighting: Considers historical rainfall brackets and temperature ranges to filter out drought-sensitive crops.',
        'Clear Explanation Layer: Generates plain-language rationales detailing why a particular crop is recommended or cautioned against.',
        'Accessible Low-Bandwidth Interface: Lightweight UI ensuring responsiveness across entry-level smartphones and field tablets.'
      ],
      architecture: [
        {
          layer: 'Backend',
          details: 'Python-powered analytical service exposing JSON endpoints for multi-variable agronomic evaluation.'
        },
        {
          layer: 'Business Logic',
          details: 'Multi-criteria decision analysis (MCDA) evaluating distance functions between input soil vectors and ideal agronomic boundaries.'
        },
        {
          layer: 'Frontend',
          details: 'Responsive, clean form and visualization dashboard showing nutrient gauges and ranked crop cards.'
        }
      ],
      databaseSchemaHighlights: [
        'CropProfiles: id, cropName, optimalN_Range, optimalP_Range, optimalK_Range, pH_Min, pH_Max, rainfallMin, rainfallMax',
        'SoilEvaluations: id, fieldIdentifier, nitrogen, phosphorus, potassium, ph, region, recommendedCrop, confidenceScore'
      ],
      businessLogicHighlights: [
        'Vector normalization: Normalizes varied measurement scales (ppm, pH 0-14, mm rainfall) to compute Euclidean distance to ideal crop centroids.',
        'Critical threshold veto: If soil pH falls below a crop absolute tolerance threshold, the crop is automatically disqualified regardless of nutrient abundance.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Calibrating agronomic reference parameters to reflect tropical West African soil conditions rather than temperate zones.',
          solution: 'Compiled reference data based on published sub-Saharan agronomy literature, prioritizing crops like groundnuts (The Gambia primary cash crop) and upland rice.'
        },
        {
          challenge: 'Making complex nutrient ratios interpretable for non-specialist agricultural extension staff.',
          solution: 'Designed clear color-graded gauge indicators (Deficient, Optimal, Excessive) alongside actionable remediation bullet points.'
        }
      ],
      whatLearned: [
        'Application of mathematical classification algorithms to tangible physical-world problems.',
        'Data cleaning and domain modeling using Python.',
        'Demonstrating technical capability beyond standard CRUD web interfaces into scientific decision support.'
      ],
      futureRoadmap: [
        'Integration of a trained Random Forest or Decision Tree classifier on larger open agronomy datasets.',
        'GPS-based lookup of historical weather trends and soil map overlays.',
        'Offline mobile client for remote village visits without cellular data coverage.'
      ]
    }
  },
  {
    id: 'passo',
    slug: 'passo-transit-fare-calculator',
    title: 'PASSO Transit Fare Calculator & Distance Matrix API',
    subtitle: 'Public Transport Route & Fare Computation Engine',
    tagline: 'Standardizing commercial transit fare computation across municipal routes, stages, and passenger categories in The Gambia.',
    category: 'Backend & APIs',
    secondaryCategories: ['Local Problem Solving'],
    status: 'Completed System',
    isFeatured: true,
    featuredOrder: 6,
    role: 'API Engineer & Backend Developer',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'REST API', 'Postman'],
    githubUrl: 'https://github.com/scondlythorp/passo-fare-calculator',
    overview: 'A focused backend API and calculation utility that standardizes commercial transit fares (tanka-tanka and commercial vans) across defined transit corridors in the Greater Banjul Area.',
    metricsOrScope: 'Calculates stage-based transit fares across verified municipal corridors (e.g. Westfield, Banjul, Brikama, Sukuta, Senegambia).',
    caseStudy: {
      summary: 'Public transportation in The Gambia relies on commercial vans and bush taxis operating along semi-formal stages. Disagreements between apprentices (conductors) and passengers regarding official government-gazetted fares and multi-stage trips are commonplace. PASSO provides an authoritative, formulaic fare calculation API.',
      problem: 'Commuters frequently overpay or face arbitrary price hikes during peak hours because fare calculation tables published by transport authorities are difficult to navigate or verify on the fly.',
      problemImportance: 'Standardized, accessible transit fares foster transparency, protect daily wage-earners from price gouging, and serve as the foundational API for future transit ticketing and mapping applications in The Gambia.',
      solution: 'Architected a deterministic routing and fare matrix engine in Express.js. The API accepts origin stage, destination stage, transit mode, and passenger count, computing the official tariff by traversing defined topological corridor segments.',
      keyFeatures: [
        'Corridor Segment Graph: Models linear and branching transit routes as connected stage nodes with verified official tariffs.',
        'Stage Traversal Fare Math: Computes cumulative fares across multi-stage journeys with discount rules for through-trips.',
        'Luggage & Cargo Surcharge Rules: Programmatic evaluation of optional baggage and cargo pricing policies.',
        'RESTful Public Endpoints: Lightweight API designed for frictionless consumption by third-party mobile apps or SMS services.',
        'Thorough Postman Test Suite: Automated test collections validating edge cases, reversed route symmetry, and boundary error codes.'
      ],
      architecture: [
        {
          layer: 'Backend',
          details: 'Lightweight Express.js microservice delivering sub-15ms response times on fare computation queries.'
        },
        {
          layer: 'APIs & Integration',
          details: 'REST endpoints (`/api/v1/fare`, `/api/v1/routes`, `/api/v1/stages`) returning RFC-7807 compliant error payloads.'
        },
        {
          layer: 'Business Logic',
          details: 'Bidirectional graph traversal verifying whether origin and destination share an active transit corridor.'
        }
      ],
      databaseSchemaHighlights: [
        'Stages: id, stageCode, name, corridorId, sequenceIndex',
        'Corridors: id, corridorName (e.g. Banjul - Westfield - Brikama), baseFare',
        'FareMatrix: id, originStageId, destinationStageId, standardFareGMD, activeDate'
      ],
      businessLogicHighlights: [
        'Bidirectional route resolution: Verifies symmetrical fare pricing regardless of direction unless asymmetric road toll or one-way stage applies.',
        'Input sanitization: Validates that stages exist within the same operational network, returning nearest interchange suggestions for disconnected stages.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Accounting for informal stage colloquialisms and spelling variations used by passengers versus official regulatory terminology.',
          solution: 'Implemented alias mapping dictionaries that normalize user queries (e.g., "Westfield", "Old Jeshwang", "Tabokoto") to canonical stage identifiers.'
        },
        {
          challenge: 'Ensuring ultra-fast response times suitable for low-connectivity mobile networks.',
          solution: 'Cached route matrices in memory on service startup, reducing disk/database lookups during fare calculations to near-zero latency.'
        }
      ],
      whatLearned: [
        'Designing clean, developer-friendly REST APIs with strict input validation.',
        'Graph modeling for real-world transportation corridors.',
        'Writing comprehensive automated API contract tests with Postman.'
      ],
      futureRoadmap: [
        'USSD gateway integration to allow basic non-smartphone keypad fare lookups via *code#.',
        'Crowdsourced transit delay and vehicle availability telemetry.',
        'Integration with digital mobile wallet QR ticket payments.'
      ]
    }
  },
  // Archive Projects
  {
    id: 'sams',
    slug: 'student-attendance-management-system',
    title: 'Student Attendance Management System',
    subtitle: 'Academic Attendance Tracking & Session Analytics',
    tagline: 'Streamlining classroom attendance logging, excused absence verification, and student participation reports.',
    category: 'Academic & Systems',
    secondaryCategories: ['Backend & APIs'],
    status: 'Academic Project',
    isFeatured: false,
    role: 'Full-Stack Developer',
    technologies: ['Java', 'MySQL', 'JDBC', 'HTML/CSS'],
    githubUrl: 'https://github.com/scondlythorp/student-attendance-system',
    overview: 'An academic desktop/web hybrid system developed to replace manual paper roll-calls with fast barcode/matriculation logging and periodic attendance percentage reports.',
    metricsOrScope: 'Tracks course sessions, student matriculation rosters, and provides 75% exam qualification threshold reporting.',
    caseStudy: {
      summary: 'Automates student class attendance logging and enforces university policy requiring minimum 75% attendance for final examination eligibility.',
      problem: 'Physical attendance registers waste lecture time and are vulnerable to proxy signing.',
      problemImportance: 'Institutions require verifiable attendance logs for accreditation and student accountability.',
      solution: 'Built relational database tables connecting lecture schedules with enrolled students, providing instant attendance percentages.',
      keyFeatures: [
        'Quick student attendance entry by matriculation number.',
        'Automated 75% eligibility warning threshold.',
        'Exportable attendance summaries for faculty heads.'
      ],
      architecture: [
        { layer: 'Backend', details: 'Core Java business logic with JDBC database connections.' },
        { layer: 'Database', details: 'MySQL relational database with normalized foreign keys.' }
      ],
      databaseSchemaHighlights: ['Students', 'Courses', 'Sessions', 'AttendanceLogs'],
      businessLogicHighlights: ['Percentage calculation: (attendedSessions / totalSessionsHeld) * 100.'],
      challengesAndSolutions: [{ challenge: 'Handling excused medical absences correctly.', solution: 'Added status flag (PRESENT | ABSENT | EXCUSED) that factors out excused days from penalty denominators.' }],
      whatLearned: ['Relational schema design and JDBC transaction handling in Java.'],
      futureRoadmap: ['Biometric / RFID card reader hardware integration.']
    }
  },
  {
    id: 'itsa',
    slug: 'itsa-event-registration-platform',
    title: 'ITSA Platform & Event Registration Portal',
    subtitle: 'Student Technology Association Community Portal',
    tagline: 'Facilitating student tech workshop signups, announcement feeds, and member registration.',
    category: 'Local Problem Solving',
    secondaryCategories: ['Enterprise & SaaS'],
    status: 'Functional Prototype',
    isFeatured: false,
    role: 'Web Developer & Association Member',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/scondlythorp/itsa-portal',
    overview: 'A community portal developed for the Information Technology Students Association to manage technical workshop registrations, share learning resources, and post student tech announcements.',
    metricsOrScope: 'Designed for student association workshop registrations and technical resource sharing.',
    caseStudy: {
      summary: 'A web portal for computer science students to register for technical meetups, coding workshops, and access study materials.',
      problem: 'Student associations often struggle with scattered Google Forms and lost registration confirmations.',
      problemImportance: 'Fosters active tech community engagement and simplifies logistics for student leaders.',
      solution: 'Centralized web registration hub with automated confirmation ticket generation and attendee capacity limits.',
      keyFeatures: ['Event capacity tracking', 'Student profile registration', 'Workshop resource download repository'],
      architecture: [{ layer: 'Backend', details: 'Node.js/Express API with PostgreSQL storage.' }],
      databaseSchemaHighlights: ['Members', 'Events', 'Registrations'],
      businessLogicHighlights: ['Enforces event capacity caps with waitlist queuing.'],
      challengesAndSolutions: [{ challenge: 'Preventing double registration by the same student.', solution: 'Applied composite unique constraint on [studentEmail, eventId].' }],
      whatLearned: ['Building community tools with real-world user engagement feedback.'],
      futureRoadmap: ['QR-code check-in scanner for workshop entry verification.']
    }
  },
  {
    id: 'kilifa',
    slug: 'kilifa-suites-hospitality-website',
    title: 'Kilifa Suites Hospitality Website',
    subtitle: 'Responsive Hotel & Accommodation Showcase Portal',
    tagline: 'Clean, modern hospitality website showcasing room suites, amenity packages, and direct reservation inquiries.',
    category: 'Enterprise & SaaS',
    secondaryCategories: ['Local Problem Solving'],
    status: 'Completed System',
    isFeatured: false,
    role: 'Frontend & UI Developer',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Web'],
    githubUrl: 'https://github.com/scondlythorp/kilifa-suites-web',
    overview: 'A responsive accommodation web experience built to showcase boutique hotel suites, seasonal rates, and provide an accessible direct reservation inquiry form for international and local guests.',
    metricsOrScope: 'Mobile-first responsive architecture designed for fast image rendering and conversion.',
    caseStudy: {
      summary: 'A bespoke hospitality showcase designed to give a boutique accommodation property a credible, high-converting digital presence.',
      problem: 'Independent accommodations often suffer from slow, poorly responsive websites that fail to convert direct booking inquiries.',
      problemImportance: 'Direct bookings eliminate steep commissions to third-party travel agencies for local hospitality businesses.',
      solution: 'Crafted a fast, accessible, mobile-first web interface with crisp imagery, detailed suite amenities, and an intuitive reservation request flow.',
      keyFeatures: ['Suite virtual showcase with amenity checklists', 'Direct reservation inquiry form', 'Interactive location guidance and contact CTAs'],
      architecture: [{ layer: 'Frontend', details: 'Mobile-first semantic HTML5, modern Tailwind CSS, and vanilla JS form handling.' }],
      databaseSchemaHighlights: ['Inquiries: id, guestName, email, phone, checkIn, checkOut, suiteType, guestsCount, specialRequests'],
      businessLogicHighlights: ['Client-side date validation ensuring check-out is strictly after check-in.'],
      challengesAndSolutions: [{ challenge: 'Ensuring fast page speeds on variable mobile data networks.', solution: 'Implemented responsive srcset image sizing and deferred non-critical assets.' }],
      whatLearned: ['Mobile-first layout precision and conversion-focused UX copywriting.'],
      futureRoadmap: ['Online payment gateway integration for automated booking deposits.']
    }
  },
  {
    id: 'algo-suite',
    slug: 'academic-algorithms-software-suite',
    title: 'Academic Java & Python Algorithms Suite',
    subtitle: 'Data Structures, Graph Traversals & Computational Logic',
    tagline: 'Comprehensive repository of academic computer science implementations, algorithm benchmarking, and data structure mechanics.',
    category: 'Academic & Systems',
    secondaryCategories: ['Backend & APIs'],
    status: 'Academic Project',
    isFeatured: false,
    role: 'Computer Science Student',
    technologies: ['Java', 'Python', 'Algorithms', 'Data Structures', 'OOP'],
    githubUrl: 'https://github.com/scondlythorp/cs-algorithms-suite',
    overview: 'A curated collection of academic programming coursework demonstrating proficiency in object-oriented design, algorithmic complexity (Big-O analysis), graph traversals, and custom data structure implementations.',
    metricsOrScope: 'Covers linked lists, binary trees, sorting algorithms, recursion, and object-oriented design patterns.',
    caseStudy: {
      summary: 'Demonstrates theoretical computer science foundations through tested implementations of foundational data structures and algorithms in Java and Python.',
      problem: 'Bridging the gap between conceptual algorithmic theory and robust, bug-free software implementation.',
      problemImportance: 'Strong fundamentals in computational complexity and memory modeling are critical for high-performance backend engineering.',
      solution: 'Developed thoroughly documented implementations of sorting algorithms, tree traversals, hash maps, and recursion benchmarks with unit tests.',
      keyFeatures: ['Custom LinkedList and BinarySearchTree classes', 'Sorting benchmarks (QuickSort, MergeSort, HeapSort)', 'Recursive problem solvers'],
      architecture: [{ layer: 'Backend', details: 'Java 17 / Python 3 source modules with unit test assertions.' }],
      databaseSchemaHighlights: ['N/A - Computational in-memory data structures.'],
      businessLogicHighlights: ['Big-O complexity comparisons between iterative and recursive solutions.'],
      challengesAndSolutions: [{ challenge: 'Preventing stack overflow in deep tree recursions.', solution: 'Converted recursive traversal routines to iterative implementations using explicit stack data structures.' }],
      whatLearned: ['Deep understanding of memory allocation, pointers/references, and algorithmic efficiency.'],
      futureRoadmap: ['Adding graph shortest-path algorithms (Dijkstra, A*) with interactive visualizers.']
    }
  }
];

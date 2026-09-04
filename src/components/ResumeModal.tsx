import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Mail, 
  Github, 
  MapPin, 
  Phone,
  Globe,
  Languages,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  Compass,
  Download
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'resume' | 'cv'>('resume');
  const [copied, setCopied] = useState(false);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('resume-modal-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('resume-modal-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('resume-modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `MODOU LAMIN THORP
Software Developer | Backend Systems, REST APIs & Web Development
Banjul, The Gambia (UTC+0) | Phone: +220 874168300 | Email: modoulaminthorp4@gmail.com | GitHub: https://github.com/scondlythorp

PROFESSIONAL SUMMARY
Early-career Software Developer pursuing a Bachelor's Degree in Computer Science at Civil Service University (CSU). Hands-on experience designing and developing database-driven applications, RESTful APIs, and relational schemas with Node.js, Express.js, and PostgreSQL. Proven ability to translate complex real-world workflows into reliable systems—from FEFO pharmaceutical inventory tracking and academic grade-locking audits to responsive corporate web architectures.

EDUCATION
Civil Service University (CSU) — The Gambia
Bachelor's Degree in Computer Science | In Progress (July 2024 — Expected September 2026)
Relevant Coursework: Database Systems & Normalization, Java, Python, JavaScript, Web Development, Computer Networking, Systems Analysis & Design.

TECHNICAL SKILLS
- Programming Languages: JavaScript (ES6+), Java, Python, SQL
- Frontend Development: HTML5, CSS3, Vanilla JavaScript, React, Tailwind CSS, Responsive Web Design
- Backend & API Development: Node.js, Express.js, REST API Architecture, JWT Authentication, bcrypt, Zod Schema Validation, dotenv
- Database & Data Management: PostgreSQL, Prisma ORM, MySQL, MongoDB, pgAdmin, MySQL Workbench, Data Modeling
- Tools & IT Support: Git, GitHub, Visual Studio Code, Postman API Testing, PyCharm, Linux CLI, Cisco Packet Tracer
- Core Competencies: Database Design, API Architecture, Role-Based Access Control, Authentication Workflows, Technical Troubleshooting, Software Documentation

SELECTED ENGINEERING PROJECTS

1. Gambia Education Suite (GES) — Flagship School Management SaaS Prototype
- Designed multi-tenant academic management architecture supporting role-based access for Principals, Teachers, Students, and Exam Officers.
- Engineered PostgreSQL schema migrations with Prisma ORM enforcing composite unique constraints on academic term grade records.
- Implemented an atomic grade-locking workflow preventing unauthorized score adjustments once terminal examinations close.

2. Pharmacy Sales & Inventory Management System (PSIS) — Inventory & POS
- Engineered an inventory control and POS backend enforcing FEFO (First-Expired, First-Out) stock rotation to eliminate medicine expiration waste.
- Built atomic checkout transactions using Prisma $transaction API to prevent race conditions during concurrent sales.
- Implemented automated low-stock thresholds and 30/60/90-day expiry query alerts with Zod schema validation.

3. Techworld — Responsive Technology Services Website
- Designed and developed a responsive static website for a technology services company based in The Gambia.
- Implemented structured pages for company information, services, contact details, and reusable page templates using HTML and CSS.
- Built with a lightweight architecture requiring no build process or external dependencies.

4. PASSO Transit Fare Calculator & Matrix API — Backend API
- Designed a deterministic route fare computation API modeled after Greater Banjul municipal transit corridors and tariffs.
- Structured corridor segment topologies into connected stage graphs with automated Postman integration test suites.

LANGUAGES
- English: Fluent (Professional & Academic)
- Wolof: Fluent (Native Proficiency)
- Mandinka: Fluent (Native Proficiency)

COMMUNITY & LEADERSHIP
Information Technology Students Association (ITSA) — Member & Contributor (2024 — Present)
- Contributed to student technology initiatives and event registration prototype; active participant in peer code reviews and database study sessions.

References and project portfolio available upon request`;

  const plainTextCv = `MODOU LAMIN THORP
Junior Web Developer | Backend/API Development | Junior Backend Developer
Banjul, The Gambia | modoulaminthorp4@gmail.com | 874168300 | https://github.com/scondlythorp
 
PROFESSIONAL PROFILE
Practical Computer Science student pursuing a Bachelor's Degree with demonstrated hands-on experience building database-driven applications, REST APIs, and web systems. Proficient in JavaScript and Node.js backend development with working knowledge of PostgreSQL database design and management. Strong technical foundation in software development principles, authentication workflows, and system architecture. Proven ability to translate requirements into functional applications. Seeking junior software development, web development, or technical support positions where practical problem-solving and technical knowledge create immediate value.
Fluent in three languages with strong communication skills. Active in university technology community. Committed to continuous learning and professional development in software engineering and IT support.
 
TECHNICAL SKILLS
Programming Languages: JavaScript, Java, Python, SQL
Frontend Development: HTML5, CSS3, Vanilla JavaScript, responsive design
Backend & API Development: Node.js, Express.js, REST API design and implementation, JWT authentication, bcrypt password hashing, Zod validation, dotenv configuration management
Database & Data Management: PostgreSQL, Prisma ORM, MySQL, MongoDB, SQL query optimization, database design, pgAdmin, MySQL Workbench, data modeling
Development & Productivity Tools: Git version control, GitHub repositories, Visual Studio Code, Postman API testing, PyCharm IDE, Cisco Packet Tracer
Infrastructure & Support: Basic networking fundamentals, TCP/IP, IP addressing, LAN configuration, connectivity troubleshooting, technical documentation
Core Competencies: Database design and architecture, API development, authentication and authorization systems, authentication workflows, role-based access control, technical problem-solving, application troubleshooting, software support, system configuration
 
SELECTED PROJECTS
Pharmacy Management System | Academic Project
Technologies: Node.js, Express.js, PostgreSQL, Prisma ORM, JavaScript, JWT, bcrypt, Zod
Designed and developed a comprehensive database-driven pharmacy management system with multiple integrated modules. Implemented secure authentication with JWT and role-based access control for different user types. Built complete inventory management including medicine tracking, batch management, supplier relationships, and low-stock monitoring with expiry date tracking. Developed purchasing and sales workflows with customer management and prescription handling. Created reporting features, printable receipt generation, and CSV data export functionality. Designed entire database schema for relational data integrity.

Restaurant & Cloud Kitchen Ordering Platform | Full-Stack Project
Technologies: Node.js, Express.js, JavaScript, HTML/CSS, Database technologies, REST APIs
Developed a multi-tenant restaurant platform supporting multiple restaurant operations through a unified system. Implemented customer-facing ordering interface with shopping cart and order management. Built complete order lifecycle management from placement through fulfilment. Integrated payment workflow for transaction processing.
Created administrative dashboards for restaurant management and analytics.
Architected scalable backend APIs supporting business operations and customer-facing features.

Techworld — Responsive Technology Services Website
Technologies: HTML5, CSS3, Responsive Design
Designed and developed a responsive static website for a technology services company based in The Gambia. Implemented structured pages for company information, services, contact details, and reusable page templates using HTML and CSS. Built with a lightweight architecture requiring no build process or external dependencies.

Student Attendance Management System | Database Application
Technologies: Database-driven development
Created an attendance tracking system serving educational institution requirements. Built robust data storage architecture for student attendance records. Implemented data retrieval and reporting functionality enabling instructors to review attendance information and generate insights.

Passo Fare Calculator & API | Backend Project
Technologies: Node.js, JavaScript, API development
Developed a transportation fare calculation backend API with practical transportation industry logic. Built scalable API infrastructure supporting multiple client integrations and calculation requests.

ITSA Event Registration Platform | Student Organization Project
Technologies: Web development, HTML/CSS, JavaScript, database integration
Contributed to web platform for Information Technology Students Association supporting event management, participant registration, and competition registration workflows. Platform features schedule management, speaker and sponsor information, team management, and leaderboard with results tracking.
 
EDUCATION
Bachelor's Degree in Computer Science | In Progress (2024–2026)
Civil Service University (CSU), The Gambia
Relevant Coursework & Technical Areas: Java, JavaScript, Web Development, Database Systems, Networking, Python, SQL, Software Development
 
UNIVERSITY & PROFESSIONAL ACTIVITIES
Information Technology Students Association (ITSA) Member
- Active participant in student technology initiatives
- Contributor to digital projects and technology-focused student events
- Engagement with university technology community and peer collaboration

LANGUAGES
English — Fluent (professional and academic)
Wolof — Fluent (native proficiency)
Mandinka — Fluent (native proficiency)
 
CAREER INTERESTS
Seeking opportunities in:
- Junior Web Development (frontend and backend)
- Junior Software Development
- Backend Development & API Development
- Database support and optimization
- Application Support & Technical Support
- IT Support & Help Desk roles
- Graduate trainee and internship programs
- Remote and international positions
Interested in roles with organizations prioritizing innovation, technical excellence, and professional development of junior technical talent.
 
Full portfolio and project references available upon request`;

  const handleDownloadTxt = () => {
    const textToDownload = viewMode === 'resume' ? plainTextResume : plainTextCv;
    const filename = viewMode === 'resume' ? 'Modou_Lamin_Thorp_Resume.txt' : 'Modou_Lamin_Thorp_CV.txt';
    const blob = new Blob([textToDownload], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloadToast(`Downloaded ${filename}`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const handleDownloadHtml = () => {
    const isResume = viewMode === 'resume';
    const filename = isResume ? 'Modou_Lamin_Thorp_Resume.html' : 'Modou_Lamin_Thorp_CV.html';
    const docTitle = isResume ? 'Modou Lamin Thorp — Resume' : 'Modou Lamin Thorp — Curriculum Vitae (CV)';
    const plainContent = isResume ? plainTextResume : plainTextCv;

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${docTitle}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1c1917;
      background: #f5f5f4;
      padding: 30px 16px;
      line-height: 1.55;
    }
    .page-container {
      max-width: 820px;
      margin: 0 auto;
      background: #ffffff;
      padding: 40px 48px;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      border: 1px solid #e7e5e4;
    }
    .print-bar {
      max-width: 820px;
      margin: 0 auto 18px auto;
      background: #1c1917;
      color: #f5f5f4;
      padding: 12px 20px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .btn {
      background: #047857;
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      border-radius: 5px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn:hover { background: #065f46; }
    pre {
      white-space: pre-wrap;
      font-family: inherit;
      font-size: 13px;
      line-height: 1.65;
      color: #292524;
    }
    @media print {
      body { background: #ffffff !important; padding: 0 !important; color: #000000 !important; }
      .page-container { box-shadow: none !important; border: none !important; padding: 0 !important; max-width: 100% !important; }
      .print-bar { display: none !important; }
      @page { margin: 12mm 15mm; }
    }
  </style>
</head>
<body>
  <div class="print-bar">
    <div><strong>Modou Lamin Thorp</strong> — ${docTitle}</div>
    <button class="btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>
  <div class="page-container">
    <pre>${plainContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloadToast(`Downloaded ${filename}`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const handleCopyText = () => {
    const textToCopy = viewMode === 'resume' ? plainTextResume : plainTextCv;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="resume-modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex justify-center p-2 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="resume-modal-card relative bg-white text-stone-900 rounded-2xl w-full max-w-4xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-stone-900 text-stone-100 p-4 sm:px-8 border-b border-stone-800 flex items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-emerald-400 shrink-0" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {viewMode === 'resume' ? 'Recruiter Resume (1-Page Target)' : 'Comprehensive Curriculum Vitae (CV)'}
              </h2>
              <p className="text-xs text-stone-400">
                Verified ATS-Formatted Technical Profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors"
              title="Print or Save as PDF via browser print dialogue"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
              title="Download ATS optimized plain text file"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download .TXT</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
              title={viewMode === 'resume' ? 'Copy plain text for ATS job portals' : 'Copy comprehensive CV plain text'}
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span className="hidden sm:inline">
                {copied 
                  ? (viewMode === 'resume' ? 'Copied Resume!' : 'Copied CV!') 
                  : 'Copy Text'}
              </span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume view"
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* View Mode Switcher + Action Bar */}
        <div className="bg-stone-100 px-4 sm:px-8 py-2.5 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('resume')}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                viewMode === 'resume'
                  ? 'bg-white text-emerald-900 shadow-sm border border-stone-300'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              1-Page Executive Resume
            </button>
            <button
              onClick={() => setViewMode('cv')}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                viewMode === 'cv'
                  ? 'bg-white text-emerald-900 shadow-sm border border-stone-300'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Comprehensive Curriculum Vitae (CV)
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1 text-stone-700 hover:text-emerald-800 font-medium px-2 py-1 rounded hover:bg-stone-200/80 transition-colors"
              title="Download clean plain text"
            >
              <Download size={13} className="text-stone-500" />
              <span>Download ATS (.txt)</span>
            </button>
            <span className="text-stone-300 hidden sm:inline">•</span>
            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1 text-stone-700 hover:text-emerald-800 font-medium px-2 py-1 rounded hover:bg-stone-200/80 transition-colors"
              title="Download standalone HTML document"
            >
              <FileText size={13} className="text-stone-500" />
              <span>Download (.html)</span>
            </button>
          </div>
        </div>

        {/* Floating Download Notification */}
        {downloadToast && (
          <div className="absolute bottom-16 right-6 z-20 bg-stone-900 text-white font-medium px-3.5 py-2 rounded-lg shadow-xl text-xs flex items-center gap-2 border border-stone-700 animate-in fade-in no-print">
            <Check size={14} className="text-emerald-400" />
            <span>{downloadToast}</span>
          </div>
        )}

        {/* Printable & Readable Document Body */}
        <div className="resume-modal-body overflow-y-auto p-6 sm:p-10 bg-white text-stone-900 text-xs sm:text-sm font-sans space-y-6 flex-1">
          {viewMode === 'resume' ? (
            /* ------------------------------------------------------------- */
            /* 1-PAGE EXECUTIVE RESUME (Targeted, High-Impact Engineering)  */
            /* ------------------------------------------------------------- */
            <>
              {/* Document Header */}
              <div className="border-b-2 border-stone-900 pb-4 space-y-1.5 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight uppercase">
                  Modou Lamin Thorp
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-emerald-800">
                  Software Developer | Backend Systems, REST APIs & Web Development
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-stone-600 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-emerald-700" />
                    Banjul, The Gambia (UTC+0)
                  </span>
                  <span>•</span>
                  <a href="tel:874168300" className="flex items-center gap-1 text-stone-800 font-medium hover:underline">
                    <Phone size={13} className="text-emerald-700" />
                    +220 874168300
                  </a>
                  <span>•</span>
                  <a href="mailto:modoulaminthorp4@gmail.com" className="flex items-center gap-1 text-stone-800 font-medium hover:underline">
                    <Mail size={13} className="text-emerald-700" />
                    modoulaminthorp4@gmail.com
                  </a>
                  <span>•</span>
                  <a href="https://github.com/scondlythorp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-stone-800 font-medium hover:underline">
                    <Github size={13} className="text-emerald-700" />
                    github.com/scondlythorp
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <section className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Professional Summary
                </h2>
                <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
                  Early-career Software Developer pursuing a Bachelor's Degree in Computer Science at Civil Service University (CSU). Hands-on experience designing and developing database-driven applications, RESTful APIs, and relational schemas with Node.js, Express.js, and PostgreSQL. Proven ability to translate complex real-world workflows into reliable systems—from FEFO pharmaceutical inventory tracking and academic grade-locking audits to responsive corporate web architectures. Dedicated to clean code, atomic transactions, and scalable web architectures.
                </p>
              </section>

              {/* Technical Skills */}
              <section className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Technical Skills
                </h2>
                <div className="space-y-1 text-xs sm:text-sm text-stone-700">
                  <p><strong className="font-semibold text-stone-900">Programming Languages:</strong> JavaScript (ES6+), Java, Python, SQL.</p>
                  <p><strong className="font-semibold text-stone-900">Backend & API Development:</strong> Node.js, Express.js, REST API Architecture, JWT Authentication, bcrypt, Zod Schema Validation, dotenv.</p>
                  <p><strong className="font-semibold text-stone-900">Database & Data Management:</strong> PostgreSQL, Prisma ORM, MySQL, MongoDB, Relational Normalization (1NF-3NF), pgAdmin, MySQL Workbench, Data Modeling.</p>
                  <p><strong className="font-semibold text-stone-900">Frontend & Web:</strong> HTML5, CSS3, Vanilla JavaScript, React, Tailwind CSS, Responsive Web Design.</p>
                  <p><strong className="font-semibold text-stone-900">Tools & IT Support:</strong> Git, GitHub, Visual Studio Code, Postman API Testing, PyCharm, Linux/Bash CLI, Cisco Packet Tracer (Networking).</p>
                  <p><strong className="font-semibold text-stone-900">Core Competencies:</strong> Database Design, API Architecture, Role-Based Access Control (RBAC), Authentication Workflows, Technical Problem-Solving, Software Support.</p>
                </div>
              </section>

              {/* Selected Engineering Projects */}
              <section className="space-y-3">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Selected Technical Projects
                </h2>

                {/* Project 1 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Gambia Education Suite (GES) — Flagship SaaS Prototype
                    </h3>
                    <span className="text-[11px] font-mono text-stone-500">Node.js, Express, PostgreSQL, Prisma, JWT</span>
                  </div>
                  <p className="text-[11px] font-medium text-emerald-800">
                    Lead Architect & Full-Stack Developer
                  </p>
                  <ul className="list-disc list-inside text-stone-600 text-xs space-y-0.5 pl-1">
                    <li>Designed multi-tenant academic management architecture supporting role-based access for Principals, Teachers, Students, and Exam Officers.</li>
                    <li>Engineered PostgreSQL schema migrations with Prisma ORM enforcing composite unique constraints on academic term grade records.</li>
                    <li>Implemented an atomic grade-locking workflow preventing unauthorized score adjustments once terminal examinations close.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Pharmacy Sales & Inventory Management System (PSIS)
                    </h3>
                    <span className="text-[11px] font-mono text-stone-500">JavaScript, Node.js, Express, PostgreSQL, Prisma, Zod</span>
                  </div>
                  <p className="text-[11px] font-medium text-emerald-800">
                    Backend & Database Engineer
                  </p>
                  <ul className="list-disc list-inside text-stone-600 text-xs space-y-0.5 pl-1">
                    <li>Built a pharmaceutical inventory engine implementing FEFO (First-Expired, First-Out) stock rotation to prevent drug expiration waste.</li>
                    <li>Utilized Prisma $transaction API to execute atomic database commits, eliminating inventory race conditions during concurrent checkouts.</li>
                    <li>Configured automated low-stock and 30/60/90-day expiry query alerts with strict Zod schema validation.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Techworld — Responsive Technology Services Website
                    </h3>
                    <span className="text-[11px] font-mono text-stone-500">HTML5, CSS3, Responsive Design</span>
                  </div>
                  <p className="text-[11px] font-medium text-emerald-800">
                    Web Developer & UI Designer
                  </p>
                  <ul className="list-disc list-inside text-stone-600 text-xs space-y-0.5 pl-1">
                    <li>Designed and developed a responsive static website for a technology services company based in The Gambia.</li>
                    <li>Implemented structured pages for company information, services, contact details, and reusable page templates using HTML and CSS.</li>
                    <li>Built with a lightweight architecture requiring no build process or external dependencies.</li>
                  </ul>
                </div>

                {/* Project 4 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      PASSO Transit Fare Calculator & Distance Matrix API
                    </h3>
                    <span className="text-[11px] font-mono text-stone-500">Node.js, Express, REST API, Postman</span>
                  </div>
                  <p className="text-[11px] font-medium text-emerald-800">
                    API Developer
                  </p>
                  <ul className="list-disc list-inside text-stone-600 text-xs space-y-0.5 pl-1">
                    <li>Engineered deterministic public transit fare computation service modeled on Greater Banjul municipal transit corridors and tariffs.</li>
                    <li>Authored automated Postman test suites validating route segment boundary checks and edge error conditions.</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Education
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Bachelor's Degree in Computer Science
                    </h3>
                    <p className="text-xs text-stone-700">
                      Civil Service University (CSU) — The Gambia
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500">
                    July 2024 — Expected September 2026
                  </span>
                </div>
                <p className="text-xs text-stone-600 pt-0.5">
                  <strong className="font-semibold text-stone-800">Relevant Coursework:</strong> Database Systems, Data Structures & Algorithms, Object-Oriented Programming (Java), Computer Networking, Systems Analysis & Design.
                </p>
              </section>

              {/* Languages */}
              <section className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Languages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-700 pt-1">
                  <div className="p-2 rounded bg-stone-50 border border-stone-200">
                    <span className="font-semibold text-stone-900 block">English</span>
                    <span className="text-[11px] text-stone-500">Fluent (Academic & Prof.)</span>
                  </div>
                  <div className="p-2 rounded bg-stone-50 border border-stone-200">
                    <span className="font-semibold text-stone-900 block">Wolof</span>
                    <span className="text-[11px] text-stone-500">Fluent (Native)</span>
                  </div>
                  <div className="p-2 rounded bg-stone-50 border border-stone-200">
                    <span className="font-semibold text-stone-900 block">Mandinka</span>
                    <span className="text-[11px] text-stone-500">Fluent (Native)</span>
                  </div>
                </div>
              </section>

              {/* Activities & Community */}
              <section className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Leadership & Technical Activities
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                    Information Technology Students Association (ITSA) — Member & Contributor
                  </h3>
                  <span className="text-[11px] font-mono text-stone-500">2024 — Present</span>
                </div>
                <p className="text-xs text-stone-600">
                  Developed workshop registration portal prototype; actively contribute to peer code review sessions and university database study groups.
                </p>
              </section>
            </>
          ) : (
            /* ------------------------------------------------------------- */
            /* COMPREHENSIVE CURRICULUM VITAE (CV) (Dedicated Academic/Career) */
            /* ------------------------------------------------------------- */
            <>
              {/* Document Header */}
              <div className="border-b-2 border-stone-900 pb-4 space-y-1.5 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight uppercase">
                  Modou Lamin Thorp
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-emerald-800">
                  Junior Web Developer | Backend/API Development | Junior Backend Developer
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-stone-600 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-emerald-700" />
                    Banjul, The Gambia
                  </span>
                  <span>•</span>
                  <a href="tel:874168300" className="flex items-center gap-1 text-stone-800 font-medium hover:underline">
                    <Phone size={13} className="text-emerald-700" />
                    874168300
                  </a>
                  <span>•</span>
                  <a href="mailto:modoulaminthorp4@gmail.com" className="flex items-center gap-1 text-stone-800 font-medium hover:underline">
                    <Mail size={13} className="text-emerald-700" />
                    modoulaminthorp4@gmail.com
                  </a>
                  <span>•</span>
                  <a href="https://github.com/scondlythorp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-stone-800 font-medium hover:underline">
                    <Github size={13} className="text-emerald-700" />
                    https://github.com/scondlythorp
                  </a>
                </div>
              </div>

              {/* Professional Profile */}
              <section className="space-y-2">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Professional Profile
                </h2>
                <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
                  Practical Computer Science student pursuing a Bachelor's Degree with demonstrated hands-on experience building database-driven applications, REST APIs, and web systems. Proficient in JavaScript and Node.js backend development with working knowledge of PostgreSQL database design and management. Strong technical foundation in software development principles, authentication workflows, and system architecture. Proven ability to translate requirements into functional applications. Seeking junior software development, web development, or technical support positions where practical problem-solving and technical knowledge create immediate value.
                </p>
                <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
                  Fluent in three languages with strong communication skills. Active in university technology community. Committed to continuous learning and professional development in software engineering and IT support.
                </p>
              </section>

              {/* Technical Skills */}
              <section className="space-y-2">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Technical Skills
                </h2>
                <div className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  <p><strong className="font-semibold text-stone-900">Programming Languages:</strong> JavaScript, Java, Python, SQL</p>
                  <p><strong className="font-semibold text-stone-900">Frontend Development:</strong> HTML5, CSS3, Vanilla JavaScript, responsive design</p>
                  <p><strong className="font-semibold text-stone-900">Backend & API Development:</strong> Node.js, Express.js, REST API design and implementation, JWT authentication, bcrypt password hashing, Zod validation, dotenv configuration management</p>
                  <p><strong className="font-semibold text-stone-900">Database & Data Management:</strong> PostgreSQL, Prisma ORM, MySQL, MongoDB, SQL query optimization, database design, pgAdmin, MySQL Workbench, data modeling</p>
                  <p><strong className="font-semibold text-stone-900">Development & Productivity Tools:</strong> Git version control, GitHub repositories, Visual Studio Code, Postman API testing, PyCharm IDE, Cisco Packet Tracer</p>
                  <p><strong className="font-semibold text-stone-900">Infrastructure & Support:</strong> Basic networking fundamentals, TCP/IP, IP addressing, LAN configuration, connectivity troubleshooting, technical documentation</p>
                  <p><strong className="font-semibold text-stone-900">Core Competencies:</strong> Database design and architecture, API development, authentication and authorization systems, authentication workflows, role-based access control, technical problem-solving, application troubleshooting, software support, system configuration</p>
                </div>
              </section>

              {/* Selected Projects */}
              <section className="space-y-3.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Selected Projects
                </h2>

                {/* Project 1 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Pharmacy Management System | Academic Project
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-emerald-800">
                    Technologies: Node.js, Express.js, PostgreSQL, Prisma ORM, JavaScript, JWT, bcrypt, Zod
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Designed and developed a comprehensive database-driven pharmacy management system with multiple integrated modules. Implemented secure authentication with JWT and role-based access control for different user types. Built complete inventory management including medicine tracking, batch management, supplier relationships, and low-stock monitoring with expiry date tracking. Developed purchasing and sales workflows with customer management and prescription handling. Created reporting features, printable receipt generation, and CSV data export functionality. Designed entire database schema for relational data integrity.
                  </p>
                </div>

                {/* Project 2 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Restaurant & Cloud Kitchen Ordering Platform | Full-Stack Project
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-emerald-800">
                    Technologies: Node.js, Express.js, JavaScript, HTML/CSS, Database technologies, REST APIs
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Developed a multi-tenant restaurant platform supporting multiple restaurant operations through a unified system. Implemented customer-facing ordering interface with shopping cart and order management. Built complete order lifecycle management from placement through fulfilment. Integrated payment workflow for transaction processing. Created administrative dashboards for restaurant management and analytics. Architected scalable backend APIs supporting business operations and customer-facing features.
                  </p>
                </div>

                {/* Project 3 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Techworld — Responsive Technology Services Website
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-emerald-800">
                    Technologies: HTML5, CSS3, Responsive Design
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Designed and developed a responsive static website for a technology services company based in The Gambia. Implemented structured pages for company information, services, contact details, and reusable page templates using HTML and CSS. Built with a lightweight architecture requiring no build process or external dependencies.
                  </p>
                </div>

                {/* Project 4 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Student Attendance Management System | Database Application
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-emerald-800">
                    Technologies: Database-driven development, SQL, PostgreSQL
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Created an attendance tracking system serving educational institution requirements. Built robust data storage architecture for student attendance records. Implemented data retrieval and reporting functionality enabling instructors to review attendance information and generate insights.
                  </p>
                </div>

                {/* Project 5 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Passo Fare Calculator & API | Backend Project
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-emerald-800">
                    Technologies: Node.js, JavaScript, API development
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Developed a transportation fare calculation backend API with practical transportation industry logic. Built scalable API infrastructure supporting multiple client integrations and calculation requests.
                  </p>
                </div>

                {/* Project 6 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      ITSA Event Registration Platform | Student Organization Project
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-emerald-800">
                    Technologies: Web development, HTML/CSS, JavaScript, database integration
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Contributed to web platform for Information Technology Students Association supporting event management, participant registration, and competition registration workflows. Platform features schedule management, speaker and sponsor information, team management, and leaderboard with results tracking.
                  </p>
                </div>
              </section>

              {/* Education */}
              <section className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Education
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                      Bachelor's Degree in Computer Science | In Progress (2024–2026)
                    </h3>
                    <p className="text-xs text-stone-700">
                      Civil Service University (CSU), The Gambia
                    </p>
                  </div>
                </div>
                <p className="text-xs text-stone-600 pt-0.5">
                  <strong className="font-semibold text-stone-800">Relevant Coursework & Technical Areas:</strong> Java, JavaScript, Web Development, Database Systems, Networking, Python, SQL, Software Development.
                </p>
              </section>

              {/* University & Professional Activities */}
              <section className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  University & Professional Activities
                </h2>
                <h3 className="font-bold text-stone-900 text-xs sm:text-sm">
                  Information Technology Students Association (ITSA) Member
                </h3>
                <ul className="list-disc list-inside text-stone-600 text-xs space-y-0.5 pl-1">
                  <li>Active participant in student technology initiatives</li>
                  <li>Contributor to digital projects and technology-focused student events</li>
                  <li>Engagement with university technology community and peer collaboration</li>
                </ul>
              </section>

              {/* Languages */}
              <section className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Languages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-700 pt-1">
                  <div className="p-2 rounded bg-stone-50 border border-stone-200">
                    <span className="font-semibold text-stone-900 block">English</span>
                    <span className="text-[11px] text-stone-500">Fluent (Prof. & Academic)</span>
                  </div>
                  <div className="p-2 rounded bg-stone-50 border border-stone-200">
                    <span className="font-semibold text-stone-900 block">Wolof</span>
                    <span className="text-[11px] text-stone-500">Fluent (Native Proficiency)</span>
                  </div>
                  <div className="p-2 rounded bg-stone-50 border border-stone-200">
                    <span className="font-semibold text-stone-900 block">Mandinka</span>
                    <span className="text-[11px] text-stone-500">Fluent (Native Proficiency)</span>
                  </div>
                </div>
              </section>

              {/* Career Interests */}
              <section className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-0.5">
                  Career Interests
                </h2>
                <div className="space-y-1 text-xs text-stone-700">
                  <p className="font-medium text-stone-900">Seeking opportunities in:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-stone-600 pl-1">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Junior Web Development (frontend and backend)
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Junior Software Development
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Backend Development & API Development
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Database support and optimization
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Application Support & Technical Support
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      IT Support & Help Desk roles
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Graduate trainee and internship programs
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Remote and international positions
                    </li>
                  </ul>
                  <p className="text-[11px] text-stone-500 pt-1 italic">
                    Interested in roles with organizations prioritizing innovation, technical excellence, and professional development of junior technical talent.
                  </p>
                </div>
              </section>

              {/* CV Note */}
              <div className="pt-2 text-center border-t border-stone-200">
                <p className="text-xs text-stone-500 font-medium">
                  Full portfolio and project references available upon request
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer actions */}
        <div className="bg-stone-50 border-t border-stone-200 p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Verified technical profile & credentials</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 shadow-sm transition-colors"
              title="Download clean plain text file"
            >
              <Download size={13} />
              <span>Download .TXT</span>
            </button>
            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 shadow-sm transition-colors"
              title="Download styled HTML document"
            >
              <FileText size={13} />
              <span>Download .HTML</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

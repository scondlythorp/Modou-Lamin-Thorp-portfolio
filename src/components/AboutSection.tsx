import React from 'react';
import { BookOpen, Layers, Terminal, Target, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 space-y-8 border-t border-stone-200">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
          Professional Background
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          About Modou Lamin Thorp
        </h2>
        <p className="text-sm text-stone-600 max-w-2xl">
          An early-career software engineer with an academic foundation in computer science and a practical dedication to backend reliability and database architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Narrative Column */}
        <div className="lg:col-span-2 space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            I am currently studying for a <strong className="text-stone-900 font-semibold">Bachelor's Degree in Computer Science at Civil Service University (CSU)</strong> in The Gambia (commenced July 2024, with expected completion in September 2026). My approach to software development is grounded in practical utility: transforming operational friction into deterministic, auditable software systems.
          </p>

          <p>
            Rather than building superficial clones, I focus on systems with genuine domain complexity. My flagship work includes designing the <span className="font-medium text-stone-900">Gambia Education Suite</span> (a multi-role academic administration platform with grade-locking audits), modeling <span className="font-medium text-stone-900">FEFO (First-Expired, First-Out) pharmaceutical batch logic</span> to prevent medicine wastage, and engineering responsive web platforms for technology enterprises like <span className="font-medium text-stone-900">Techworld</span>.
          </p>

          <p>
            My technical focus centers on <strong className="text-stone-900 font-semibold">Node.js, Express.js, and relational database design with PostgreSQL and Prisma ORM</strong>. I believe that good backend engineering starts with clean schemas, defensive input validation (Zod), atomic transaction boundaries, and predictable RESTful API contracts.
          </p>

          <div className="pt-2 p-4 rounded-xl bg-stone-100 border border-stone-200/80 text-stone-800 text-sm">
            <h3 className="font-semibold text-stone-900 flex items-center gap-2 mb-1">
              <Target size={16} className="text-emerald-700" />
              What I Am Seeking:
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              I am seeking junior software developer, backend engineer, web developer, database support, or IT/application support roles (remote globally, or on-site/hybrid in The Gambia and West Africa). I am eager to contribute clean code, learn from experienced senior mentors, and solve demanding technical challenges.
            </p>
          </div>
        </div>

        {/* Strategic Profile Sidebar Details */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <BookOpen size={14} className="text-emerald-700" />
              Education & Academics
            </h3>
            <div>
              <h4 className="text-sm font-semibold text-stone-900">Civil Service University (CSU)</h4>
              <p className="text-xs text-emerald-800 font-medium mt-0.5">Bachelor's Degree in Computer Science</p>
              <p className="text-xs text-stone-500 mt-1">July 2024 — Sept 2026 (In Progress)</p>
            </div>
            <div className="pt-3 border-t border-stone-100 text-xs text-stone-600 space-y-1">
              <p className="font-medium text-stone-800">Core Coursework:</p>
              <ul className="list-disc list-inside text-stone-600 space-y-0.5">
                <li>Relational Databases & SQL</li>
                <li>Data Structures & Algorithms</li>
                <li>Object-Oriented Programming (Java)</li>
                <li>Computer Networking & Systems</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <Layers size={14} className="text-emerald-700" />
              Engineering Values
            </h3>
            <ul className="text-xs text-stone-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1 shrink-0" />
                <span><strong className="text-stone-800 font-medium">Schema First:</strong> Thinking in normalized tables, constraints, and relational integrity before writing endpoints.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1 shrink-0" />
                <span><strong className="text-stone-800 font-medium">Defensive APIs:</strong> Strict schema validation with Zod and clean HTTP error status codes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1 shrink-0" />
                <span><strong className="text-stone-800 font-medium">Honest Engineering:</strong> Transparent about project maturity, constraints, and architecture trade-offs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Github, 
  MapPin, 
  Send, 
  Clock, 
  ShieldCheck,
  AlertCircle,
  Phone,
  FileText,
  Download
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const emailAddress = 'modoulaminthorp4@gmail.com';
  const phoneNumber = '+220 874168300';
  const githubUrl = 'https://github.com/scondlythorp';

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Technical Role',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a brief message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Prepare clean mailto URL as reliable fallback
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.subject}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    // Trigger mail client safely
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-10 space-y-8 border-t border-stone-200">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
          Get in Touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Direct Contact & Availability
        </h2>
        <p className="text-sm text-stone-600 max-w-2xl">
          Interested in discussing a software role, technical internship, backend project, or code review? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Information Column */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <Mail size={15} className="text-emerald-700" />
              Direct Contact
            </h3>

            <div className="space-y-3">
              <div>
                <span className="text-[11px] text-stone-500 font-medium block">Email:</span>
                <p className="font-mono text-xs sm:text-sm text-stone-900 font-semibold break-all">
                  {emailAddress}
                </p>
              </div>

              <div>
                <span className="text-[11px] text-stone-500 font-medium block">Phone / Mobile:</span>
                <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="font-mono text-xs sm:text-sm text-emerald-800 font-semibold hover:underline flex items-center gap-1">
                  <Phone size={13} className="text-emerald-700" />
                  {phoneNumber}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
                >
                  {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
                >
                  <Send size={13} />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <MapPin size={15} className="text-emerald-700" />
              Location & Work Preference
            </h3>
            <div className="text-xs text-stone-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Location:</span>
                <span className="font-semibold text-stone-900">Banjul, The Gambia 🇬🇲</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Time Zone:</span>
                <span className="font-mono font-medium text-stone-900">UTC / GMT (UTC+0)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Work Model:</span>
                <span className="font-semibold text-emerald-800">Remote / Hybrid / On-site</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Notice Period:</span>
                <span className="font-semibold text-stone-900">Immediate / Flexible</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <Github size={15} className="text-emerald-700" />
              Public Code Repository
            </h3>
            <p className="text-xs text-stone-600">
              Explore source code, commit history, and schema models across all published projects:
            </p>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
            >
              <span>https://github.com/scondlythorp</span>
            </a>
            <p className="text-[11px] text-stone-400 pt-1">
              * Note: Professional LinkedIn profile is in preparation and available upon direct request.
            </p>
          </div>

          {onOpenResume && (
            <div className="bg-emerald-50/60 rounded-xl p-5 border border-emerald-200/80 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                <FileText size={15} className="text-emerald-700" />
                Resume & Technical CV
              </h3>
              <p className="text-xs text-stone-600">
                Need an ATS-tailored resume or comprehensive CV for recruiter review or candidate tracking?
              </p>
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition-colors"
                title="View, print, save as PDF, or download Resume / CV"
              >
                <Download size={14} />
                <span>View, Print / PDF & Download</span>
              </button>
            </div>
          )}
        </div>

        {/* Right Interactive Form Column */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-stone-900">
                Send a Direct Message
              </h3>
              <p className="text-xs text-stone-500">
                Fill out the form below to immediately open an email draft with formatted details.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <Check size={20} />
                </div>
                <h4 className="text-base font-bold text-emerald-950">
                  Message Prepared!
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto">
                  Your email client has been opened with your message. If it did not open automatically, you can send an email directly to <strong className="font-mono text-stone-900">{emailAddress}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-emerald-800 hover:underline pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-xs font-semibold text-stone-700">
                      Your Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border bg-stone-50 text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 ${
                        errors.name ? 'border-rose-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-600 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-xs font-semibold text-stone-700">
                      Your Email <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border bg-stone-50 text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 ${
                        errors.email ? 'border-rose-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject / Purpose */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-xs font-semibold text-stone-700">
                    Subject / Opportunity Type
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 bg-stone-50 text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="Junior Backend Developer Role">Junior Backend Developer Role</option>
                    <option value="Junior Software Engineer / Full-Stack Role">Junior Software Engineer / Full-Stack Role</option>
                    <option value="IT / Application Support Position">IT / Application Support Position</option>
                    <option value="Database Support Opportunity">Database Support Opportunity</option>
                    <option value="Graduate Opportunity / Internship">Graduate Opportunity / Internship</option>
                    <option value="Freelance / Contract Development">Freelance / Contract Development</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-xs font-semibold text-stone-700">
                    Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the role, team, or project requirements..."
                    className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border bg-stone-50 text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 ${
                      errors.message ? 'border-rose-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 flex items-center gap-1">
                      <AlertCircle size={11} />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-stone-500 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-700" />
                    <span>No data is stored externally; triggers your email client directly.</span>
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white transition-all shadow-sm shrink-0"
                  >
                    <span>Submit & Open Email</span>
                    <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => (
  <section id="contact" className="py-8 space-y-5 border-t border-stone-200">
    <div className="space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Contact</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">Get in touch</h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-5">
      <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm space-y-5">
        <a href="mailto:modoulaminthorp4@gmail.com" className="flex items-start gap-3 text-sm text-stone-700 hover:text-emerald-800">
          <Mail size={18} className="text-emerald-700 shrink-0" />
          <span><span className="block text-xs text-stone-500">Email</span>modoulaminthorp4@gmail.com</span>
        </a>
        <a href="tel:+220868404046" className="flex items-start gap-3 text-sm text-stone-700 hover:text-emerald-800">
          <Phone size={18} className="text-emerald-700 shrink-0" />
          <span><span className="block text-xs text-stone-500">Phone</span>+220 868404046</span>
        </a>
        <p className="flex items-start gap-3 text-sm text-stone-700">
          <MapPin size={18} className="text-emerald-700 shrink-0" />
          <span><span className="block text-xs text-stone-500">Location</span>The Gambia</span>
        </p>
      </div>

      <form action="https://formsubmit.co/modoulaminthorp4@gmail.com" method="POST" className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm space-y-4">
        <input type="hidden" name="_subject" value="Portfolio contact message" />
        <input type="hidden" name="_template" value="table" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="space-y-1.5 text-sm font-medium text-stone-700">
            Your name
            <input name="name" autoComplete="name" required maxLength={100} className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm font-normal outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100" placeholder="Name" />
          </label>
          <label className="space-y-1.5 text-sm font-medium text-stone-700">
            Your email
            <input type="email" name="email" autoComplete="email" required maxLength={254} className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm font-normal outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100" placeholder="you@example.com" />
          </label>
        </div>
        <label className="block space-y-1.5 text-sm font-medium text-stone-700">
          Message
          <textarea name="message" required minLength={10} maxLength={5000} rows={5} className="w-full resize-y rounded-lg border border-stone-300 px-3 py-2.5 text-sm font-normal outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100" placeholder="How can I help?" />
        </label>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2">
          <Send size={16} /> Send message
        </button>
        <p className="text-xs text-stone-500">Messages are sent to my email. Please don’t include sensitive information.</p>
      </form>
    </div>
  </section>
);

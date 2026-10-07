import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => (
  <section id="contact" className="py-8 space-y-5 border-t border-stone-200">
    <div className="space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Contact</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">Get in touch</h2>
    </div>
    <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-5">
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
  </section>
);

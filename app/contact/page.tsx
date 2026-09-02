"use client";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="bg-[#030712] min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40 z-0" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse-slow z-0" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#FFC107]/10 rounded-full blur-2xl animate-pulse-slow z-0" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Reach out for project inquiries, partnerships, or support. Our team is ready to help you 24/7.
          </p>
        </div>
      </section>
      {/* Contact Form & Info */}
      <section className="flex-1 py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="text-green-400 text-lg font-semibold py-8 text-center">
                Thank you! We have received your message and will get back to you soon.
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                aria-label="Contact form"
              >
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="name-input">Name</label>
                  <input type="text" id="name-input" required className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30" aria-required="true" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="email-input">Email</label>
                  <input type="email" id="email-input" required className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30" aria-required="true" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="message-input">Message</label>
                  <textarea id="message-input" required rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30" aria-required="true" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#030712]">
                  Send Message
                </button>
              </form>
            )}
          </div>
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Contact Details</h3>
              <div className="text-gray-300 space-y-2">
                <div><span className="font-semibold text-white">Phone:</span> <a href="tel:+6512345678" className="text-blue-400 hover:underline">+65 1234 5678</a></div>
                <div><span className="font-semibold text-white">Email:</span> <a href="mailto:info@mubest.com" className="text-blue-400 hover:underline">info@mubest.com</a></div>
                <div><span className="font-semibold text-white">Address:</span> 123, Industrial Ave, Singapore 123456</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.123456789!2d103.851959!3d1.290270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19b123456789%3A0x123456789abcdef!2sSingapore!5e0!3m2!1sen!2ssg!4v1680000000000!5m2!1sen!2ssg"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mubest Location"
              />
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

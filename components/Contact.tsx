"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const directChannels = [
  {
    icon: "💬",
    name: "WhatsApp Direct",
    value: "+91 9106170271",
    action: "Send Message",
    href: "https://wa.me/919106170271?text=Hi%20Krishna,%20I%20reviewed%20your%20portfolio",
    color: "border-[#10B981]/40 hover:border-[#10B981]",
  },
  {
    icon: "✉️",
    name: "Direct Email",
    value: "krishnarathwa04@gmail.com",
    action: "Compose Email",
    href: "mailto:krishnarathwa04@gmail.com?subject=Project%20Opportunity",
    color: "border-[#D4AF37]/40 hover:border-[#D4AF37]",
  },
  {
    icon: "💼",
    name: "LinkedIn Network",
    value: "in/rathwa-krishna",
    action: "View Profile",
    href: "https://www.linkedin.com/in/rathwa-krishna",
    color: "border-[#3B82F6]/40 hover:border-[#3B82F6]",
  },
  {
    icon: "📞",
    name: "Direct Phone",
    value: "+91 9106170271",
    action: "Call Now",
    href: "tel:+919106170271",
    color: "border-[#E05638]/40 hover:border-[#E05638]",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailBody = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:krishnarathwa04@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(mailBody)}`;
    setSubmitted(true);
  };

  return (
    <section id="samvad" className="py-24 relative bg-[#08070A]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="संवाद • The Dialogue"
          title="Initiate a Collaboration"
          subtitle="Whether you have an enterprise data challenge, an AI initiative, or a high-impact engineering role — my door is always open."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Channels & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className="heritage-card p-6 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#8E8679] uppercase tracking-wider block mb-1">
                  Current Availability
                </span>
                <span className="font-cinzel text-sm font-bold text-[#F8F6F0]">
                  Open for Full-Time & Project Roles
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-xs font-semibold text-[#10B981]">Active</span>
              </div>
            </div>

            {/* Direct Channels Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              {directChannels.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`heritage-card p-5 flex flex-col justify-between group transition-all ${c.color}`}
                >
                  <div>
                    <span className="text-2xl mb-2 block">{c.icon}</span>
                    <h4 className="font-cinzel text-xs font-bold text-[#F8F6F0]">
                      {c.name}
                    </h4>
                    <p className="text-xs text-[#8E8679] mt-0.5 truncate">
                      {c.value}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#D4AF37] group-hover:text-[#FFF] mt-4 flex items-center gap-1">
                    <span>{c.action}</span>
                    <span>↗</span>
                  </span>
                </a>
              ))}
            </div>

            {/* Cultural Quote Box */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#181523] to-[#100E17] border border-[#D4AF37]/30">
              <p className="font-playfair italic text-sm text-[#F5D77F]/90 leading-relaxed mb-3">
                &ldquo;In the ancient tradition of Indian dialogue (संवाद), true progress is achieved 
                when ideas are shared with clarity, respect, and shared purpose.&rdquo;
              </p>
              <span className="font-cinzel text-[11px] font-bold text-[#D4AF37] tracking-widest uppercase">
                — KRISHNA RATHWA, Vadodara, India
              </span>
            </div>

          </div>

          {/* Right: Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="heritage-card p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E05638] to-[#D4AF37]" />

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <span className="text-5xl mb-4">🙏</span>
                  <h3 className="font-cinzel text-2xl font-bold text-[#F8F6F0] mb-2">
                    Dhanyavaad (धन्यवाद)
                  </h3>
                  <p className="text-sm text-[#C5BFB0] max-w-md">
                    Your inquiry has been prepared in your email client. I look forward to conversing with you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-gold text-xs mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[#F8F6F0] mb-1">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-[#8E8679]">
                      Fill out this form to connect directly with me via email.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#C5BFB0] uppercase tracking-wider mb-2">
                        Your Full Name <span className="text-[#E05638]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Arjun Sharma"
                        className="w-full px-4 py-3 rounded-lg bg-[#14121F] border border-white/10 focus:border-[#D4AF37] text-sm text-[#F8F6F0] placeholder-[#8E8679] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#C5BFB0] uppercase tracking-wider mb-2">
                        Your Email Address <span className="text-[#E05638]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#14121F] border border-white/10 focus:border-[#D4AF37] text-sm text-[#F8F6F0] placeholder-[#8E8679] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C5BFB0] uppercase tracking-wider mb-2">
                      Subject / Topic <span className="text-[#E05638]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. Data Analytics / AI Opportunity"
                      className="w-full px-4 py-3 rounded-lg bg-[#14121F] border border-white/10 focus:border-[#D4AF37] text-sm text-[#F8F6F0] placeholder-[#8E8679] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C5BFB0] uppercase tracking-wider mb-2">
                      Your Message <span className="text-[#E05638]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your project, team, or opportunity..."
                      className="w-full px-4 py-3 rounded-lg bg-[#14121F] border border-white/10 focus:border-[#D4AF37] text-sm text-[#F8F6F0] placeholder-[#8E8679] outline-none transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full py-3.5">
                    <span>Send Message (संदेश भेजें)</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import MandalaDecor from "./MandalaDecor";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:krishnarathwa04@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section
      id="samvad"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--ivory)" }}
    >
      {/* Background mandala */}
      <MandalaDecor
        size={400}
        opacity={0.04}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: "linear-gradient(90deg, transparent, var(--gold), var(--terracotta), var(--gold), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Samvad — The Dialogue"
          title="Let's Connect"
          subtitle="Every great collaboration begins with a conversation. Reach out — I would love to hear about your vision and explore how we can build something meaningful together."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div
              className="glass-card p-8 mb-6 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: "linear-gradient(90deg, var(--terracotta), var(--gold))",
                }}
              />
              <h3
                className="text-sm tracking-widest uppercase mb-6"
                style={{ fontFamily: "'Cinzel', serif", color: "var(--deep-brown)" }}
              >
                Contact Details
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 9106170271",
                    href: "tel:+919106170271",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "krishnarathwa04@gmail.com",
                    href: "mailto:krishnarathwa04@gmail.com",
                  },
                  {
                    icon: "💼",
                    label: "LinkedIn",
                    value: "linkedin.com/in/rathwa-krishna",
                    href: "https://www.linkedin.com/in/rathwa-krishna",
                  },
                ].map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-sm text-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(196,82,42,0.08)",
                        border: "1px solid rgba(196,82,42,0.20)",
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase mb-0.5"
                        style={{ fontFamily: "'Cinzel', serif", color: "var(--text-muted)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm font-medium transition-colors duration-300 group-hover:text-terracotta"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div
              className="glass-card p-6 relative"
              style={{ borderLeft: "3px solid var(--gold)" }}
            >
              <p
                className="text-sm italic leading-relaxed"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--text-secondary)",
                }}
              >
                &ldquo;In the tradition of karigari, the finest craft emerges from the
                dialogue between the artisan and the patron — the maker and the dreamer.
                Let us begin that conversation.&rdquo;
              </p>
              <p
                className="text-xs mt-3 tracking-widest uppercase"
                style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
              >
                — Krishna Rathwa
              </p>
            </div>

            {/* Open to work badge */}
            <div
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-sm"
              style={{
                background: "rgba(45,90,39,0.08)",
                border: "1px solid rgba(45,90,39,0.25)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--forest-green)", animation: "pulse 2s infinite" }}
              />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Cinzel', serif", color: "var(--forest-green)" }}
              >
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card p-8 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background: "linear-gradient(90deg, var(--indigo), var(--terracotta), var(--gold))",
              }}
            />

            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🙏</div>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: "'Cinzel Decorative', serif", color: "var(--deep-brown)" }}
                >
                  Dhanyavaad!
                </h3>
                <p style={{ color: "var(--text-muted)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  Your message has been sent. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3
                  className="text-sm tracking-widest uppercase mb-6"
                  style={{ fontFamily: "'Cinzel', serif", color: "var(--deep-brown)" }}
                >
                  Send a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "'Cinzel', serif", color: "var(--text-muted)" }}
                    >
                      Your Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Arjun Sharma"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "'Cinzel', serif", color: "var(--text-muted)" }}
                    >
                      Your Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--text-muted)" }}
                  >
                    Subject *
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Project Collaboration / Hiring"
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--text-muted)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="form-input resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <span>🙏</span>
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

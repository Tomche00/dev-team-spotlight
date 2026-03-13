import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8"
        >
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm text-muted-foreground">hello@devforge.team</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Location</p>
                <p className="text-sm text-muted-foreground">Remote-first, worldwide</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="md:col-span-3 space-y-4"
          >
            {submitted ? (
              <div className="rounded-xl bg-card-gradient border border-primary/30 p-8 text-center">
                <p className="text-lg font-semibold mb-1">Thanks for reaching out!</p>
                <p className="text-sm text-muted-foreground">We'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

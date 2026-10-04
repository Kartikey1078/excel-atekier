"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { setBodyScrollLock } from "@/lib/scroll-lock";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", message: "" };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function FooterEnquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [portalReady, setPortalReady] = useState(false);

  const closeSuccess = useCallback(() => setShowSuccess(false), []);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!showSuccess) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSuccess();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showSuccess, closeSuccess]);

  useEffect(() => {
    setBodyScrollLock(showSuccess);
    return () => setBodyScrollLock(false);
  }, [showSuccess]);

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!isValidEmail(form.email)) next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    else if (form.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setForm(initialForm);
    setErrors({});
    setShowSuccess(true);
  };

  const fieldClass = (key: keyof FormState) =>
    `w-full border-b bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white ${
      errors[key] ? "border-red-400/80" : "border-white/25"
    }`;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative z-10 w-full max-w-xl touch-pan-y border border-white/15 bg-neutral-950/85 p-6 sm:p-8 md:max-w-none"
      >
        <p className="text-p-sm uppercase tracking-[0.14em] text-white/70">Get in touch</p>
        <h3 className="mt-2 text-xl font-medium tracking-tight text-white sm:text-2xl">
          Start a conversation
        </h3>
        <p className="mt-2 text-sm text-white/55">
          Share a few details and we&apos;ll respond within one business day.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="enquiry-name" className="text-i-xs text-white/60">
              Name
            </label>
            <input
              id="enquiry-name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={`${fieldClass("name")} mt-2`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-300/90" role="alert">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="enquiry-email" className="text-i-xs text-white/60">
              Email
            </label>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className={`${fieldClass("email")} mt-2`}
              placeholder="you@company.com"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-300/90" role="alert">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="enquiry-message" className="text-i-xs text-white/60">
              Message
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className={`${fieldClass("message")} mt-2 max-h-40 min-h-[6.5rem] resize-y overflow-y-auto overscroll-y-contain`}
              placeholder="Tell us about your project or question"
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-300/90" role="alert">{errors.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-i-xs font-medium uppercase tracking-[0.16em] text-neutral-950 transition-all hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting ? "Sending…" : "Send message"}
          {!submitting && <span aria-hidden>→</span>}
        </button>
      </form>

      {portalReady &&
        createPortal(
          <AnimatePresence>
            {showSuccess && (
              <>
                <motion.button
                  type="button"
                  aria-label="Close dialog"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-black/65 backdrop-blur-sm"
                  onClick={closeSuccess}
                />
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="enquiry-success-title"
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed left-1/2 top-1/2 z-[110] w-[min(92vw,28rem)] -translate-x-1/2 -translate-y-1/2 border border-white/10 bg-neutral-950 p-8 text-white shadow-2xl sm:p-10"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2
                    id="enquiry-success-title"
                    className="mt-6 text-center text-xl font-medium tracking-tight sm:text-2xl"
                  >
                    Thank you
                  </h2>
                  <p className="mt-3 text-center text-sm leading-relaxed text-white/70 sm:text-base">
                    We will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={closeSuccess}
                    className="mt-8 w-full bg-white py-3.5 text-i-xs font-medium uppercase tracking-[0.16em] text-neutral-950 transition-colors hover:bg-neutral-100"
                  >
                    Close
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

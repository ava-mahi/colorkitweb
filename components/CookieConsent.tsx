"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-xl"
        >
          <div className="glass rounded-2xl border border-white/10 p-5 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground mb-1">Cookie Consent</h3>
                <p className="text-sm text-muted leading-relaxed">
                  We use cookies to improve your experience and serve relevant ads. By continuing, you agree to our{" "}
                  <a href="/privacy-policy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
                    Privacy Policy
                  </a>
                  .
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    onClick={accept}
                    className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={decline}
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    Decline
                  </button>
                </div>
              </div>
              <button
                onClick={decline}
                className="shrink-0 rounded-lg p-1.5 text-muted hover:bg-white/5 hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

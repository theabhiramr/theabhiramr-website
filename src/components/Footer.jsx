import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background w-full border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-8 py-12">
        {/* Legal & Secret Terminal Path */}
        <div className="text-muted/60 flex flex-col gap-4 text-xs tracking-tight md:flex-row md:items-center md:justify-between">
          <p className="font-inter">
            © {currentYear} Abhi Ramachandran.
            <span className="ml-2 hidden opacity-50 sm:inline">
              All rights reserved.
            </span>
            <span className="font-geist-mono ml-2 opacity-50">
              v{__APP_VERSION__}
            </span>
          </p>

          <a
            href="/secret"
            className="group text-muted hover:text-content flex items-center gap-2 font-mono text-[13px] transition-colors duration-300"
          >
            <span className="text-accent/50 group-hover:text-accent">~</span>
            <span className="opacity-70 transition-opacity group-hover:opacity-100">
              cd /cs164
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#projects", label: "Projects" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`}>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="mobile-menu-button"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        aria-hidden={!open}
        aria-label="Mobile navigation"
        className="mobile-menu-panel"
        id="mobile-navigation"
      >
        <p className="mobile-menu-eyebrow">[ Navigate the portfolio ]</p>
        <div className="mobile-menu-links">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span className="mobile-menu-index">0{index + 1}</span>
              <strong>{link.label}</strong>
              <span className="mobile-menu-arrow" aria-hidden="true">↘</span>
            </a>
          ))}
        </div>
        <p className="mobile-menu-footer">Jivitesh Sharma / AI products and systems</p>
      </nav>
    </div>
  );
}

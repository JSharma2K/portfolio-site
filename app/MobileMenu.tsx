"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#projects", label: "Projects" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

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

      {open ? (
        <nav className="mobile-menu-panel" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}

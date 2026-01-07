import React, { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

const services = [
  { name: 'Graphic Design', detail: 'Brand visuals, campaign assets.' },
  { name: 'Marketing Strategy', detail: 'Content plans, funnels, launch maps.' },
  { name: 'Sales Enablement', detail: 'Decks, playbooks, sales collateral.' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeDropdown = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link href="#home">
          <a className="nav-logo">Graphic Designer &amp; Marketing</a>
        </Link>
      </div>
      <div className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <div
          className="nav-dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={closeDropdown}
        >
          <button
            type="button"
            className="nav-link dropdown-trigger"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            Services <FiChevronDown className={`chevron ${open ? 'open' : ''}`} />
          </button>
          {open && (
            <div className="dropdown-menu" role="menu">
              {services.map((service) => (
                <a
                  key={service.name}
                  href="#services"
                  className="dropdown-item"
                  onClick={closeDropdown}
                >
                  <span className="item-title">{service.name}</span>
                  <span className="item-detail">{service.detail}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="#contact" className="nav-link accent">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

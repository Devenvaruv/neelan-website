import React from 'react';

const services = [
  {
    title: 'Graphic Design',
    blurb: 'Identity systems, launch visuals, and campaign assets with a consistent, bold look.',
    items: ['Brand kits & logo suites', 'Social & ad creative', 'Event / print collateral'],
  },
  {
    title: 'Marketing',
    blurb: 'Narratives, content plans, and campaigns that connect creative to measurable outcomes.',
    items: ['Campaign roadmaps', 'Content calendars', 'Landing pages & nurture flows'],
  },
  {
    title: 'Sales Enablement',
    blurb: 'Polished tools that help reps tell the story, handle objections, and close.',
    items: ['Pitch & demo decks', 'Case studies & one-pagers', 'Playbooks & scripts'],
  },
];

const Home = () => (
  <main className="page">
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Graphic designer · Marketing portfolio</p>
          <h1>Design that looks sharp and sells even sharper.</h1>
          <p className="lead">
            I help brands show up with confident visuals, clear messaging, and campaign assets that
            guide people from first glance to purchase.
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-frame">
            <img src="/1.png" alt="Graphic design and marketing collage" className="hero-image" />
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2>What I can deliver</h2>
          <p className="body">Three ways to help you look polished, launch faster, and convert better.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="card-top">
                <span className="service-pill">{service.title}</span>
                <p className="body">{service.blurb}</p>
              </div>
              <ul className="service-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="about" className="section">
      <div className="container two-col">
        <div>
          <p className="eyebrow">About</p>
          <h2>Hybrid creative + marketer.</h2>
          <p className="body">
            I mix visual craft with marketing strategy. That means every logo, landing page, and deck
            is built to look great and move people toward action. I’ve shipped launches, rebrands, and
            sales enablement kits for teams that needed a single partner from concept to delivery.
          </p>
        </div>
        <div className="list-card">
          <p className="list-title">How I work</p>
          <ul>
            <li>Start with the goal: audience, channels, and the outcome you want.</li>
            <li>Create a sharp visual system: color, type, layout, and motion rules.</li>
            <li>Deliver fast iterations: test hooks, creative variants, and measure results.</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="contact" className="section">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Tell me about your launch, campaign, or sales push.</h2>
          <p className="body">
            Whether you need a quick creative refresh or a full toolkit, I’ll respond with a simple
            plan and timeline.
          </p>
          <div className="contact-actions">
            <a href="mailto:hello@example.com" className="btn primary">Email me</a>
            <a href="#services" className="btn ghost">See capabilities</a>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Project focus
            <input type="text" name="project" placeholder="Brand refresh, campaign, deck..." />
          </label>
          <label>
            Contact email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Project notes
            <textarea name="notes" rows="4" placeholder="What do you want to make happen?" />
          </label>
          <button type="submit" className="btn primary">Send inquiry</button>
        </form>
      </div>
    </section>
  </main>
);

export default Home;

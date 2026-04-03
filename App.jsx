const services = [
  {
    title: "Talent Solutions",
    text: "Find skilled professionals for contract, contract-to-hire, and permanent roles across critical business functions.",
  },
  {
    title: "Technology Services",
    text: "Support cloud, data, AI, application modernization, and digital transformation with delivery-ready teams.",
  },
  {
    title: "Managed Projects",
    text: "Accelerate strategic initiatives with structured execution, measurable outcomes, and expert implementation support.",
  },
  {
    title: "Consulting & Advisory",
    text: "Get practical guidance on workforce planning, operations, and transformation strategies tailored to your goals.",
  },
];

const industries = [
  "Healthcare",
  "Information Technology",
  "Financial Services",
  "Engineering",
  "Life Sciences",
  "Manufacturing",
  "Retail",
  "Logistics",
  "Education",
  "Government",
  "Telecommunications",
  "Human Resources",
];

const insights = [
  {
    category: "Hiring Trends",
    title: "How to Hire Faster Without Lowering Quality",
    text: "Build a repeatable hiring system that improves candidate experience and reduces time-to-fill.",
  },
  {
    category: "Leadership",
    title: "What Strong Teams Need in a Hybrid World",
    text: "Learn how top organizations improve collaboration, accountability, and performance across distributed teams.",
  },
  {
    category: "Technology",
    title: "Digital Transformation That Actually Delivers",
    text: "A practical approach to scaling change initiatives with better planning, execution, and adoption.",
  },
];

const testimonials = [
  {
    name: "Alicia Morgan",
    role: "VP, Operations",
    quote:
      "abc.com helped us scale quickly with the right talent and gave us a polished, responsive experience from day one.",
  },
  {
    name: "Daniel Chen",
    role: "Director, Technology",
    quote:
      "Their team understood both business and technical needs. The process was smooth, fast, and highly professional.",
  },
  {
    name: "Rachel Adams",
    role: "Head of Talent",
    quote:
      "What stood out most was the quality of communication, speed, and ability to adapt to our hiring priorities.",
  },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <div className="brand-logo">A</div>
          <div>
            <div className="brand-name">abc.com</div>
            <div className="brand-tag">Talent • Technology • Growth</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-secondary">Contact</a>
          <a href="#services" className="btn btn-primary">Hire Talent</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">Modern professional services platform</div>
          <h1>Build stronger teams. Deliver smarter solutions.</h1>
          <p>
            abc.com helps organizations hire exceptional talent, accelerate key
            initiatives, and create better business outcomes with confidence.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#insights" className="btn btn-secondary">Explore Insights</a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>100K+</h3>
              <p>Professionals in network</p>
            </div>
            <div className="stat-card">
              <h3>40+</h3>
              <p>Industry specializations</p>
            </div>
            <div className="stat-card">
              <h3>98%</h3>
              <p>Client satisfaction target</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support for clients and talent</p>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="glass-card">
            <div className="panel-header">
              <span>Opportunity Dashboard</span>
              <span className="live-badge">Live</span>
            </div>

            <div className="dashboard-grid">
              <div className="mini-card">
                <small>Open Roles</small>
                <h3>1,248</h3>
                <p>+14% this month</p>
              </div>
              <div className="mini-card">
                <small>Project Delivery</small>
                <h3>92%</h3>
                <p>On-time execution</p>
              </div>
              <div className="wide-card">
                <small>Search jobs, services, or industries</small>
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search by skill, role, or industry"
                  />
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Services & Solutions</div>
            <h2>Flexible support for hiring, delivery, and transformation</h2>
          </div>
          <p>
            From staffing and recruiting to consulting and managed delivery,
            abc.com is built to support both urgent business needs and long-term growth.
          </p>
        </div>

        <div className="card-grid four">
          {services.map((item) => (
            <div className="info-card" key={item.title}>
              <div className="icon-circle">✦</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#contact">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="container about-grid">
        <div>
          <div className="eyebrow">About abc.com</div>
          <h2>A people-first company with a strong execution mindset</h2>
          <p className="muted-text">
            We combine trusted relationships, industry expertise, and modern
            delivery practices to help organizations solve hiring and
            transformation challenges with speed and clarity.
          </p>
        </div>

        <div className="card-grid two">
          <div className="feature-card">
            <h3>Reliable delivery</h3>
            <p>
              Structured workflows, transparent communication, and measurable
              milestones keep projects moving forward.
            </p>
          </div>
          <div className="feature-card">
            <h3>Human-centered partnerships</h3>
            <p>
              We focus on fit, trust, and long-term value so clients and
              candidates feel supported from day one.
            </p>
          </div>
          <div className="feature-card wide">
            <h3>Designed to feel premium, modern, and conversion-focused</h3>
            <p>
              This one-page experience gives your brand a polished presence with
              strong CTA sections, editorial content blocks, service cards, and
              a clean corporate layout similar to modern staffing and consulting sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Industries</div>
            <h2>Built to support a wide range of business functions</h2>
          </div>
          <p>
            abc.com can serve organizations across fast-moving sectors with
            industry-aligned talent and solution offerings.
          </p>
        </div>

        <div className="pill-wrap">
          {industries.map((item) => (
            <span className="pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Client Voices</div>
            <h2>What people say about working with abc.com</h2>
          </div>
          <p>
            Build trust by showing proof of delivery, professionalism, and business impact.
          </p>
        </div>

        <div className="card-grid three">
          {testimonials.map((item) => (
            <div className="quote-card" key={item.name}>
              <p className="quote-mark">“</p>
              <p className="quote-text">{item.quote}</p>
              <div className="quote-person">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Insights</div>
            <h2>Fresh content that supports better decisions</h2>
          </div>
          <p>
            Add thought leadership, hiring trends, market updates, and practical
            guidance in a clean editorial layout.
          </p>
        </div>

        <div className="card-grid three">
          {insights.map((item) => (
            <div className="blog-card" key={item.title}>
              <span className="blog-tag">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#contact">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box">
          <div>
            <div className="eyebrow">Ready to grow?</div>
            <h2>Let’s build your next success story together</h2>
            <p>
              Whether you need top talent, project support, or strategic guidance,
              abc.com is ready to help.
            </p>
          </div>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">Talk to Us</a>
            <a href="#insights" className="btn btn-secondary">View Resources</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-dark">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">Contact</div>
          <h2>Let’s connect</h2>
          <p className="muted-text">
            Add your real email, phone number, office locations, or a contact form here later.
          </p>

          <div className="contact-list">
            <div>📞 (800) 600-4631</div>
            <div>✉️ bharathputo@gmail.com</div>
            <div>📍 USA</div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Company Name" />
          <textarea placeholder="Tell us about your needs"></textarea>
          <button type="button" className="btn btn-primary full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <div className="brand-logo">A</div>
            <div>
              <div className="brand-name">abc.com</div>
              <div className="brand-tag">Professional services for modern growth</div>
            </div>
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <a href="#services">Staffing Solutions</a>
          <a href="#services">Direct Placement</a>
          <a href="#services">Professional Services</a>
          <a href="#services">Consulting</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
          <a href="#industries">Industries</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="#contact">hello@abc.com</a>
          <a href="#contact">(800) 555-0123</a>
          <a href="#contact">New York, NY</a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 abc.com. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Industries />
      <Testimonials />
      <Insights />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

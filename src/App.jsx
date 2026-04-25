import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  EyeOff,
  NavigationOff,
  LayoutTemplate,
  Smartphone,
  MousePointerClick,
  ShieldCheck,
  Zap,
  Link,
  Search,
  CheckCircle,
  Palette,
  Star,
  ChevronDown,
  ChevronUp,
  Send,
  XCircle,
  Mail,
  Phone,
  Plus,
  Menu,
  X,
} from "lucide-react";
import heroImg from "./assets/hero_spa_sage.png";
import profileImg from "./assets/sahedalomsumit-profile-removebg-preview.png";
import blobSvg from "./assets/blob.svg";
import auraBernImg from "./assets/Aura Bern.png";
import jenniImg from "./assets/jenni-wellbeing.png";
import logoImg from "./assets/favicon-sahed-alom-sumit.png";
import "./App.css";

/* ─────────────────── Scroll Reveal Hook ─────────────────── */
function Reveal({ children, delay = 0, className = "", style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1],
        delay: delay ? delay / 1000 : 0,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────── Header ─────────────────── */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "PROBLEM", href: "#problem" },
    { name: "SOLUTION", href: "#solution" },
    { name: "OUTCOMES", href: "#outcomes" },
    { name: "PROCESS", href: "#process" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT", href: "#about" },
  ];

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          padding: "14px 5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <img
            src={logoImg}
            alt="SpaGrow Logo"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "var(--bg-tint)",
              padding: "4px",
            }}
          />
          <span
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--primary)",
              letterSpacing: "-0.02em",
            }}
          >
            SpaGrow
          </span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <nav className="desktop-nav" style={{ display: "flex", gap: "32px" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "var(--primary)",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              background: "var(--bg)",
              borderBottom: "1px solid var(--stone)",
            }}
            className="mobile-nav"
          >
            <div
              style={{
                padding: "20px 5vw 40px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${
                    activeSection === link.href.substring(1) ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ fontSize: "1.2rem", width: "fit-content" }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ─────────────────── Hero ─────────────────── */
const Hero = () => (
  <section
    id="hero"
    className="section"
    style={{
      paddingTop: "140px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Reveal>
      <div className="badge">Based in Helsinki, Finland</div>
    </Reveal>

    <Reveal delay={100}>
      <h1 style={{ marginTop: "16px", maxWidth: "900px" }}>
        Get More Spa Bookings — Without Paying for{" "}
        <span className="text-italic" style={{ color: "var(--primary)" }}>
          Without Paying for Ads
        </span>
      </h1>
    </Reveal>

    <Reveal delay={200}>
      <p
        style={{
          marginTop: "32px",
          fontSize: "1.4rem",
          lineHeight: 1.5,
          maxWidth: "700px",
        }}
      >
        I redesign spa websites for businesses worldwide so visitors instantly{" "}
        <strong style={{ color: "var(--text)" }}>trust you</strong>, feel
        relaxed, and actually book — instead of leaving.
      </p>
    </Reveal>

    <Reveal delay={300}>
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <a
          href="#audit"
          className="btn btn-primary"
          id="hero-cta"
          aria-label="Get a free homepage audit"
        >
          Get a Free Homepage Audit{" "}
          <ArrowRight size={20} style={{ marginLeft: "10px" }} />
        </a>
        <div className="offer-pill">
          <Star size={16} style={{ color: "var(--secondary)" }} />
          <span>25% off your first project — limited spots available</span>
        </div>
      </div>
    </Reveal>

    {/* Hero Image */}
    <Reveal delay={400}>
      <div
        style={{
          marginTop: "80px",
          borderRadius: "40px",
          overflow: "hidden",
          height: "520px",
          width: "100%",
          position: "relative",
        }}
      >
        <img
          src={heroImg}
          alt="Premium spa interior showcasing a calm, minimalist design aesthetic"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Glass overlay card */}
        <div
          className="glass"
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            padding: "32px",
            borderRadius: "24px",
            maxWidth: "280px",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
            Serving Clients Worldwide
          </h3>
          <p style={{ fontSize: "0.95rem", margin: 0, maxWidth: "none" }}>
            Specialized strategy for the global wellness market.
          </p>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Problem ─────────────────── */
const Problem = () => (
  <section id="problem" className="section">
    <Reveal>
      <h2 style={{ maxWidth: "720px" }}>
        Many spa websites look "okay"…{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          but quietly lose clients every day.
        </span>
      </h2>
    </Reveal>

    {/* Big bento grid */}
    <div className="grid-bento" style={{ marginTop: "56px" }}>
      <Reveal
        delay={0}
        className="bento-card"
        style={{
          gridColumn: "span 8",
          background: "var(--primary)",
          color: "white",
        }}
      >
        <EyeOff
          size={40}
          style={{ marginBottom: "24px", color: "var(--secondary)" }}
        />
        <h3 style={{ color: "white", fontSize: "2rem", marginBottom: "16px" }}>
          Invisible Differentiation
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "1.15rem",
            maxWidth: "none",
          }}
        >
          Visitors don't clearly see what makes your spa different from the one
          three streets away. They leave without booking — and choose someone
          else.
        </p>
      </Reveal>

      <Reveal
        delay={80}
        className="bento-card"
        style={{ gridColumn: "span 4" }}
      >
        <Smartphone
          size={32}
          style={{ marginBottom: "24px", color: "var(--primary)" }}
        />
        <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
          Mobile Friction
        </h3>
        <p>
          The mobile experience feels frustrating — and most clients come from
          their phone.
        </p>
      </Reveal>

      <Reveal
        delay={160}
        className="bento-card"
        style={{ gridColumn: "span 4" }}
      >
        <NavigationOff
          size={32}
          style={{ marginBottom: "24px", color: "var(--primary)" }}
        />
        <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
          Hidden Booking
        </h3>
        <p>
          Booking is hidden or confusing — so visitors give up before they act.
        </p>
      </Reveal>

      <Reveal
        delay={240}
        className="bento-card"
        style={{ gridColumn: "span 8", borderColor: "var(--secondary)" }}
      >
        <LayoutTemplate
          size={32}
          style={{ marginBottom: "24px", color: "var(--primary)" }}
        />
        <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
          Misaligned Aesthetics
        </h3>
        <p style={{ fontSize: "1.1rem" }}>
          The design doesn't reflect a calm, premium experience — so people
          don't feel the quality of your spa before stepping through the door.
        </p>
      </Reveal>
    </div>

    <Reveal delay={200}>
      <div className="callout-bar" style={{ marginTop: "48px" }}>
        <p
          style={{
            margin: 0,
            color: "var(--primary)",
            fontWeight: 600,
            fontSize: "1.15rem",
            maxWidth: "none",
          }}
        >
          So people leave — and choose another spa nearby.
        </p>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Solution ─────────────────── */
const Solution = () => (
  <section
    id="solution"
    className="section"
    style={{
      background: "var(--primary)",
      borderRadius: "60px",
      color: "white",
    }}
  >
    <div className="grid-bento">
      <Reveal className="solution-left" style={{ gridColumn: "span 5" }}>
        <div style={{ gridColumn: "span 5" }}>
          <div
            className="badge"
            style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
          >
            The Solution
          </div>
          <h2 style={{ color: "white", marginTop: "16px" }}>
            Turn your website into a{" "}
            <span className="text-italic" style={{ color: "var(--secondary)" }}>
              client-booking experience.
            </span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              marginTop: "24px",
              maxWidth: "none",
            }}
          >
            I help spa and wellness businesses worldwide redesign their website
            from a passive brochure into an active booking engine.
          </p>
          <a
            href="#audit"
            className="btn"
            style={{
              marginTop: "40px",
              background: "var(--secondary)",
              color: "var(--text)",
            }}
          >
            Get Started <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </a>
        </div>
      </Reveal>

      <div
        style={{
          gridColumn: "span 7",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {[
          {
            icon: <ArrowRight size={24} />,
            title: "Clear Visit → Booking Path",
            text: "A friction-free journey from first click to a confirmed appointment.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Strong First Impression",
            text: "Premium calm design establishes trust within seconds.",
          },
          {
            icon: <Palette size={24} />,
            title: "Brand-Aligned Design",
            text: "Design that genuinely reflects your spa's identity and atmosphere.",
          },
          {
            icon: <Smartphone size={24} />,
            title: "Smooth Mobile Experience",
            text: "Flawless across all devices — especially the phones your clients use.",
          },
        ].map((item, i) => (
          <Reveal key={i} delay={i * 80}>
            <div
              style={{
                borderLeft: "2px solid var(--secondary)",
                paddingLeft: "20px",
              }}
            >
              <div style={{ color: "var(--secondary)", marginBottom: "12px" }}>
                {item.icon}
              </div>
              <h4
                style={{
                  fontSize: "1.15rem",
                  marginBottom: "8px",
                  color: "white",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.72)",
                  margin: 0,
                  maxWidth: "none",
                }}
              >
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    <Reveal delay={200}>
      <div
        style={{
          marginTop: "56px",
          padding: "28px 36px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          borderLeft: "4px solid var(--secondary)",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "white",
            fontSize: "1.2rem",
            fontWeight: 600,
            maxWidth: "none",
          }}
        >
          Result: More visitors become paying clients.
        </p>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Limited Offer ─────────────────── */
const LimitedOffer = () => (
  <section className="section">
    <Reveal>
      <div className="offer-card">
        <div
          className="badge"
          style={{ background: "var(--secondary)", color: "white" }}
        >
          Limited Offer
        </div>
        <h2 style={{ marginTop: "16px", maxWidth: "700px" }}>
          25% Off for Spa Businesses{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            worldwide
          </span>
        </h2>
        <p style={{ fontSize: "1.2rem", marginTop: "24px" }}>
          To make it easy to get started without full risk:
        </p>
        <ul className="offer-list">
          <li>
            <CheckCircle
              size={20}
              style={{ color: "var(--primary)", flexShrink: 0 }}
            />
            <span>25% discount on your first project</span>
          </li>
          <li>
            <CheckCircle
              size={20}
              style={{ color: "var(--primary)", flexShrink: 0 }}
            />
            <span>Available for a limited number of local spa businesses</span>
          </li>
          <li>
            <CheckCircle
              size={20}
              style={{ color: "var(--primary)", flexShrink: 0 }}
            />
            <span>A simple way to improve your website without full risk</span>
          </li>
        </ul>
        <a
          href="#audit"
          className="btn btn-primary"
          style={{ marginTop: "40px" }}
        >
          Claim Your Spot <ArrowRight size={18} style={{ marginLeft: "8px" }} />
        </a>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Outcomes ─────────────────── */
const Outcomes = () => (
  <section id="outcomes" className="section">
    <Reveal>
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h2>
          What you{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            actually get.
          </span>
        </h2>
        <p style={{ margin: "16px auto 0", textAlign: "center" }}>
          Real, measurable outcomes — not just a prettier website.
        </p>
      </div>
    </Reveal>

    <div className="grid-bento">
      {[
        {
          icon: <MousePointerClick size={36} />,
          title: "More Bookings from Your Website",
          text: "Your visitors don't hesitate — they act. Clear, persuasive CTAs guide them from interest to appointment.",
          size: "span 6",
          accent: true,
        },
        {
          icon: <ShieldCheck size={36} />,
          title: "Instant Trust",
          text: "Your website reflects the real quality of your spa — before they even walk through the door.",
          size: "span 6",
        },
        {
          icon: <Smartphone size={36} />,
          title: "Better Mobile Experience",
          text: "Easy booking from phone — where most clients come from. No friction, no confusion.",
          size: "span 4",
        },
        {
          icon: <Zap size={36} />,
          title: "More Independence",
          text: "Less reliance on third-party booking platforms that take your margin and data.",
          size: "span 4",
        },
        {
          icon: <Link size={36} />,
          title: "Stronger Local Presence",
          text: "Stand out among spa businesses everywhere with a site that looks like it belongs at the top.",
          size: "span 4",
        },
      ].map((item, i) => (
        <Reveal
          key={i}
          delay={i * 80}
          className="bento-card outcome-card"
          style={{
            gridColumn: item.size,
            background: item.accent ? "var(--primary)" : undefined,
            color: item.accent ? "white" : undefined,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: item.accent ? "var(--secondary)" : "var(--primary)",
              marginBottom: "20px",
            }}
          >
            {item.icon}
          </div>
          <h3
            style={{
              fontSize: "1.25rem",
              marginBottom: "12px",
              color: item.accent ? "white" : undefined,
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              margin: 0,
              maxWidth: "none",
              color: item.accent ? "rgba(255,255,255,0.8)" : undefined,
            }}
          >
            {item.text}
          </p>
        </Reveal>
      ))}
    </div>
  </section>
);

/* ─────────────────── Free Audit Section ─────────────────── */
const FreeAudit = () => (
  <section id="audit" className="section" style={{ paddingBottom: "0" }}>
    <Reveal>
      <div
        style={{
          background:
            "linear-gradient(135deg, var(--bg-card) 0%, #fef0f6 100%)",
          border: "1px solid var(--stone)",
          borderRadius: "40px",
          padding: "80px 5vw",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <div>
          <div className="badge">Free — No Strings Attached</div>
          <h2 style={{ marginTop: "16px", maxWidth: "580px" }}>
            I'll personally review your homepage and show you{" "}
            <span className="text-italic" style={{ color: "var(--primary)" }}>
              exactly what's costing you bookings.
            </span>
          </h2>
          <div style={{ marginTop: "40px", display: "grid", gap: "24px" }}>
            {[
              {
                icon: <Search size={20} />,
                text: "Where you're losing clients",
              },
              {
                icon: <NavigationOff size={20} />,
                text: "What's blocking bookings",
              },
              { icon: <Zap size={20} />, text: "What can be improved quickly" },
            ].map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "var(--stone)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "var(--text)",
                    maxWidth: "none",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              marginTop: "32px",
              fontSize: "1rem",
              fontStyle: "italic",
              color: "var(--text-muted)",
            }}
          >
            Short, clear, and practical.
          </p>
        </div>

        <div>
          <div
            className="badge"
            style={{ background: "var(--secondary)", color: "white" }}
          >
            Limited Spots Available
          </div>
          <h3
            style={{
              fontSize: "1.8rem",
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            Request Your Free Audit
          </h3>
          <p style={{ marginBottom: "32px", fontSize: "1rem" }}>
            Send your website and I'll get back to you with clear improvement
            ideas.
          </p>
          <AuditForm />
        </div>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Audit Form ─────────────────── */
const AuditForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    url: "",
    phone: "",
    notes: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    if (name === "name" && !value) {
      error = "Name is required";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Please enter a valid email address";
      }
    } else if (name === "url") {
      const urlRegex =
        /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/;
      if (!value) {
        error = "Website URL is required";
      } else if (!urlRegex.test(value)) {
        error = "Please enter a valid URL (e.g. www.example.com)";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const validate = () => {
    const isNameValid = validateField("name", state.name);
    const isEmailValid = validateField("email", state.email);
    const isUrlValid = validateField("url", state.url);
    return isNameValid && isEmailValid && isUrlValid;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const SHEETDB_URL = import.meta.env.VITE_SHEETDB_URL;

    try {
      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              ...state,
              date: new Date().toLocaleString("en-GB"),
            },
          ],
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Something went wrong. Please try again or contact me directly.");
    } finally {
      setLoading(false);
    }
  };

  const clearField = (field) => {
    setState({ ...state, [field]: "" });
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "48px",
          background: "var(--primary)",
          borderRadius: "24px",
          textAlign: "center",
          color: "white",
        }}
      >
        <CheckCircle
          size={48}
          style={{ color: "var(--secondary)", marginBottom: "16px" }}
        />
        <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "8px" }}>
          You're on the list!
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            margin: 0,
            maxWidth: "none",
          }}
        >
          Since I'm in Helsinki, I'll be reviewing this during my morning hours
          and reach out within 48 hours with clear insights.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: "4px" }}
    >
      <div className="form-field">
        <fieldset className={errors.name ? "has-error" : ""}>
          <legend>
            Full Name <span className="required">*</span>
          </legend>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              placeholder="e.g. Jakob Müller"
              value={state.name}
              onBlur={handleBlur}
              onChange={(e) => {
                setState({ ...state, name: e.target.value });
                if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
              }}
            />
            {state.name && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => clearField("name")}
              >
                <XCircle size={16} />
              </button>
            )}
          </div>
        </fieldset>
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-field">
        <fieldset className={errors.email ? "has-error" : ""}>
          <legend>
            Email <span className="required">*</span>
          </legend>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="e.g. jakob@yourspa.com"
              value={state.email}
              onBlur={handleBlur}
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
                if (errors.email)
                  setErrors((prev) => ({ ...prev, email: null }));
              }}
            />
            {state.email && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => clearField("email")}
              >
                <XCircle size={16} />
              </button>
            )}
          </div>
        </fieldset>
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-field">
        <fieldset className={errors.url ? "has-error" : ""}>
          <legend>
            Website URL <span className="required">*</span>
          </legend>
          <div className="input-wrapper">
            <input
              type="text"
              name="url"
              placeholder="e.g. www.yourspa-wellness.com"
              value={state.url}
              onBlur={handleBlur}
              onChange={(e) => {
                setState({ ...state, url: e.target.value });
                if (errors.url) setErrors((prev) => ({ ...prev, url: null }));
              }}
            />
            {state.url && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => clearField("url")}
              >
                <XCircle size={16} />
              </button>
            )}
          </div>
        </fieldset>
        {errors.url && <span className="form-error">{errors.url}</span>}
      </div>

      {!isExpanded ? (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="expand-btn"
        >
          <Plus size={16} /> Add whatsapp number & notes
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="form-field">
            <fieldset>
              <legend>WhatsApp Number</legend>
              <div className="input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. +41 79 123 45 67"
                  value={state.phone}
                  onChange={(e) => {
                    setState({ ...state, phone: e.target.value });
                  }}
                />
                {state.phone && (
                  <button
                    type="button"
                    className="clear-btn"
                    onClick={() => clearField("phone")}
                  >
                    <XCircle size={16} />
                  </button>
                )}
              </div>
            </fieldset>
          </div>

          <div className="form-field">
            <fieldset>
              <legend>Any specific notes?</legend>
              <div className="input-wrapper">
                <textarea
                  name="notes"
                  placeholder="Tell me more about your goals or specific concerns..."
                  value={state.notes}
                  onChange={(e) =>
                    setState({ ...state, notes: e.target.value })
                  }
                />
              </div>
            </fieldset>
          </div>
        </motion.div>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading}
        style={{ width: "100%", marginTop: "16px", opacity: loading ? 0.7 : 1 }}
        aria-label="Request your free homepage audit"
      >
        {loading ? (
          "Sending…"
        ) : (
          <>
            Request Your Free Audit{" "}
            <Send size={18} style={{ marginLeft: "10px" }} />
          </>
        )}
      </button>
      <p
        style={{
          fontSize: "0.82rem",
          color: "var(--text-muted)",
          textAlign: "center",
          marginTop: "12px",
          maxWidth: "none",
        }}
      >
        No spam. No sales pressure. Just clear insights.
      </p>
    </form>
  );
};

/* ─────────────────── How It Works ─────────────────── */
const Process = () => (
  <section id="process" className="section">
    <Reveal>
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h2>
          How it{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            works.
          </span>
        </h2>
        <p style={{ margin: "16px auto 0", textAlign: "center" }}>
          Four simple steps. Zero commitment until you're ready.
        </p>
      </div>
    </Reveal>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
      }}
      className="process-grid"
    >
      {[
        {
          step: "01",
          icon: <Send size={28} />,
          title: "You send your website",
          text: "Drop your website link — takes 30 seconds.",
        },
        {
          step: "02",
          icon: <Search size={28} />,
          title: "I review it",
          text: "I personally audit your homepage for conversion gaps.",
        },
        {
          step: "03",
          icon: <CheckCircle size={28} />,
          title: "You get clear ideas",
          text: "A concise, actionable breakdown of what to fix and why.",
        },
        {
          step: "04",
          icon: <Zap size={28} />,
          title: "We improve it together",
          text: "If you like — we build it (with 25% off your first project).",
        },
      ].map((item, i) => (
        <Reveal key={i} delay={i * 100}>
          <div
            className="bento-card process-card"
            style={{ textAlign: "center", alignItems: "center" }}
          >
            <div className="step-number">{item.step}</div>
            <div style={{ color: "var(--primary)", margin: "20px 0 16px" }}>
              {item.icon}
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "0.95rem", margin: 0, maxWidth: "none" }}>
              {item.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

/* ─────────────────── Visual Preview Hook ─────────────────── */
const VisualPreview = () => (
  <section
    className="section"
    style={{
      background: "linear-gradient(135deg, var(--primary) 0%, #3a4f34 100%)",
      borderRadius: "60px",
      color: "white",
      textAlign: "center",
    }}
  >
    <Reveal>
      <div
        className="badge"
        style={{
          background: "rgba(255,255,255,0.15)",
          color: "var(--secondary)",
        }}
      >
        For Selected Businesses Worldwide
      </div>
      <h2
        style={{
          color: "white",
          marginTop: "20px",
          maxWidth: "680px",
          margin: "20px auto 0",
        }}
      >
        See the improvement{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          before deciding.
        </span>
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          margin: "24px auto 0",
        }}
      >
        For selected businesses worldwide, I create a quick homepage redesign
        preview — so you can see the transformation before committing to
        anything.
      </p>
      <a
        href="#audit"
        className="btn"
        style={{
          marginTop: "40px",
          background: "var(--secondary)",
          color: "var(--text)",
        }}
      >
        Request Your Preview <Palette size={18} style={{ marginLeft: "8px" }} />
      </a>
    </Reveal>

    {/* Mock preview cards */}
    <Reveal delay={200}>
      <div
        style={{
          marginTop: "64px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          maxWidth: "900px",
          margin: "64px auto 0",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "32px",
            border: "1px solid rgba(255,255,255,0.15)",
            textAlign: "left",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.8rem",
              margin: "0 0 12px",
              maxWidth: "none",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Before
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Generic homepage",
              "Hard-to-find booking",
              "Unclear services",
              "No trust signals",
            ].map((t, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "rgba(255,100,100,0.6)",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.65)",
                    maxWidth: "none",
                  }}
                >
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            background: "rgba(194, 159, 109, 0.15)",
            borderRadius: "24px",
            padding: "32px",
            border: "1px solid var(--secondary)",
            textAlign: "left",
          }}
        >
          <p
            style={{
              color: "var(--secondary)",
              fontSize: "0.8rem",
              margin: "0 0 12px",
              maxWidth: "none",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            After
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Premium, calm design",
              "1-click booking path",
              "Clear unique offer",
              "Instant trust signals",
            ].map((t, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <CheckCircle
                  size={16}
                  style={{ color: "var(--secondary)", flexShrink: 0 }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.9)",
                    maxWidth: "none",
                  }}
                >
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Recent Projects ─────────────────── */
const RecentProjects = () => (
  <section className="section" id="projects">
    <Reveal>
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div className="badge">Portfolio</div>
        <h2 style={{ marginTop: "16px" }}>
          Recent{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            Success Stories.
          </span>
        </h2>
        <p style={{ margin: "16px auto 0", textAlign: "center" }}>
          Websites that don't just look calm — they drive real bookings.
        </p>
      </div>
    </Reveal>

    <div className="grid-bento">
      {[
        {
          title: "Aura Bern",
          category: "Medical Spa • Bern, Switzerland",
          image: auraBernImg,
          link: "https://sahedalomsumit.github.io/aurabern.ch/",
          description:
            "A premium medical spa website focusing on high-end aesthetics and conversion-driven design.",
        },
        {
          title: "Jenni Wellbeing",
          category: "Wellness Studio • Switzerland",
          image: jenniImg,
          link: "https://sahedalomsumit.github.io/jenni-wellbeing.ch/",
          description:
            "Redesigning the online presence for a holistic wellbeing studio to reflect calm and professionality.",
        },
      ].map((project, i) => (
        <Reveal key={i} delay={i * 100} style={{ gridColumn: "span 6" }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card"
            style={{
              padding: 0,
              overflow: "hidden",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                height: "340px",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                className="glass"
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  padding: "6px 12px",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                }}
              >
                View Live Site{" "}
                <ArrowRight
                  size={14}
                  style={{ verticalAlign: "middle", marginLeft: "4px" }}
                />
              </div>
            </div>
            <div style={{ padding: "32px" }}>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--secondary)",
                  fontWeight: 700,
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {project.category}
              </div>
              <h3 style={{ marginBottom: "12px", fontSize: "1.6rem" }}>
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  maxWidth: "none",
                }}
              >
                {project.description}
              </p>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);

/* ─────────────────── About ─────────────────── */
const About = () => (
  <section id="about" className="section">
    <div className="grid-bento">
      <div
        style={{
          gridColumn: "span 5",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Reveal
          delay={0}
          className="bento-card"
          style={{
            overflow: "hidden",
            padding: 0,
            minHeight: "420px",
            background: "var(--bg-tint)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={blobSvg}
            style={{
              position: "absolute",
              width: "120%",
              height: "120%",
              opacity: 0.15,
              transform: "scale(1.2)",
              filter: "blur(40px)",
            }}
            alt=""
          />
          <img
            src={blobSvg}
            style={{
              position: "absolute",
              width: "130%",
              height: "130%",
              opacity: 0.8,
              zIndex: 1,
            }}
            alt=""
          />
          <img
            src={profileImg}
            alt="Sahed Alom Sumit, web designer specializing in the Swiss market"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              position: "relative",
              zIndex: 2,
              marginTop: "20px",
            }}
          />
        </Reveal>

        <Reveal delay={100}>
          <div
            className="contact-card bento-card"
            style={{ padding: "24px", gap: "16px", cursor: "default" }}
          >
            <div
              className="badge"
              style={{
                marginBottom: "8px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              Direct Contact
            </div>
            <a href="mailto:sahedalomsumit@gmail.com" className="contact-item">
              <div className="contact-icon">
                <Mail size={18} />
              </div>
              sahedalomsumit@gmail.com
            </a>
            <a
              href="https://wa.me/358415765539"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <Phone size={18} />
              </div>
              +358 41 576 5539 (WhatsApp)
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={150}
        className="bento-card"
        style={{
          gridColumn: "span 7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="badge">About</div>
        <h2 style={{ marginTop: "16px", marginBottom: "16px" }}>
          Hi, I'm Sahed.
        </h2>
        <p
          style={{
            maxWidth: "none",
            fontSize: "1.3rem",
            lineHeight: 1.4,
            fontWeight: 600,
            color: "var(--primary)",
            marginBottom: "24px",
          }}
        >
          Modern web design. Clean development. <br />
          AI automation that makes sense.
        </p>

        <p style={{ maxWidth: "none", fontSize: "1.1rem", lineHeight: 1.7 }}>
          Your website problem becomes my problem the moment you share it. I
          don't stop until it's solved—that's how I'm wired. That's why I call
          this my passion, not my job.
        </p>

        <p
          style={{
            maxWidth: "none",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            marginTop: "16px",
          }}
        >
          For 5+ years, I've worked with founders, brands, and agencies
          worldwide—turning rough ideas into sites that load fast, look right,
          and actually convert. I work at the intersection of design and
          full-stack development. I care about the vibe of a page as much as the
          code behind it.
        </p>

        <p
          style={{
            maxWidth: "none",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            marginTop: "16px",
          }}
        >
          I also understand the business side because of my bachelor's in
          Business IT. Based in Helsinki, I work with clients worldwide to
          ensure nothing I build is just pretty—it works toward your goals.
        </p>
        <a
          href="#audit"
          className="btn btn-primary"
          style={{ marginTop: "32px", alignSelf: "flex-start" }}
        >
          Work with Me <ArrowRight size={18} style={{ marginLeft: "8px" }} />
        </a>
      </Reveal>
    </div>
  </section>
);

/* ─────────────────── Final CTA ─────────────────── */
const FinalCTA = () => (
  <section
    className="section"
    style={{
      textAlign: "center",
      background: "var(--primary)",
      borderRadius: "60px 60px 0 0",
      color: "white",
      paddingBottom: "160px",
    }}
  >
    <Reveal>
      <h2 style={{ color: "white", maxWidth: "700px", margin: "0 auto" }}>
        If your website isn't bringing you bookings,{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          it's costing you clients.
        </span>
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          margin: "24px auto 0",
        }}
      >
        Let's fix it — with a clear plan and 25% off your first project.
      </p>
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#audit"
          className="btn"
          style={{ background: "var(--secondary)", color: "var(--text)" }}
        >
          Get Your Free Homepage Audit{" "}
          <ArrowRight size={20} style={{ marginLeft: "10px" }} />
        </a>
      </div>
      <p
        style={{
          margin: "24px auto 0",
          fontSize: "0.9rem",
          color: "rgba(255,255,255,0.5)",
          maxWidth: "none",
        }}
      >
        No credit card. No commitment. Just clarity.
      </p>
    </Reveal>
  </section>
);

/* ─────────────────── App ─────────────────── */
export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <LimitedOffer />
      <Outcomes />
      <FreeAudit />
      <Process />
      <VisualPreview />
      <RecentProjects />
      <About />
      <FinalCTA />

      {/* ─────────────────── Floating Audit Button ─────────────────── */}
      <FloatingAuditButton />
    </div>
  );
}

/* ─────────────────── Floating Audit Button Component ─────────────────── */
const FloatingAuditButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.5,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="floating-audit-badge"
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 100,
      }}
    >
      <motion.a
        href="#audit"
        className="glass"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 24px",
          borderRadius: "100px",
          textDecoration: "none",
          boxShadow: "var(--shadow-lg)",
          border: "1.5px solid var(--secondary)",
          color: "var(--text)",
          fontWeight: 600,
          whiteSpace: "nowrap",
          cursor: "pointer",
          willChange: "transform",
          transform: "translateZ(0)",
          WebkitFontSmoothing: "antialiased",
          backfaceVisibility: "hidden",
        }}
        whileHover={{
          scale: 1.05,
          borderColor: "var(--primary)",
        }}
        whileTap={{ scale: 0.98 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            background: "var(--primary)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            boxShadow: "0 4px 12px rgba(75, 99, 68, 0.2)",
          }}
        >
          <Search size={22} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}
        >
          <span
            style={{
              fontSize: "0.850rem",
              display: "block",
              color: "var(--text-muted)",
              fontWeight: 500,
            }}
          >
            Get Your
          </span>
          <span
            style={{
              fontSize: "1.05rem",
              color: "var(--primary)",
              fontWeight: 700,
            }}
          >
            Free Audit
          </span>
        </div>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "var(--bg-tint)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "4px",
          }}
        >
          <ArrowRight size={18} style={{ color: "var(--secondary)" }} />
        </div>
      </motion.a>
    </motion.div>
  );
};

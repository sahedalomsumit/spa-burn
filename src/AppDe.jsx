import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import heroImg from "./assets/hero_spa_sage.png";
import profileImg from "./assets/sahedalomsumit-profile-removebg-preview.png";
import blobSvg from "./assets/blob.svg";
import "./App.css";

/* ─────────────────── Scroll Reveal Hook ─────────────────── */
function Reveal({ children, delay = 0, className = "", style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
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

/* ─────────────────── Hero ─────────────────── */
const Hero = () => (
  <section
    className="section"
    style={{
      paddingTop: "100px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Reveal>
      <div className="badge">Mit Sitz in Helsinki, Finnland</div>
    </Reveal>

    <Reveal delay={100}>
      <h1 style={{ marginTop: "16px", maxWidth: "900px" }}>
        Erhalten Sie mehr Spa-Buchungen in der Schweiz —{" "}
        <span className="text-italic" style={{ color: "var(--primary)" }}>
          Ohne für Werbung zu bezahlen
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
        I redesign spa websites for businesses in Switzerland so visitors instantly{" "}
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
          Kostenloses Homepage-Audit anfordern{" "}
          <ArrowRight size={20} style={{ marginLeft: "10px" }} />
        </a>
        <div className="offer-pill">
          <Star size={16} style={{ color: "var(--secondary)" }} />
          <span>25% Rabatt auf Ihr erstes Projekt — begrenzte Plätze in der Schweiz</span>
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
          alt="Premium spa interior showcasing a calm, minimalist design aesthetic in Switzerland"
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
            Wir betreuen die Schweiz
          </h3>
          <p style={{ fontSize: "0.95rem", margin: 0, maxWidth: "none" }}>
            Spezialisierte Strategie für den Schweizer Wellness-Markt.
          </p>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Problem ─────────────────── */
const Problem = () => (
  <section className="section">
    <Reveal>
      <h2 style={{ maxWidth: "720px" }}>
        Viele Spa-Websites in der Schweiz sehen "ganz okay" aus…{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          verlieren aber heimlich jeden Tag Kunden.
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
          Unsichtbare Differenzierung
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
          Probleme auf dem Handy
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
          Versteckte Buchung
        </h3>
        <p>
          Die Buchung ist versteckt oder verwirrend — also geben Besucher auf, bevor sie handeln.
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
          Unpassende Ästhetik
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
          Also gehen die Leute — und wählen ein anderes Spa in der Schweiz.
        </p>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Solution ─────────────────── */
const Solution = () => (
  <section
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
            Die Lösung
          </div>
          <h2 style={{ color: "white", marginTop: "16px" }}>
            Verwandeln Sie Ihre Website in eine{" "}
            <span className="text-italic" style={{ color: "var(--secondary)" }}>
              Kundenbuchungs-Erfahrung.
            </span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              marginTop: "24px",
              maxWidth: "none",
            }}
          >
            I help spa and wellness businesses in Switzerland redesign their website
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
            Loslegen <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
            title: "Klarer Weg von Besuch → Buchung",
            text: "Eine reibungslose Reise vom ersten Klick bis zum bestätigten Termin.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Starker erster Eindruck",
            text: "Hochwertiges, ruhiges Design schafft innerhalb von Sekunden Vertrauen.",
          },
          {
            icon: <Palette size={24} />,
            title: "Markenkonformes Design",
            text: "Ein Design, das die Identität und Atmosphäre Ihres Spas authentisch widerspiegelt.",
          },
          {
            icon: <Smartphone size={24} />,
            title: "Reibungslose mobile Nutzung",
            text: "Fehlerfrei auf allen Geräten — besonders auf den Smartphones Ihrer Kunden.",
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
          Ergebnis: Mehr Besucher werden zu zahlenden Kunden.
        </p>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Begrenztes Angebot ─────────────────── */
const LimitedOffer = () => (
  <section className="section">
    <Reveal>
      <div className="offer-card">
        <div
          className="badge"
          style={{ background: "var(--secondary)", color: "white" }}
        >
          Begrenztes Angebot
        </div>
        <h2 style={{ marginTop: "16px", maxWidth: "700px" }}>
          25% Rabatt für Spa-Unternehmen{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            in der Schweiz
          </span>
        </h2>
        <p style={{ fontSize: "1.2rem", marginTop: "24px" }}>
          Um den Einstieg ohne volles Risiko zu erleichtern:
        </p>
        <ul className="offer-list">
          <li>
            <CheckCircle
              size={20}
              style={{ color: "var(--primary)", flexShrink: 0 }}
            />
            <span>25% Rabatt auf Ihr erstes Projekt</span>
          </li>
          <li>
            <CheckCircle
              size={20}
              style={{ color: "var(--primary)", flexShrink: 0 }}
            />
            <span>Verfügbar für eine begrenzte Anzahl lokaler Spa-Unternehmen</span>
          </li>
          <li>
            <CheckCircle
              size={20}
              style={{ color: "var(--primary)", flexShrink: 0 }}
            />
            <span>Ein einfacher Weg, Ihre Website ohne volles Risiko zu verbessern</span>
          </li>
        </ul>
        <a
          href="#audit"
          className="btn btn-primary"
          style={{ marginTop: "40px" }}
        >
          Sichern Sie sich Ihren Platz <ArrowRight size={18} style={{ marginLeft: "8px" }} />
        </a>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Outcomes ─────────────────── */
const Outcomes = () => (
  <section className="section">
    <Reveal>
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h2>
          Was Sie{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            tatsächlich bekommen.
          </span>
        </h2>
        <p style={{ margin: "16px auto 0", textAlign: "center" }}>
          Echte, messbare Ergebnisse — nicht nur eine schönere Website.
        </p>
      </div>
    </Reveal>

    <div className="grid-bento">
      {[
        {
          icon: <MousePointerClick size={36} />,
          title: "Mehr Buchungen über Ihre Website",
          text: "Ihre Besucher zögern nicht — sie handeln. Klare, überzeugende CTAs führen sie vom Interesse zum Termin.",
          size: "span 6",
          accent: true,
        },
        {
          icon: <ShieldCheck size={36} />,
          title: "Sofortiges Vertrauen",
          text: "Ihre Website spiegelt die wahre Qualität Ihres Spas wider — bevor sie überhaupt durch die Tür treten.",
          size: "span 6",
        },
        {
          icon: <Smartphone size={36} />,
          title: "Bessere mobile Erfahrung",
          text: "Einfache Buchung vom Handy — woher die meisten Kunden kommen. Keine Reibung, keine Verwirrung.",
          size: "span 4",
        },
        {
          icon: <Zap size={36} />,
          title: "Mehr Unabhängigkeit",
          text: "Weniger Abhängigkeit von Buchungsplattformen von Drittanbietern, die Ihre Marge und Daten nehmen.",
          size: "span 4",
        },
        {
          icon: <Link size={36} />,
          title: "Stärkere lokale Präsenz",
          text: "Stechen Sie aus den Spa-Unternehmen in der Schweiz mit einer Website hervor, die so aussieht, als würde sie an die Spitze gehören.",
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

/* ─────────────────── Kostenloses Audit Section ─────────────────── */
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
          <div className="badge">Kostenlos — Ohne Bedingungen</div>
          <h2 style={{ marginTop: "16px", maxWidth: "580px" }}>
            Ich überprüfe persönlich Ihre Homepage und zeige Ihnen{" "}
            <span className="text-italic" style={{ color: "var(--primary)" }}>
              genau das, was Sie Buchungen kostet.
            </span>
          </h2>
          <div style={{ marginTop: "40px", display: "grid", gap: "24px" }}>
            {[
              {
                icon: <Search size={20} />,
                text: "Wo Sie Kunden verlieren",
              },
              {
                icon: <NavigationOff size={20} />,
                text: "Was Buchungen blockiert",
              },
              { icon: <Zap size={20} />, text: "Was schnell verbessert werden kann" },
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
            Kurz, klar und praktisch.
          </p>
        </div>

        <div>
          <div
            className="badge"
            style={{ background: "var(--secondary)", color: "white" }}
          >
            Begrenzte Plätze in der Schweiz
          </div>
          <h3
            style={{
              fontSize: "1.8rem",
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            Fordern Sie Ihr kostenloses Audit an
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
  const [state, setState] = useState({ name: "", email: "", url: "", phone: "", notes: "" });
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
      const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/;
      if (!value) {
        error = "Website-URL is required";
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
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: [
            {
              ...state,
              date: new Date().toLocaleString("de-DE")
            }
          ]
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Übermittlung fehlgeschlagen");
      }
    } catch (error) {
      console.error("Fehler beim Übermitteln des Leads:", error);
      alert("Etwas ist schief gelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.");
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
          Sie stehen auf der Liste!
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
          <legend>Vollständiger Name <span className="required">*</span></legend>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              placeholder="e.g. Jakob Schweizer"
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
          <legend>E-Mail <span className="required">*</span></legend>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="e.g. jakob@spa-schweiz.ch"
              value={state.email}
              onBlur={handleBlur}
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
                if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
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
          <legend>Website-URL <span className="required">*</span></legend>
          <div className="input-wrapper">
            <input
              type="text"
              name="url"
              placeholder="e.g. www.spa-schweiz-wellness.ch"
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
          <Plus size={16} /> WhatsApp-Nummer & Notizen hinzufügen
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
              <legend>WhatsApp-Nummer</legend>
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
              <legend>Sonstige Anmerkungen?</legend>
              <div className="input-wrapper">
                <textarea
                  name="notes"
                  placeholder="Erzählen Sie mir mehr über Ihre Ziele oder spezifischen Anliegen..."
                  value={state.notes}
                  onChange={(e) => setState({ ...state, notes: e.target.value })}
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
          "Wird gesendet…"
        ) : (
          <>
            Fordern Sie Ihr kostenloses Audit an{" "}
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
        Kein Spam. Kein Verkaufsdruck. Nur klare Erkenntnisse.
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
          Wie es{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            funktioniert.
          </span>
        </h2>
        <p style={{ margin: "16px auto 0", textAlign: "center" }}>
          Vier einfache Schritte. Null Verpflichtung, bis Sie bereit sind.
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
          title: "Sie senden Ihre Website",
          text: "Geben Sie Ihren Website-Link an — dauert 30 Sekunden.",
        },
        {
          step: "02",
          icon: <Search size={28} />,
          title: "Ich überprüfe sie",
          text: "Ich prüfe Ihre Homepage persönlich auf Lücken bei der Konvertierung.",
        },
        {
          step: "03",
          icon: <CheckCircle size={28} />,
          title: "Sie erhalten klare Ideen",
          text: "Eine präzise, umsetzbare Aufschlüsselung dessen, was zu beheben ist und warum.",
        },
        {
          step: "04",
          icon: <Zap size={28} />,
          title: "Wir verbessern sie gemeinsam",
          text: "Wenn Sie möchten — wir bauen es (mit 25% Rabatt auf Ihr erstes Projekt).",
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
        Für ausgewählte Unternehmen in der Schweiz
      </div>
      <h2
        style={{
          color: "white",
          marginTop: "20px",
          maxWidth: "680px",
          margin: "20px auto 0",
        }}
      >
        Sehen Sie die Verbesserung{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          bevor Sie sich entscheiden.
        </span>
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          margin: "24px auto 0",
        }}
      >
        For selected businesses in Switzerland, I create a quick homepage redesign
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
        Fordern Sie Ihre Vorschau an <Palette size={18} style={{ marginLeft: "8px" }} />
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
            Vorher
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Allgemeine Homepage",
              "Schwer auffindbare Buchung",
              "Unklare Dienstleistungen",
              "Keine Vertrauenssignale",
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
            Nachher
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Hochwertiges, ruhiges Design",
              "1-Klick-Buchungspfad",
              "Klares, einzigartiges Angebot",
              "Sofortige Vertrauenssignale",
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
            alt="Sahed Alom Sumit, Webdesigner spezialisiert auf den Schweizer Markt"
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
          <div className="contact-card bento-card" style={{ padding: "24px", gap: "16px", cursor: "default" }}>
            <div className="badge" style={{ marginBottom: "8px", display: "flex", justifyContent: "flex-start" }}>Direkter Kontakt</div>
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
        <div className="badge">Über mich</div>
        <h2 style={{ marginTop: "16px", marginBottom: "16px" }}>
          Hallo, ich bin Sahed.
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
          Modernes Webdesign. Saubere Entwicklung. <br />
          KI-Automatisierung, die Sinn macht.
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
          Business IT. Based in Helsinki, I work with clients in Switzerland and
          worldwide to ensure nothing I build is just pretty—it works toward
          your goals.
        </p>
        <a
          href="#audit"
          className="btn btn-primary"
          style={{ marginTop: "32px", alignSelf: "flex-start" }}
        >
          Arbeiten Sie mit mir zusammen <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
        Wenn Ihre Website Ihnen keine Buchungen bringt,{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          kostet sie Sie Kunden.
        </span>
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          margin: "24px auto 0",
        }}
      >
        Lassen Sie uns das beheben — mit einem klaren Plan und 25% Rabatt auf Ihr erstes Projekt.
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
          Holen Sie sich Ihr Free Homepage Audit{" "}
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
        Keine Kreditkarte. Keine Verpflichtung. Nur Klarheit.
      </p>
    </Reveal>
  </section>
);

/* ─────────────────── App ─────────────────── */
function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Hero />
      <Problem />
      <Solution />
      <LimitedOffer />
      <Outcomes />
      <FreeAudit />
      <Process />
      <VisualPreview />
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
            Holen Sie sich Ihr
          </span>
          <span
            style={{
              fontSize: "1.05rem",
              color: "var(--primary)",
              fontWeight: 700,
            }}
          >
            Kostenloses Audit
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

export default App;

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
      <div className="badge">Con sede a Helsinki, Finlandia</div>
    </Reveal>

    <Reveal delay={100}>
      <h1 style={{ marginTop: "16px", maxWidth: "900px" }}>
        Ottieni più prenotazioni Spa in Svizzera —{" "}
        <span className="text-italic" style={{ color: "var(--primary)" }}>
          Senza pagare per le pubblicità
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
        I redesign spa websites for businesses in Svizzera so visitors instantly{" "}
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
          Richiedi un Audit Gratuito della Homepage{" "}
          <ArrowRight size={20} style={{ marginLeft: "10px" }} />
        </a>
        <div className="offer-pill">
          <Star size={16} style={{ color: "var(--secondary)" }} />
          <span>
            Sconto del 25% sul tuo primo progetto — posti limitati in Svizzera
          </span>
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
          alt="Premium spa interior showcasing a calm, minimalist design aesthetic in Svizzera"
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
            A servizio della Svizzera
          </h3>
          <p style={{ fontSize: "0.95rem", margin: 0, maxWidth: "none" }}>
            Strategia specializzata per il mercato del benessere svizzero.
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
        Molti siti web spa in Svizzera sembrano "ok"…{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          ma silenziosamente perdono clienti ogni giorno.
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
          Differenziazione invisibile
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
          Problemi su dispositivi mobili
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
          Prenotazione nascosta
        </h3>
        <p>
          La prenotazione è nascosta o confusa — quindi i visitatori si
          arrendono prima di agire.
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
          Estetica non allineata
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
          Quindi le persone se ne vanno — e scelgono un'altra spa in Svizzera.
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
            La Soluzione
          </div>
          <h2 style={{ color: "white", marginTop: "16px" }}>
            Trasforma il tuo sito web in{" "}
            <span className="text-italic" style={{ color: "var(--secondary)" }}>
              un'esperienza di prenotazione per clienti.
            </span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              marginTop: "24px",
              maxWidth: "none",
            }}
          >
            I help spa and wellness businesses in Svizzera redesign their website
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
            Inizia ora <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
            title: "Percorso Visita → Prenotazione Chiaro",
            text: "Un viaggio senza intoppi dal primo clic alla prenotazione confermata.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Una forte prima impressione",
            text: "Un design premium e calmo stabilisce fiducia in pochi secondi.",
          },
          {
            icon: <Palette size={24} />,
            title: "Design allineato al brand",
            text: "Un design che riflette autenticamente l'identità e l'atmosfera della tua spa.",
          },
          {
            icon: <Smartphone size={24} />,
            title: "Esperienza mobile fluida",
            text: "Impeccabile su tutti i dispositivi — specialmente sui telefoni che usano i tuoi clienti.",
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
          Risultato: Più visitatori diventano clienti paganti.
        </p>
      </div>
    </Reveal>
  </section>
);

/* ─────────────────── Offerta Limitata ─────────────────── */
const LimitedOffer = () => (
  <section className="section">
    <Reveal>
      <div className="offer-card">
        <div
          className="badge"
          style={{ background: "var(--secondary)", color: "white" }}
        >
          Offerta Limitata
        </div>
        <h2 style={{ marginTop: "16px", maxWidth: "700px" }}>
          Sconto del 25% per Aziende Spa{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            in Svizzera
          </span>
        </h2>
        <p style={{ fontSize: "1.2rem", marginTop: "24px" }}>
          Per facilitare l'inizio senza alcun rischio:
        </p>
        <ul className="offer-list">
          <li>
            <CheckCircle
              size={20}
              style={{ color: "var(--primary)", flexShrink: 0 }}
            />
            <span>Sconto del 25% sul tuo primo progetto</span>
          </li>
          <li>
            <CheckCircle
              size={20}
              style={{ color: "var(--primary)", flexShrink: 0 }}
            />
            <span>Disponibile per un numero limitato di spa locali</span>
          </li>
          <li>
            <CheckCircle
              size={20}
              style={{ color: "var(--primary)", flexShrink: 0 }}
            />
            <span>
              Un modo semplice per migliorare il tuo sito senza pieno rischio
            </span>
          </li>
        </ul>
        <a
          href="#audit"
          className="btn btn-primary"
          style={{ marginTop: "40px" }}
        >
          Prenota il tuo posto{" "}
          <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
          Quello che tu{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            ottieni realmente.
          </span>
        </h2>
        <p style={{ margin: "16px auto 0", textAlign: "center" }}>
          Risultati reali e misurabili — non solo un sito web più bello.
        </p>
      </div>
    </Reveal>

    <div className="grid-bento">
      {[
        {
          icon: <MousePointerClick size={36} />,
          title: "Più prenotazioni dal tuo sito web",
          text: "I tuoi visitatori non esitano — agiscono. CTA chiare e persuasive li guidano dall'interesse all'appuntamento.",
          size: "span 6",
          accent: true,
        },
        {
          icon: <ShieldCheck size={36} />,
          title: "Fiducia Immediata",
          text: "Il tuo sito web riflette la vera qualità della tua spa — prima ancora che entrino dalla porta.",
          size: "span 6",
        },
        {
          icon: <Smartphone size={36} />,
          title: "Migliore esperienza mobile",
          text: "Prenotazione semplice dal telefono — da dove proviene la maggior parte dei clienti. Nessuna frizione, nessuna confusione.",
          size: "span 4",
        },
        {
          icon: <Zap size={36} />,
          title: "Maggiore Indipendenza",
          text: "Minore dipendenza dalle piattaforme di prenotazione di terze parti che prendono i tuoi margini e dati.",
          size: "span 4",
        },
        {
          icon: <Link size={36} />,
          title: "Presenza locale più forte",
          text: "Stand out among spa businesses in Svizzera with a site that looks like it belongs at the top.",
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

/* ─────────────────── Audit Gratuito Section ─────────────────── */
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
          <div className="badge">Gratuito — Senza alcun vincolo</div>
          <h2 style={{ marginTop: "16px", maxWidth: "580px" }}>
            Esaminerò personalmente la tua homepage e ti mostrerò{" "}
            <span className="text-italic" style={{ color: "var(--primary)" }}>
              esattamente cosa ti sta costando le prenotazioni.
            </span>
          </h2>
          <div style={{ marginTop: "40px", display: "grid", gap: "24px" }}>
            {[
              {
                icon: <Search size={20} />,
                text: "Dove stai perdendo clienti",
              },
              {
                icon: <NavigationOff size={20} />,
                text: "Cosa sta bloccando le prenotazioni",
              },
              {
                icon: <Zap size={20} />,
                text: "Cosa può essere migliorato rapidamente",
              },
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
            Breve, chiaro e pratico.
          </p>
        </div>

        <div>
          <div
            className="badge"
            style={{ background: "var(--secondary)", color: "white" }}
          >
            Limited Slots in Svizzera
          </div>
          <h3
            style={{
              fontSize: "1.8rem",
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            Richiedi il tuo Audit gratuito
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
        error = "URL del Sito is required";
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
              date: new Date().toLocaleString("it-IT"),
            },
          ],
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Invio fallito");
      }
    } catch (error) {
      console.error("Errore durante l'invio del lead:", error);
      alert("Qualcosa è andato storto. Riprova o contattami direttamente.");
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
          Sei nella lista!
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
          <legend>Nome Completo <span className="required">*</span></legend>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              placeholder="e.g. Jakob Svizzero"
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
          <legend>Email <span className="required">*</span></legend>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="e.g. jakob@spa-svizzera.ch"
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
          <legend>URL del Sito <span className="required">*</span></legend>
          <div className="input-wrapper">
            <input
              type="text"
              name="url"
              placeholder="e.g. www.spa-svizzera-wellness.ch"
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
          <Plus size={16} /> Aggiungi numero whatsapp e note
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
              <legend>Numero WhatsApp</legend>
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
              <legend>Eventuali note specifiche?</legend>
              <div className="input-wrapper">
                <textarea
                  name="notes"
                  placeholder="Dimmi di più sui tuoi obiettivi o preoccupazioni specifiche..."
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
          "Invio in corso…"
        ) : (
          <>
            Richiedi il tuo Audit gratuito{" "}
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
        Niente spam. Niente pressione di vendita. Solo consigli chiari.
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
          Come{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            funziona.
          </span>
        </h2>
        <p style={{ margin: "16px auto 0", textAlign: "center" }}>
          Quattro semplici passi. Nessun impegno finché non sei pronto.
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
          title: "Invia il tuo sito web",
          text: "Inserisci il link del tuo sito web — bastano 30 secondi.",
        },
        {
          step: "02",
          icon: <Search size={28} />,
          title: "Lo esamino io",
          text: "Esamino personalmente la tua homepage per individuare gap di conversione.",
        },
        {
          step: "03",
          icon: <CheckCircle size={28} />,
          title: "Ottieni idee chiare",
          text: "Un'analisi concisa e pratica di cosa correggere e perché.",
        },
        {
          step: "04",
          icon: <Zap size={28} />,
          title: "Lo miglioriamo insieme",
          text: "Se vuoi — lo costruiamo (con uno sconto del 25% sul tuo primo progetto).",
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
        For Selected Businesses in Svizzera
      </div>
      <h2
        style={{
          color: "white",
          marginTop: "20px",
          maxWidth: "680px",
          margin: "20px auto 0",
        }}
      >
        Guarda il miglioramento{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          prima di decidere.
        </span>
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          margin: "24px auto 0",
        }}
      >
        For selected businesses in Svizzera, I create a quick homepage redesign
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
        Richiedi la TUA Anteprima{" "}
        <Palette size={18} style={{ marginLeft: "8px" }} />
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
            Prima
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Homepage generica",
              "Prenotazioni difficili da trovare",
              "Servizi poco chiari",
              "Nessun segnale di fiducia",
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
            Dopo
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Design premium e calmo",
              "Percorso di prenotazione in 1 clic",
              "Offerta unica e chiara",
              "Segnali di fiducia istantanei",
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
            alt="Sahed Alom Sumit, web designer specializzato nel mercato svizzero"
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
            <div className="badge" style={{ marginBottom: "8px", display: "flex", justifyContent: "flex-start" }}>Contatto Diretto</div>
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
        <div className="badge">Informazioni</div>
        <h2 style={{ marginTop: "16px", marginBottom: "16px" }}>
          Ciao, sono Sahed.
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
          Web design moderno. Sviluppo pulito. <br />
          Automazione IA che ha senso.
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
          Business IT. Based in Helsinki, I work with clients in Svizzera and
          worldwide to ensure nothing I build is just pretty—it works toward
          your goals.
        </p>
        <a
          href="#audit"
          className="btn btn-primary"
          style={{ marginTop: "32px", alignSelf: "flex-start" }}
        >
          Lavora con me <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
        Se il tuo sito non ti porta prenotazioni,{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          ti sta costando clienti.
        </span>
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          margin: "24px auto 0",
        }}
      >
        Risolviamolo — con un piano dettagliato e il 25% di sconto sul tuo primo
        progetto.
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
          Ottieni il Tuo Free Homepage Audit{" "}
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
        Nessuna carta di credito. Nessun impegno. Solo chiarezza.
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
            Ottieni il Tuo
          </span>
          <span
            style={{
              fontSize: "1.05rem",
              color: "var(--primary)",
              fontWeight: 700,
            }}
          >
            Audit Gratuito
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

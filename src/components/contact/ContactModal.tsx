import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { sendEmail } from "../../services/emailService";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEmail: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultEmail,
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const modalEl = modalRef.current;
    const focusableElements = modalEl?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    // Focus first element on open
    firstElement?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMessage("Por favor completa todos los campos.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    try {
      await sendEmail(form);
      setLoading(false);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setLoading(false);
      setStatus("error");
      setErrorMessage("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por email.");
      console.error(err);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        backgroundColor: "rgba(10, 16, 13, 0.8)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--s4)",
      }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="card forest"
        style={{
          maxWidth: "560px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          borderRadius: "var(--r-xl)",
          padding: "var(--s8)",
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.5)",
          border: "1px solid var(--border-2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "var(--s4)",
          }}
        >
          <span className="eyebrow" style={{ color: "var(--accent)" }}>
            Mensaje Directo
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border-2)",
              color: "var(--strong)",
              borderRadius: "var(--r-md)",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <h3 id="contact-modal-title" className="h3" style={{ marginTop: 0 }}>
          Hablemos sobre tu proyecto
        </h3>

        <p className="p" style={{ marginBottom: "var(--s6)" }}>
          O escríbeme directo a{" "}
          <a
            href={`mailto:${defaultEmail}`}
            style={{ textDecoration: "underline", fontWeight: 600 }}
          >
            {defaultEmail}
          </a>
        </p>

        {status === "success" ? (
          <div
            style={{
              background: "rgba(74, 201, 120, 0.15)",
              border: "1px solid #4ac978",
              color: "#e8faed",
              padding: "var(--s4)",
              borderRadius: "var(--r-md)",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, fontWeight: 700, fontSize: "17px" }}>
              ¡Mensaje enviado con éxito!
            </p>
            <p style={{ margin: "var(--s2) 0 0", fontSize: "14px", opacity: 0.9 }}>
              Gracias por escribirme. Te responderé a la brevedad.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn pri"
              style={{ marginTop: "var(--s4)" }}
            >
              Listo
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "var(--s4)" }}>
            {status === "error" && (
              <div
                style={{
                  background: "rgba(224, 107, 90, 0.15)",
                  border: "1px solid #e06b5a",
                  color: "#ffc8c2",
                  padding: "var(--s3)",
                  borderRadius: "var(--r-md)",
                  fontSize: "14px",
                }}
              >
                {errorMessage}
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="mono lab"
                style={{ display: "block", marginBottom: "var(--s1)" }}
              >
                Tu Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nombre o empresa"
                required
                style={{
                  width: "100%",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-2)",
                  color: "var(--strong)",
                  padding: "var(--s3) var(--s4)",
                  borderRadius: "var(--r-md)",
                  outline: "none",
                  fontSize: "15px",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mono lab"
                style={{ display: "block", marginBottom: "var(--s1)" }}
              >
                Tu Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                required
                style={{
                  width: "100%",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-2)",
                  color: "var(--strong)",
                  padding: "var(--s3) var(--s4)",
                  borderRadius: "var(--r-md)",
                  outline: "none",
                  fontSize: "15px",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mono lab"
                style={{ display: "block", marginBottom: "var(--s1)" }}
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre el reto, objetivos o cronograma..."
                rows={4}
                required
                style={{
                  width: "100%",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-2)",
                  color: "var(--strong)",
                  padding: "var(--s3) var(--s4)",
                  borderRadius: "var(--r-md)",
                  outline: "none",
                  fontSize: "15px",
                  resize: "vertical",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "var(--s4)",
                justifyContent: "flex-end",
                marginTop: "var(--s2)",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                className="btn sec2"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn pri"
                disabled={loading}
                style={{ minWidth: "140px" }}
              >
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

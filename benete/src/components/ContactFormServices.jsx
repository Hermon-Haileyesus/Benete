import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "../css/ContactForm.css";
import { FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

// Validation schema
const schema = z
  .object({
    firstName: z.string().min(1, "Etunimi vaaditaan"),
    lastName: z.string().min(1, "Sukunimi vaaditaan"),
    email: z.string().email("Virheellinen sähköposti").or(z.literal("")),
    phone: z.string().or(z.literal("")),
    organization: z.string().optional(),
    role: z.string().optional(),
    message: z.string().optional(),
  })
  .refine((data) => data.email !== "" || data.phone !== "", {
    message: "Anna sähköposti tai puhelinnumero",
    path: ["email"],
  });

export default function ContactFormServices() {
  const { t } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setErrorMessage("");
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowPopup(true);
        reset();
      } else {
        setErrorMessage(t("contactFormError"));
      }
    } catch (error) {
      setErrorMessage(t("contactFormError"));
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section Service">
      <h2>{t("contactFormTitle")}</h2>
      <div className="contact-btn">
        <h3 className="how-step-title">{t("contactFormType")}</h3>
        <FaChevronDown />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        {/* Name Fields */}
        <div className="form-row">
          <div className="form-group">
            <input
              {...register("firstName")}
              placeholder={`${t("contactFormFirstName")}*`}
              className={errors.firstName ? "input-error" : ""}
            />
          </div>
          <div className="form-group">
            <input
              {...register("lastName")}
              placeholder={`${t("contactFormLastName")}*`}
              className={errors.lastName ? "input-error" : ""}
            />
          </div>
        </div>

        <h5 className="helper-text">{t("contactFormHelperText")}</h5>
        <div className="form-row">
          <div className="form-group">
            <input
              type="email"
              {...register("email")}
              placeholder={t("contactFormEmail")}
              className={errors.email ? "input-error" : ""}
            />
          </div>
          <div className="form-group">
            <input
              {...register("phone")}
              placeholder={t("contactFormPhone")}
              className={errors.phone ? "input-error" : ""}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              {...register("organization")}
              placeholder={t("contactFormOrganization")}
            />
          </div>
          <div className="form-group">
            <input
              {...register("role")}
              placeholder={t("contactFormRole")}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            rows="6"
            {...register("message")}
            placeholder={t("contactFormMessage")}
          />
        </div>

        {errorMessage && <p className="error-text">{errorMessage}</p>}

        <button
          type="submit"
          disabled={loading || !isValid}
          className={`submit-button ${isValid ? "active" : "inactive"}`}
        >
          {loading ? (
            <>
              <span className="spinner"></span> {t("contactFormSending")}
            </>
          ) : (
            t("contactFormSubmit")
          )}
        </button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h4>{t("contactFormSuccessH1")}</h4>
            <h5>{t("contactFormSuccessP")}</h5>
            <button onClick={() => setShowPopup(false)}>
              {t("contactFormSuccessB")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
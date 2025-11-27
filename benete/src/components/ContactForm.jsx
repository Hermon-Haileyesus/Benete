import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "../css/ContactForm.css";
import { FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

// Validation schema
const schema = z
  .object({
    firstName: z.string().min(1, "Etunimi vaaditaan"),
    lastName: z.string().min(1, "Sukunimi vaaditaan"),
    email: z
      .string()
      .email("Virheellinen sähköposti")
      .or(z.literal("")), 
    phone: z.string().or(z.literal("")), 
    organization: z.string().optional(),
    role: z.string().optional(),
    message: z.string().optional(),
  })
  .refine((data) => data.email !== "" || data.phone !== "", {
    message: "Anna sähköposti tai puhelinnumero",
    path: ["email"], 
  });

export default function ContactForm() {
  const { t } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);

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

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setShowPopup(true);
    reset();
  };

  return (
    <section className="contact-section Contact">
      <h2>{t("contact.form.title")}</h2>
      <div className="contact-btn" onClick={() => setShowForm((prev) => !prev)}>
        <h3 className="how-step-title">{t("contact.form.type")}</h3>
        <FaChevronDown className={showForm ? "arrow rotated" : "arrow"} />
      </div>

      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                {...register("firstName")}
                placeholder={`${t("contact.form.firstName")}*`}
                className={errors.firstName ? "input-error" : ""}
              />
            </div>
            <div className="form-group">
              <input
                {...register("lastName")}
                placeholder={`${t("contact.form.lastName")}*`}
                className={errors.lastName ? "input-error" : ""}
              />
            </div>
          </div>
          <h5 className="helper-text">{t("contact.form.helper-text")}</h5>
          
          <div className="form-row">
            
            <div className="form-group">
              <input
                type="email"
                {...register("email")}
                placeholder={t("contact.form.email")}
                className={errors.email ? "input-error" : ""}
              />
            </div>
            <div className="form-group">
              <input
                {...register("phone")}
                placeholder={t("contact.form.phone")}
                className={errors.phone ? "input-error" : ""}
              />
            </div>
          </div>

          
          <div className="form-row">
            <div className="form-group">
              <input
                {...register("organization")}
                placeholder={t("contact.form.organization")}
              />
            </div>
            <div className="form-group">
              <input {...register("role")} placeholder={t("contact.form.role")} />
            </div>
          </div>

          
          <div className="form-group">
            <textarea
              rows="6"
              {...register("message")}
              placeholder={t("contact.form.message")}
            />
          </div>

          <button
            type="submit"
            className={`submit-button ${isValid ? "active" : "inactive"}`}
          >
            {t("contact.form.submit")}
          </button>
        </form>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h4>{t("contact.form.successH1")}</h4>
            <h5>{t("contact.form.successP")}</h5>
            <button onClick={() => setShowPopup(false)}>
              {t("contact.form.successB")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
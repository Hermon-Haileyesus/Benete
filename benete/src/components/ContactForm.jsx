import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "../css/ContactForm.css";
import { FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

const schema = z.object({
  contactType: z.array(z.string()).min(1, "Valitse vähintään yksi vaihtoehto"),
  firstName: z.string().min(1, "Etunimi vaaditaan"),
  lastName: z.string().min(1, "Sukunimi vaaditaan"),
  email: z.string().email("Virheellinen sähköposti"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  role: z.string().optional(),
  message: z.string().optional(),
});

export default function ContactForm() {
  const { t } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
  if (showPopup) {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000); 

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
      contactType: [],
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

  const contactOptions = [
    { value: "general", label: t("contact.form.type.general") },
    { value: "assessment", label: t("contact.form.type.assessment") },
  ];

  return (
    <section className="contact-section">
      <h2>{t("contact.form.title")}</h2>
      <div className="contact-btn">
        <h3 className="how-step-title">{t("contact.form.type")}</h3>
        <FaChevronDown className="language-select-arrow" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        {/* Contact Type Checkboxes */}
        <div className="form-row">
          {contactOptions.map((opt) => (
            <div className="form-group" key={opt.value}>
              <label className="checkbox-item">
                <input type="checkbox" value={opt.value} {...register("contactType")} />
                {opt.label}
              </label>
            </div>
          ))}
        </div>
        {errors.contactType && <p className="error">{errors.contactType.message}</p>}

        {/* Name Fields */}
        <div className="form-row">
          <div className="form-group">
            <input {...register("firstName")} name="firstName" placeholder={`${t("contact.form.firstName")}*`} />
            {errors.firstName && <p className="error">{errors.firstName.message}</p>}
          </div>
          <div className="form-group">
            <input {...register("lastName")} name="lastName" placeholder={`${t("contact.form.lastName")}*`} />
            {errors.lastName && <p className="error">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="form-row">
          <div className="form-group">
            <input type="email" {...register("email")} name="email" placeholder={`${t("contact.form.email")}*`} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <input {...register("phone")} name="phone" placeholder={t("contact.form.phone")} />
          </div>
        </div>

        {/* Organization & Role */}
        <div className="form-row">
          <div className="form-group">
            <input {...register("organization")} name="organization" placeholder={t("contact.form.organization")} />
          </div>
          <div className="form-group">
            <input {...register("role")} name="role" placeholder={t("contact.form.role")} />
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <textarea rows="6" {...register("message")} name="message" placeholder={t("contact.form.message")} />
        </div>

        {/* Submit Button */}
        <button type="submit" className={`submit-button ${isValid ? "active" : "inactive"}`}>
          {t("contact.form.submit")}
        </button>
      </form>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h4>{t("contact.form.successH1")}</h4>
            <h5>{t("contact.form.successP")}</h5>
            <button onClick={() => setShowPopup(false)}>
            {t("contact.form.successB")}
            </button>
         </div>
        </div>)}


    </section>
  );
}
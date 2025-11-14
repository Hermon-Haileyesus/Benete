import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "../css/ContactForm.css";
import { FaChevronDown } from "react-icons/fa";

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
    alert("Kiitos! Viestisi on lähetetty.");
    reset();
  };

  const contactOptions = [
    { value: "general", label: "Yleinen yhteydenotto" },
    { value: "assessment", label: "Toimintakyvyn arviointi" },
  ];

  return (
    <section className="contact-section">
      <h2>Ota yhteyttä</h2>
      <div className="contact-btn">
        <h3>Olen kiinnostunut:</h3>
        <FaChevronDown className={`language-select-arrow }`} />
      </div> 
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        {/* Contact Type Checkboxes */}
        <div className="form-row">
          
            {contactOptions.map((opt) => (
              <div className="form-group">
              <label key={opt.value} className="checkbox-item">
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
            <input {...register("firstName")} name="firstName" placeholder="Etunimi*"/>
            {errors.firstName && <p className="error">{errors.firstName.message}</p>}
          </div>
          <div className="form-group">
            <input {...register("lastName")} name="lastName" placeholder="Sukunim*" />
            {errors.lastName && <p className="error">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="form-row">
          <div className="form-group">
            <input type="email" {...register("email")} name="email" placeholder="Sähköposti*"/>
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <input {...register("phone")} name="phone" placeholder="Puhelin(valinnainen)" />
          </div>
        </div>

        {/* Organization & Role */}
        <div className="form-row">
          <div className="form-group">
            <input {...register("organization")} name="organization" placeholder="Organisaatio(valinnainen)"/>
            {errors.organization && <p className="error">{errors.organization.message}</p>}
          </div>
          <div className="form-group">
            <input {...register("role")} name="role" placeholder="Roolisi(valinnainen)" />
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <textarea rows="6" {...register("message")} name="message" placeholder="Kirjoita viesti..." />
        </div>

        {/* Submit Button */}
        <button type="submit" className={`submit-button ${isValid ? "active" : "inactive"}`}>
          Lähetä
        </button>
      </form>
    </section>
  );
}
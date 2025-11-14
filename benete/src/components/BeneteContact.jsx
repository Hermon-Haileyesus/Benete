import React from "react";
import "../css/BeneteContact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
export default function BeneteContact() {
  return (
    <section className="benete-contact">
      <div className="contact-info">
        <h2>Benete Oy</h2>
        <p class="contact-page-text">
            <a href="https://goo.gl/maps/aG2SfvwMmmHQTetq8" target="_blank">Tykistökatu 4b<br/>20520 Turku, Suomi</a><br/> (5th kerros)
        </p>
        <p class="contact-page-text"><strong>Kari Bäckman, Toimitusjohtaja</strong></p>
        <div className="info-pack"> 
            <div className="icon-box icon">
                <FaPhoneAlt />
            </div> 
            <div>
                <p><strong>Puhelin</strong></p>
                <p> +358 50 052 4514</p>
            </div>
            
        </div>
        <div className="info-pack"> 
            <div className="icon-box icon">
                <FaEnvelope/>
            </div> 
            
            <div>
                <p><strong>Sähköposti</strong></p>
                <p><a href="mailto:kari.backman@benete.com"> kari.backman@benete.com</a></p>
            </div>
        </div>    
        <p><a href="#contact-form" className="contact-link">Ota yhteyttä tiimiimme &gt;</a></p>
      </div>

      <div className="map-container">
        <iframe  id="gmap_canvas" 
        src="https://maps.google.com/maps?q=Tykist%C3%B6katu%204b%2020520%20Turku,%20Finland&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        
      </div>
    </section>
  );
}
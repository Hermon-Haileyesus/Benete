import React, { useEffect, useState } from "react";
import "../css/CookieConsent.css";

export default function CookieConsent() {
  const [consent, setConsent] = useState(() => {
    const match = document.cookie.match(/(^| )cookieConsent=([^;]+)/);
    return match ? match[2] : null;
  });

  const [showBanner, setShowBanner] = useState(false);
  const [manualOpen, setManualOpen] = useState(false);

  useEffect(() => {
    if (consent === "accepted") {
      loadAnalytics();
    } else {
      // Show banner after 2s if no consent or denied
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  const handleAccept = () => {
    document.cookie = "cookieConsent=accepted; path=/; max-age=" + 60 * 60 * 24 * 365;
    setConsent("accepted");
    setShowBanner(false);
    setManualOpen(false);
  };

  const handleDeny = () => {
    document.cookie = "cookieConsent=denied; path=/; max-age=" + 60 * 60 * 24 * 365;
    setConsent("denied");
    setShowBanner(false);
    setManualOpen(false);
  };

  const loadAnalytics = () => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; // Replace with your GA ID
    scriptTag.async = true;
    document.head.appendChild(scriptTag);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX"); // Replace with your GA ID
  };

  const reopenBanner = () => {
    setManualOpen(true);
    setShowBanner(true);
  };

  if (consent === "accepted") return null;
 



  return (
  <>
    {/* Sticky button: only shows when banner is hidden and consent not accepted */}
    {!showBanner && !manualOpen && consent !== "accepted" && (
      <div className="cookie-sticky-wrapper">
        <div className="cookie-sticky" onClick={reopenBanner}>
          🍪 Evästeasetukset
        </div>
      </div>
    )}

    {/* Cookie banner: shows if no consent or user reopens manually */}
    {(showBanner || manualOpen) && (
      <div className="cc-window" role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc">
        <span id="cookieconsent:desc" className="cc-message">
            "Hyväksyn evästeet" -nappia painamalla hyväksyt, että evästeet tallennetaan laitteellesi.
          Näitä evästeitä käytetään tietojen keräämiseksi siitä, miten verkkosivustomme vierailijat käyttävät sivustoamme.
          Hyödynnämme kerättyä tietoa laatiaksemme yhteenvetoja ja kehittääksemme sivustoamme käyttäjäystävällisemmäksi.
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer nofollow" className="cc-link">Lisätietoa</a>
          
        </span>
        <div className="cc-compliance">
          <button className="cc-btn cc-deny" onClick={handleDeny}>Kieltäydy</button>
          <button className="cc-btn cc-allow" onClick={handleAccept}>Hyväksy evästeet</button>
        </div>
      </div>
    )}
  </>
);


}
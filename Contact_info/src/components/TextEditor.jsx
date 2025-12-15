import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TextEditor.css";

function ContentManager() {
  const [translations, setTranslations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edited, setEdited] = useState({});
  const navigate = useNavigate();

  const redirectToLogin = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        redirectToLogin();
        return;
      }

      try {
        const res = await fetch("/api/translations", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401) {
          redirectToLogin();
          return;
        }

        const data = await res.json();
        setTranslations(data);
      } catch (err) {
        console.error("Error fetching translations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (id, key, value) => {
    setEdited((prev) => ({
      ...prev,
      [id]: { ...prev[id], [key]: value },
    }));
  };

  const handleSave = async (id) => {
    const updates = edited[id];
    if (!updates) return;

    const token = localStorage.getItem("token");
    if (!token) {
      redirectToLogin();
      return;
    }

    try {
      const res = await fetch("/api/translations", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, updates }),
      });

      if (res.status === 401) {
        redirectToLogin();
        return;
      }

      // Update local state
      setTranslations((prev) =>
        prev.map((t) =>
          t._id === id
            ? { ...t, translations: { ...t.translations, ...updates } }
            : t
        )
      );

      setEdited((prev) => {
        const newEdited = { ...prev };
        delete newEdited[id];
        return newEdited;
      });
    } catch (err) {
      console.error("Error saving translation:", err);
    }
  };
  const handleAutoGrow = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px"; 
};



  if (loading) {
    return (
      <div className="loading">
        <p>Loading translations...</p>
      </div>
    );
  }

  return (
   <div className="translation-list">
  {translations.map((t) =>
    Object.entries(t.translations || {}).map(([key, value]) => (
      <div key={`${t._id}-${key}`} className="translation-card">
        <div className="translation-meta">
          <span className="translation-lang">{t.language}</span>
          <span className="translation-key">{key}</span>
        </div>
        <textarea
          value={
            edited[t._id]?.[key] !== undefined
              ? edited[t._id][key]
              : value
          }
          onChange={(e) => {
               handleChange(t._id, key, e.target.value);
               handleAutoGrow(e);
          }}

          className="translation-input"
          rows={1}
        />
        <button onClick={() => handleSave(t._id)}>Change</button>
      </div>
    ))
  )}
</div>


  );
}

export default ContentManager;


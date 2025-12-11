import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/UserList.css";


function flattenTranslations(obj, prefix = "") {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      result[newKey] = value;
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (typeof item === "object") {
          Object.entries(item).forEach(([subKey, subVal]) => {
            result[`${newKey}[${i}].${subKey}`] = subVal;
          });
        } else {
          result[`${newKey}[${i}]`] = item;
        }
      });
    } else if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenTranslations(value, newKey));
    }
  }
  return result;
}



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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

  if (loading)
    return (
      <div className="loading">
        <p>Loading translations...</p>
      </div>
    );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Translation Editor</h1>
      <table
        border="1"
        cellPadding="8"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Language</th>
            <th>Key</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {translations.map((t) =>
            Object.entries(flattenTranslations(t.translations || {})).map(
              ([key, value]) => (
                <tr key={`${t._id}-${key}`}>
                  <td>{t.language}</td>
                  <td>{key}</td>
                  <td>
                    <input
                      type="text"
                      value={
                        edited[t._id]?.[key] !== undefined
                          ? edited[t._id][key]
                          : value
                      }
                      onChange={(e) =>
                        handleChange(t._id, key, e.target.value)
                      }
                      style={{ width: "100%" }}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSave(t._id)}>Save</button>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ContentManager;

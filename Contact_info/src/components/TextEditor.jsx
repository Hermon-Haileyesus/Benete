import { useEffect, useState } from "react";

// Flatten nested objects into dot notation keys
function flattenTranslations(obj, prefix = "") {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      Object.assign(result, flattenTranslations(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

function AdminTranslations() {
  const [translations, setTranslations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edited, setEdited] = useState({}); // track edits per document

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/translations");
      const data = await res.json();
      setTranslations(data);
      setLoading(false);
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

    await fetch("/api/translations", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, updates }),
    });

    setTranslations((prev) =>
      prev.map((t) =>
        t._id === id
          ? {
              ...t,
              translations: {
                ...t.translations,
                ...updates,
              },
            }
          : t
      )
    );

    setEdited((prev) => {
      const newEdited = { ...prev };
      delete newEdited[id];
      return newEdited;
    });
  };

  if (loading) return <p>Loading translations...</p>;

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

export default AdminTranslations;

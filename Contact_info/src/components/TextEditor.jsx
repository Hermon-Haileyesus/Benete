import { useEffect, useState } from "react";

function AdminTranslations() {
  const [translations, setTranslations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edited, setEdited] = useState({}); // track edits

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/translations");
      const data = await res.json();
      setTranslations(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (id, field, value) => {
    setEdited((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
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
        t._id === id ? { ...t, ...updates } : t
      )
    );

    setEdited((prev) => {
      const newEdited = { ...prev };
      delete newEdited[id];
      return newEdited;
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Translation Editor</h1>
      <table border="1" cellPadding="8">
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
            Object.entries(t).map(([field, value]) => {
              if (field === "_id" || field === "language") return null;
              return (
                <tr key={`${t._id}-${field}`}>
                  <td>{t.language}</td>
                  <td>{field}</td>
                  <td>
                    <input
                      type="text"
                      value={
                        edited[t._id]?.[field] !== undefined
                          ? edited[t._id][field]
                          : value
                      }
                      onChange={(e) =>
                        handleChange(t._id, field, e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSave(t._id)}>
                      Save
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTranslations;
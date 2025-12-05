import { useEffect, useState } from "react";
import "../css/UserList.css";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contacts");
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return;
    }
    try {
      const response = await fetch(`/api/contacts?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const filteredContacts = contacts.filter((c) => {
    const fullName = `${c.firstName} ${c.lastName}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      (c.email && c.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (c.phone && c.phone.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  if (loading) return <p className="loading">Loading contacts...</p>;

  return (
    <div className="contacts-page">
      {/* Sticky header */}
      <div className="contacts-header sticky-header">
        <h2 className="contacts-title">Saved Contacts</h2>
        <button onClick={() => fetch("/api/seed-translations", { method: "POST" })}>
        <input
          type="text"
          className="search-bar"
          placeholder="Search by name, email, or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="contacts-list">
        {filteredContacts.length === 0 ? (
          <p className="no-results">No contacts found.</p>
        ) : (
          <ul>
            {filteredContacts.map((c) => (
              <li key={c._id} className="contact-card">
                <div className="contact-info">
                  <h3 className="contact-name">
                    {c.firstName} {c.lastName}
                  </h3>
                  <p className="contact-detail">{c.email || c.phone}</p>
                  {c.organization && (
                    <p className="contact-detail">Org: {c.organization}</p>
                  )}
                  {c.role && <p className="contact-detail">Role: {c.role}</p>}
                  {c.message && (
                    <p className="contact-message">“{c.message}”</p>
                  )}
                </div>
                <div className="contact-actions">
                  <button
                    onClick={() => deleteContact(c._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

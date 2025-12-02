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

  if (loading) return <p>Loading contacts...</p>;

  return (
    <section>
    
      <input
        type="text"
        placeholder="Search by name, email, or phone"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
      />

      {filteredContacts.length === 0 ? (
        <h2>No contacts found.</h2>
      ) : (
        <ul>
          {filteredContacts.map((c) => (
            <li key={c._id} >
              <strong>{c.firstName} {c.lastName}</strong><br />
              {c.email || c.phone}<br />
              {c.organization && <span>Org: {c.organization}</span>}<br />
              {c.role && <span>Role: {c.role}</span>}<br />
              {c.message && <span>Message: {c.message}</span>}<br />
              <button
                onClick={() => deleteContact(c._id)}
                
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
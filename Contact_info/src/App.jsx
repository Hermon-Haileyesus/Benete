import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import { Routes, Route } from "react-router-dom";
import ContactList from "./pages/Home";
import ContentEditor from "./pages/ContentEditor";
import Authentication from "./pages/AuthenticationPage";
import ProtectedRoute from "./components/ProtectedRouter";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route
          path="/contact-list"
          element={
            <ProtectedRoute>
              <ContactList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/content-manager"
          element={
            <ProtectedRoute>
              <ContentEditor />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;


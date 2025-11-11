import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext'; 
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Ideology from './pages/Ideology';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './css/App.css';
import '@fontsource/rubik';

function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ideology" element={<Ideology />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
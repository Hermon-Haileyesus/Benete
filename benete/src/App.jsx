import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext'; 
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Ideology from './pages/Ideology';
import Services from './pages/Services';
import PrivateCustomers from './pages/PrivateCustomers';
import Contact from './pages/Contact';
import BusinessCustomers from './pages/BusinessCustomers';
import './css/App.css';
import '@fontsource/rubik';

function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ideology" element={<Ideology />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privatecustomers" element={<PrivateCustomers />} />
          <Route path="/businesscustomers" element={<BusinessCustomers/>} />
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
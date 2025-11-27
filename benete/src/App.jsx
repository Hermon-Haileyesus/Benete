import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext'; 
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Ideology from './pages/Ideology';
import Services from './pages/Services';
import PrivateCustomers from './pages/PrivateCustomers';
import Contact from './pages/Contact';
import CompanyCustomers from './pages/CompanyCustomers';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './css/App.css';
import "@fontsource/rubik/400.css"; 
import "@fontsource/rubik/500.css"; 
import "@fontsource/rubik/700.css"; 



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
          <Route path="/companycustomers" element={<CompanyCustomers/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        </Routes>
      </main>
      <Footer />
      
    </LanguageProvider>
  );
}

export default App;
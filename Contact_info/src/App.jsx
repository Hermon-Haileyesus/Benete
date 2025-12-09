import "@fontsource/rubik/400.css"; 
import "@fontsource/rubik/500.css"; 
import "@fontsource/rubik/700.css"; 
import { Routes, Route } from 'react-router-dom';
import ContactList from "./pages/Home";
import ContentEditor from "./pages/ContentEditor";
import Authentication from "./pages/AuthenticationPage";




function App() {
 

  return (
    <> 
      <main >
        <Routes>
          <Route path="/" element={<Authentication/>} />
          <Route path="/contact-list" element={<ContactList/>} />
          <Route path="/content-manager" element={<ContentEditor/>} />
        </Routes>
      </main>
    </>
  )
}

export default App

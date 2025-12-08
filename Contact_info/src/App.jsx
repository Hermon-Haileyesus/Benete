import "@fontsource/rubik/400.css"; 
import "@fontsource/rubik/500.css"; 
import "@fontsource/rubik/700.css"; 
import ContactsPage from './components/UsersList'
import ContentManager from "./components/TextEditor";
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';



function App() {
 

  return (
    <>
      <NavBar />
      <main >
        <Routes>
          <Route path="/" element={<ContactsPage />} />
          <Route path="/content-manager" element={<ContentManager />} />
        </Routes>
      </main>
    </>
  )
}

export default App

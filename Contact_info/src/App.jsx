import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactsPage from './components/UsersList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactsPage/>
    </>
  )
}

export default App

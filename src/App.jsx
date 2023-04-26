import { useState } from 'react'
import Authentication from './components/Authentication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Authentication></Authentication>
    </>
  )
}

export default App

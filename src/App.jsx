import { useState } from 'react'
import './Global.css'
import Router from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    
   <div>
    <Router/>
   </div>  
    
  )
}

export default App

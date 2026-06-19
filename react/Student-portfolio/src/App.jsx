import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div style={{ textAlign: "center"}}>
      <Student 
         image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
     
        name='Rahul Sharma' about='Passionate Web Development Student'
      />
      
    </div>
    </>
    
  )
}

export default App

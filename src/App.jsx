import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/Sidebar'
import Index from './pages/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='h-full flex sm:flex-row flex-col'>
        <Sidebar/>
        <Index/>
      </div>
    </div>
  )
}

export default App

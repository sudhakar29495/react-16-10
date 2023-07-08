import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'

function App(props: any) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline p-[10px]">
        Hello world!
      </h1>
      <div className='flex flex-wrap'>
        <img src={reactLogo} alt='logo' className='mx-2' />+
        <img src={viteLogo} alt='logo' className='mx-2' />+
        Tailwindcss
      </div>
      <h1>User Data From API:</h1>
      <Dashboard />
    </>
  )
}

export default App;

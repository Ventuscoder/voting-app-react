import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState('')

  useEffect(()=>{
    async function getData() {
      let res = await fetch('http://localhost:8000/');
      let data = await res.json();
      setMsg(data.message);
    }
    getData();
  }, [])

  return (
    <div className="App">
      {msg}
    </div>
  )
}

export default App

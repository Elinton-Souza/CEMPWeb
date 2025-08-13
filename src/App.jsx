import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.portoseguro.com.br/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.tokiomarine.com.br/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Faça sua cotação</h1>
      <div className="card">
        <div>
          <button>
            <img src="porto.png" alt="" />
            Faça sua cotação
          </button>
          <button>
            <img src="tokio.png" alt="" />
            Faça sua cotação
          </button>
          <button>
            <img src="hdi.png" alt="" />
            Faça sua cotação
          </button>
          <button>
            <img src="yelum.png" alt="" />
            Faça sua cotação
          </button>
        </div>
        <button>Faça sua cotação</button>
        <button>Faça sua cotação</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR

        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

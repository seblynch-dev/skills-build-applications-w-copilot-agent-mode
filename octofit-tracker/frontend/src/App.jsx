import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="hero-panel">
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>Modern multi-tier fitness tracking</h1>
          <p className="lead">
            React 19 on port 5173, ready to connect to the Express and MongoDB tiers.
          </p>
          <nav className="nav-links">
            <Link to="/">Dashboard</Link>
            <Link to="/setup">Setup</Link>
          </nav>
        </header>

        <main className="content-panel">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/setup" element={<SetupPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

function DashboardPage() {
  return (
    <section>
      <h2>Application tiers</h2>
      <div className="info-grid">
        <article>
          <h3>Presentation</h3>
          <p>Vite + React 19 with Bootstrap and React Router.</p>
        </article>
        <article>
          <h3>Logic</h3>
          <p>Express API planned on port 8000.</p>
        </article>
        <article>
          <h3>Data</h3>
          <p>MongoDB + Mongoose targeting octofit_db on port 27017.</p>
        </article>
      </div>
    </section>
  )
}

function SetupPage() {
  return (
    <section>
      <h2>Environment defaults</h2>
      <ul className="setup-list">
        <li>Frontend: http://localhost:5173</li>
        <li>Backend: http://localhost:8000</li>
        <li>MongoDB: mongodb://localhost:27017/octofit_db</li>
      </ul>
    </section>
  )
}

export default App

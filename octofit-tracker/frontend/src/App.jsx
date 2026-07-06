import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { apiBaseUrl, isCodespacesApi } from './lib/api.js'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div>
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>Team fitness, wired end to end.</h1>
          <p className="lead">
            React 19 presentation on port 5173, Express API on port 8000, and MongoDB on port 27017.
          </p>
        </div>
        <div className="api-status">
          <span>{isCodespacesApi ? 'Codespaces API' : 'Local API'}</span>
          <code>{apiBaseUrl}</code>
        </div>
      </header>

      <nav className="nav-links" aria-label="OctoFit sections">
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
      </nav>

      <main className="content-panel">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

function DashboardPage() {
  return (
    <section>
      <div className="section-heading">
        <p className="eyebrow">Dashboard</p>
        <h2>OctoFit Tracker</h2>
      </div>
      <div className="info-grid">
        <article>
          <h3>People</h3>
          <p>Profiles, teams, and training levels flow from the backend.</p>
          <Link to="/users">Review users</Link>
        </article>
        <article>
          <h3>Performance</h3>
          <p>Activities and leaderboard data stay compatible with paginated or array API responses.</p>
          <Link to="/activities">View activities</Link>
        </article>
        <article>
          <h3>Guidance</h3>
          <p>Workout suggestions are fetched from the API tier.</p>
          <Link to="/workouts">Open workouts</Link>
        </article>
      </div>
    </section>
  )
}

export default App

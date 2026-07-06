import ResourceView from './ResourceView.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'username', label: 'User' },
  { key: 'teamName', label: 'Team' },
  { key: 'points', label: 'Points' },
]

function Leaderboard() {
  return <ResourceView title="Leaderboard" resource="leaderboard" endpoint={endpoint} columns={columns} />
}

export default Leaderboard
import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'username', label: 'User' },
  { key: 'teamName', label: 'Team' },
  { key: 'points', label: 'Points' },
]

function Leaderboard() {
  return <ResourceView title="Leaderboard" resource="leaderboard" columns={columns} />
}

export default Leaderboard
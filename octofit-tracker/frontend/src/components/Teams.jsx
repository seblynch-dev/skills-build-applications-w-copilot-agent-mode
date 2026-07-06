import ResourceView from './ResourceView.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'motto', label: 'Motto' },
  { key: 'memberCount', label: 'Members' },
  { key: 'weeklyGoalMinutes', label: 'Weekly Goal' },
]

function Teams() {
  return <ResourceView title="Teams" resource="teams" endpoint={endpoint} columns={columns} />
}

export default Teams
import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'motto', label: 'Motto' },
  { key: 'memberCount', label: 'Members' },
  { key: 'weeklyGoalMinutes', label: 'Weekly Goal' },
]

function Teams() {
  return <ResourceView title="Teams" resource="teams" columns={columns} />
}

export default Teams
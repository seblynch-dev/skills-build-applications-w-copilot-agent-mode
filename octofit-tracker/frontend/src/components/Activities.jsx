import ResourceView from './ResourceView.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

const columns = [
  { key: 'username', label: 'User' },
  { key: 'activityType', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  {
    key: 'performedAt',
    label: 'Date',
    render: (item) => new Date(item.performedAt).toLocaleDateString(),
  },
]

function Activities() {
  return <ResourceView title="Activities" resource="activities" endpoint={endpoint} columns={columns} />
}

export default Activities
import ResourceView from './ResourceView.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focusArea', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'recommendedFor', label: 'Recommended For' },
]

function Workouts() {
  return <ResourceView title="Workouts" resource="workouts" endpoint={endpoint} columns={columns} />
}

export default Workouts
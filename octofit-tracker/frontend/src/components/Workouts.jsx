import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focusArea', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'recommendedFor', label: 'Recommended For' },
]

function Workouts() {
  return <ResourceView title="Workouts" resource="workouts" columns={columns} />
}

export default Workouts
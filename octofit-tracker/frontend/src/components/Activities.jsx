import ResourceView from './ResourceView.jsx'

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
  return <ResourceView title="Activities" resource="activities" columns={columns} />
}

export default Activities
import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'fitnessLevel', label: 'Level' },
  { key: 'teamName', label: 'Team' },
]

function Users() {
  return <ResourceView title="Users" resource="users" columns={columns} />
}

export default Users
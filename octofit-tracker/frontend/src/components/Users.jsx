import ResourceView from './ResourceView.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'fitnessLevel', label: 'Level' },
  { key: 'teamName', label: 'Team' },
]

function Users() {
  return <ResourceView title="Users" resource="users" endpoint={endpoint} columns={columns} />
}

export default Users
import { useEffect, useState } from 'react'
import { fetchCollection, getApiEndpoint } from '../lib/api.js'

function ResourceView({ title, resource, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadItems() {
      try {
        setStatus('loading')
        const data = await fetchCollection(resource)

        if (isMounted) {
          setItems(data)
          setStatus('ready')
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message)
          setStatus('error')
        }
      }
    }

    loadItems()

    return () => {
      isMounted = false
    }
  }, [resource])

  return (
    <section className="resource-view">
      <div className="section-heading">
        <p className="eyebrow">{getApiEndpoint(resource)}</p>
        <h2>{title}</h2>
        <p>{items.length} records loaded</p>
      </div>

      {status === 'loading' && <p className="status-message">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="status-message error">Unable to load data: {error}</p>}
      {status === 'ready' && <ResourceTable columns={columns} items={items} />}
    </section>
  )
}

function ResourceTable({ columns, items }) {
  if (items.length === 0) {
    return <p className="status-message">No records returned.</p>
  }

  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped align-middle">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id ?? item.id ?? JSON.stringify(item)}>
              {columns.map((column) => (
                <td key={column.key}>{formatCell(column, item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function formatCell(column, item) {
  const value = column.render ? column.render(item) : item[column.key]

  if (Array.isArray(value)) {
    return value.join(', ')
  }

  return value ?? '-'
}

export default ResourceView
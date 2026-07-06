const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export const isCodespacesApi = Boolean(codespaceName)

export function getApiEndpoint(component) {
  return `${apiBaseUrl}/${component}/`
}

export function getCollection(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.data)) {
    return payload.data
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  if (Array.isArray(payload?.items)) {
    return payload.items
  }

  if (Array.isArray(payload?.docs)) {
    return payload.docs
  }

  return []
}

export async function fetchCollection(component, endpoint = getApiEndpoint(component)) {
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`)
  }

  return getCollection(await response.json())
}
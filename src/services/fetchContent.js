export const fetchContent = async (apiUrl, endpoint, options) => {
  const res = await fetch(apiUrl + endpoint, { ...options })
  return await res.json()
}

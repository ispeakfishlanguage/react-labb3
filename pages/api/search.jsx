// pages/api/search.js
export default async function handler(req, res) {
    const { query } = req.query
  
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' })
    }
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${encodeURIComponent(query)}`)
      const data = await response.json()
  
      if (!response.ok) {
        return res.status(response.status).json({ error: data.status_message })
      }
  
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' })
    }
  }
  
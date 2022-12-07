import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

async function getAlbums(start = 0, limit?: number) {
  let apiUrl = `https://jsonplaceholder.typicode.com/albums?_start=${start}&_limit=${limit}`
  const response = await axios.get(apiUrl)
  return response.data
}

export const useAlbumsQuery = (start: number, limit: number) => {
  return useQuery(['albums', start, limit], () => getAlbums(start, limit), {
    enabled: true,
    retry: 3,
  })
}

import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import type { User, Album } from '../../utilities/types'

async function getAlbums(start = 0, limit?: number): Promise<Album[]> {
  let apiUrl = `https://jsonplaceholder.typicode.com/albums?_start=${start}&_limit=${limit}`
  const response = await axios.get(apiUrl)
  return response.data
}

export const useAlbumsQuery = (
  start: number,
  limit: number,
  enabled: boolean
) => {
  return useQuery(['albums', start, limit], () => getAlbums(start, limit), {
    enabled,
    retry: 3,
  })
}

const getUsers = async (): Promise<User[]> => {
  const apiURL = 'https://jsonplaceholder.typicode.com/users'
  const response = await axios.get(apiURL)
  return response.data
}

export const useUsersQuery = () => {
  return useQuery(['users'], () => getUsers())
}

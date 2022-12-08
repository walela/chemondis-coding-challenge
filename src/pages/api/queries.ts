import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import type { User, Album } from '@/utilities/types'
import { sleep } from '@/utilities/sleep'

type Albums = ReadonlyArray<Album>
type Users = ReadonlyArray<User>

async function getAlbums(start = 0, limit?: number): Promise<Albums> {
  let apiUrl = limit
    ? `https://jsonplaceholder.typicode.com/albums?_start=${start}&_limit=${limit}`
    : `https://jsonplaceholder.typicode.com/albums?_start=${start}`
  const response = await axios.get(apiUrl)
  return response.data
}

export const useAlbumsQuery = (
  start: number,
  limit: number,
  enabled: boolean
) => {
  return useQuery(
    ['albums', start, limit],
    () => sleep(2500).then(() => getAlbums(start, limit)),
    {
      enabled,
      retry: 3,
    }
  )
}

export const useAlbumCountQuery = (enabled: boolean) => {
  return useQuery(['albumCount'], () => getAlbums(0), { enabled })
}

async function getUsers(): Promise<Users> {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'
  const response = await axios.get(apiUrl)
  return response.data
}

export const useUsersQuery = () => {
  return useQuery(['users'], () => getUsers())
}

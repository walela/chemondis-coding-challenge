import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import type { User, Album, Photo } from '@/utilities/types'
import { sleep } from '@/utilities/sleep'

type Albums = ReadonlyArray<Album>
type Users = ReadonlyArray<User>
type Photos = ReadonlyArray<Photo>

async function getAlbums(start = 0, limit?: number): Promise<Albums> {
  let apiUrl = limit
    ? `https://jsonplaceholder.typicode.com/albums?_start=${start}&_limit=${limit}`
    : `https://jsonplaceholder.typicode.com/albums?_start=${start}`
  const response = await axios.get(apiUrl)
  return response.data
}

// users queries
async function getUsers(): Promise<Users> {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'
  const response = await axios.get(apiUrl)
  return response.data
}

export const useUsersQuery = () => {
  return useQuery(['users'], () => getUsers())
}

// album queries
export const useAlbumsQuery = (start: number, limit: number, enabled: boolean) => {
  return useQuery(['albums', start, limit], () => sleep(2500).then(() => getAlbums(start, limit)), {
    enabled,
    retry: 2,
  })
}

export const useAlbumCountQuery = (enabled: boolean) => {
  return useQuery(['albumCount'], () => getAlbums(0), { enabled })
}

// photos queries
async function getPhotos(albumId: number, start = 0, limit?: number): Promise<Photos> {
  let apiURL = limit
    ? `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`
    : `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${start}`
  const response = await axios.get(apiURL)
  return response.data
}

export const usePhotosQuery = (albumId: number, start: number, limit: number, enabled: boolean) => {
  return useQuery(
    ['albums', albumId, start, limit],
    () => sleep(2000).then(() => getPhotos(albumId, start, limit)),
    {
      enabled,
      retry: 2,
    }
  )
}

export const usePhotosCountQuery = (albumId: number, enabled: boolean) => {
  return useQuery(['photosCount'], () => getPhotos(albumId, 0), { enabled })
}

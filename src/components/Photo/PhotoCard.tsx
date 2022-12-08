import * as React from 'react'
import type { Photo, PhotoDetails } from '@/utilities/types'

type PhotoCardProps = {
  photo: Photo
  owner: string
  albumTitle: string
  openPanel: boolean
  setPhotoDetails: React.Dispatch<React.SetStateAction<PhotoDetails>>
  setOpenPanel: (o: boolean) => void
}

function PhotoCard(props: PhotoCardProps) {
  let newImageUrl = props.photo.thumbnailUrl
    .replace('150', '256x200')
    .concat(`/ffffff?text=Photo ${props.photo.id}`)

  let photoDetails: PhotoDetails = {
    url: props.photo.url,
    title: props.photo.title,
    albumId: props.photo.albumId,
    id: props.photo.id,
    albumTitle: props.albumTitle,
    owner: props.owner

  }

  return (
    <div
      className='w-full sm:w-80 bg-gray-50 rounded rounded-t-lg shadow-md flex flex-col gap-4 cursor-pointer'
      onClick={() => {
        props.setPhotoDetails(photoDetails)
        props.setOpenPanel(!props.openPanel)
      }}>
      <img src={newImageUrl} alt={props.photo.title} className='rounded-t-lg' loading='lazy' />
      <div className='px-6 py-2 mb-4 flex flex-col gap-2'>
        <h2 className='text-xs text-gray-400 font-medium uppercase tracking-wider'>Photo Title</h2>
        <h2 className='text-gray-700 leading-relaxed truncate'>{props.photo.title}</h2>
      </div>
    </div>
  )
}

export default PhotoCard

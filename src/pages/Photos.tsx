import { useState, useEffect } from 'react'
import { useUsersQuery, usePhotosQuery, usePhotosCountQuery } from './api/queries'
import { toast } from 'react-hot-toast'
import { useParams, useLocation } from 'react-router-dom'
import Pagination from '@/components/Pagination'

import PhotoCard from '@/components/Photo/PhotoCard'
import Skeleton from '@/components/Photo/PhotoSkeleton'
import Panel from '@/components/Panel'

function Photos() {
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [openPanel, setOpenPanel] = useState<boolean>(false)
  const [albumInfo, setAlbumInfo] = useState({})

  // url state
  const { id } = useParams()
  const location = useLocation()

  // conditional data queries
  const { data: users } = useUsersQuery()
  const { isLoading, error, data: photos } = usePhotosQuery(+id!, offset, limit, !!users)
  const { data: totalCount } = usePhotosCountQuery(+id!, !!photos)

  useEffect(() => {
    if (error && error instanceof Error) {
      toast.error(`Something went wrong: ${error.message}`)
    }
  }, [error])

  if (isLoading)
    return (
      <div className='max-w-6xl mx-auto px-4'>
        <h1 className='text-4xl text-cyan-700 text-center pb-4 font-extrabold underline decoration-wavy'>
          {location.state.user.name}'s Photos
        </h1>
        <div className='w-11/12 py-4 mx-auto'>
          <h2 className='text-2xl text-indigo-700 font-medium'>
            Album {id}:{' '}
            <span className='capitalize text-gray-900 leading-relaxed tracking-wide'>
              {location.state.title}
            </span>
          </h2>
        </div>
        <div className='flex w-11/12 mx-auto gap-6 mb-8 flex-wrap'>
          {[...Array(limit).keys()].map(i => (
            <Skeleton key={i} />
          ))}
        </div>
      </div>
    )

  return (
    <div className='max-w-6xl mx-auto px-4'>
      <h1 className='text-4xl text-cyan-700 text-center py-4 font-extrabold underline decoration-wavy'>
        {location.state.user.name}'s Photos
      </h1>
      <div className='w-11/12 py-4 mx-auto'>
        <h2 className='text-2xl text-indigo-700 font-medium'>
          Album {id}:{' '}
          <span className='capitalize text-gray-900 leading-relaxed tracking-wide'>
            {location.state.title}
          </span>
        </h2>
      </div>

      <div className='flex w-11/12 mx-auto gap-6 mb-8 flex-wrap'>
        {photos?.map(photo => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            thumbnailUrl={photo.thumbnailUrl}
            title={photo.title}
            openPanel={openPanel}
            setOpenPanel={setOpenPanel}
          />
        ))}
      </div>
      <Panel open={openPanel} setOpen={setOpenPanel} albumInfo={albumInfo} />
      <Pagination
        variant='photos'
        total={totalCount?.length || 0}
        offset={offset}
        limit={limit}
        setOffset={(value: number) => setOffset(value)}
        setLimit={value => setLimit(value)}
      />
    </div>
  )
}

export default Photos

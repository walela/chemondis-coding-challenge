import { useState } from 'react'
import {
  useAlbumsQuery,
  useUsersQuery,
  useAlbumCountQuery,
} from './api/queries'
import type { Album } from '@/utilities/types'
import AlbumCard from '@/components/Album/AlbumCard'
import AlbumSkeleton from '@/components/Album/AlbumSkeleton'
import Pagination from '@/components/Pagination'
import logo from '@/assets/gallery_512.png'

function Albums() {
  /***
   * offset - the number of albums that need to be skipped when fetching. defaults to 0
   * because initially we want to fetch from the beginning.
   *
   * limit - the number of albums we want to fetch. defaults to 20
   ****/
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const { data: users } = useUsersQuery()
  // only run the album query once the users query is complete
  const {
    isLoading,
    error,
    data: albums,
  } = useAlbumsQuery(offset, limit, !!users)
  // only fetch the total album count once the initial albums are fetched
  const { data: totalCount } = useAlbumCountQuery(!!albums)

  if (isLoading)
    return (
      <div className='w-full'>
        <div className=' bg-violet-700 w-full mx-auto py-4 mb-6 shadow'>
          <div className='w-96 mx-auto flex gap-4 items-center'>
            <img src={logo} width={48} alt='logo' />
            <h1 className='font-logo text-4xl text-center text-white font-bold tracking-wider border-b-2 border-white'>
              PhotoBucket
            </h1>
          </div>
        </div>
        <div className='max-w-6xl mx-auto px-4'>
          <h1 className='text-2xl text-center py-4'>Hello {limit}</h1>
          <div className='flex w-11/12 mx-auto gap-6 mb-8 flex-wrap'>
            {[...Array(limit).keys()].map(i => (
              <AlbumSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    )
  return (
    <div className='w-full'>
      <div className=' bg-violet-700 w-full mx-auto py-4 mb-6 shadow'>
        <div className='w-96 mx-auto flex gap-4 items-center'>
          <img src={logo} width={48} alt='logo' />
          <h1 className='font-logo text-4xl text-center text-white font-bold tracking-wider border-b-2 border-white'>
            PhotoBucket
          </h1>
        </div>
      </div>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex w-11/12 mx-auto gap-6 mb-8 flex-wrap'>
          {albums?.map((album: Album) => (
            <AlbumCard
              userId={album.userId}
              user={users?.find(user => user.id === album.userId)}
              id={album.id}
              title={album.title}
              key={album.id}
            />
          ))}
        </div>
        <Pagination
          variant='albums'
          total={totalCount?.length || 0}
          offset={offset}
          limit={limit}
          setOffset={(value: number) => setOffset(value)}
          setLimit={value => setLimit(value)}
        />
      </div>
    </div>
  )
}

export default Albums

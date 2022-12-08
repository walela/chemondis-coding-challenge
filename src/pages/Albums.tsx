import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useAlbumsQuery, useUsersQuery, useAlbumCountQuery } from './api/queries'
import AlbumCard from '@/components/Album/AlbumCard'
import AlbumSkeleton from '@/components/Album/AlbumSkeleton'
import Pagination from '@/components/Pagination'
import type { Album } from '@/utilities/types'

function Albums() {
  /***
   * offset - the number of albums that need to be skipped when fetching. defaults to 0
   * because initially we want to fetch from the beginning.
   * limit - the number of albums we want to fetch. defaults to 20
   ****/
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)

  /**
   * queries are run conditionally. the album query is run once the user
   * query is complete and the album count query is only run once the initial albums
   * are fetched
   */
  const { data: users } = useUsersQuery()
  const { isLoading, error, data: albums } = useAlbumsQuery(offset, limit, !!users)
  const { data: totalCount } = useAlbumCountQuery(!!albums)

  useEffect(() => {
    if (error && error instanceof Error) {
      console.log('error')
      toast.error(`Something went wrong: ${error.message}`)
    }
  }, [error])

  if (isLoading)
    return (
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex w-11/12 mx-auto gap-6 mb-8 flex-wrap'>
          {[...Array(limit).keys()].map(i => (
            <AlbumSkeleton key={i} />
          ))}
        </div>
      </div>
    )
  return (
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
  )
}

export default Albums

import { useState } from 'react'
import { useAlbumsQuery } from './api/queries'
import AlbumCard from '../components/AlbumCard'
import logo from '../assets/gallery_512.png'

type Album = {
  userId: number
  id: number
  title: string
}

function Albums() {
  /***
   * offset - the number of albums that need to be skipped when fetching. defaults to 0
   * because initially we want to fetch from the beginning.
   *
   * limit - the number of albums we want to fetch. defaults to 20
   ****/
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const { isLoading, error, data: albums } = useAlbumsQuery(offset, limit)
  return (
    <div className='max-w-6xl mx-auto px-4'>
      <div className='flex items-center gap-4 w-96 mx-auto py-4'>
        <img src={logo} width={48} alt='logo' />
        <h1 className='font-logo text-4xl text-indigo-700 font-bold tracking-wider border-b-2 border-indigo-700'>
          PhotoBucket
        </h1>
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
      </div>
    </div>
  )
}

export default Albums

import { Link } from 'react-router-dom'
import type { Album, User } from '../utilities/types'
import stc from 'string-to-color'

type AlbumCardProps = Album & { user: User | undefined }

function AlbumCard({ id, user, title }: AlbumCardProps) {
  // create an invariant placeholder image color from the user id
  let imageColor = stc(user?.id).slice(1)
  let imagePlaceholder = `https://via.placeholder.com/256x200/${imageColor}/ffffff?text=Album ${id}`
  return (
    <div className='w-full sm:w-80 bg-slate-50 rounded-lg shadow-md flex flex-col gap-4 cursor-pointer hover:shadow-lg '>
      <div className='w-full'>
        {' '}
        <img
          src={imagePlaceholder}
          alt='placeholder'
          className='rounded-t-lg sm:w-80 w-full border-b border-gray-100  object-cover'
        />
      </div>

      <div className='px-6 py-4 mb-4 flex flex-col gap-4'>
        <div>
          <h2 className='text-xs text-gray-500  uppercase tracking-wider'>
            Album Title
          </h2>
          <h2 className='text-gray-700 truncate'>{title}</h2>
        </div>
        <div>
          <h2 className='text-xs text-gray-500 uppercase tracking-wider'>
            Owner
          </h2>
          <h2 className='text-gray-700 leading-relaxed'>{user?.name}</h2>
        </div>
        <div className=' text-indigo-500 hover:text-indigo-400 '>
          <Link
            to={`album/${id}/photos`}
            state={{ user, title }}
            className='inline-flex items-center'>
            <span>View Photos</span>{' '}
            <svg
              className='w-4 h-4 ml-1 mt-0.5'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M5 12h14'></path>
              <path d='M12 5l7 7-7 7'></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AlbumCard

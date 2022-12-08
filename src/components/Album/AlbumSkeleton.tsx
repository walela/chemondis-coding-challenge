export default function AlbumSkeleton() {
  return (
    <div className='w-full sm:w-80 bg-slate-50 rounded-lg shadow-md flex flex-col gap-4 cursor-pointer hover:shadow-md'>
      <div className='w-full'>
        {' '}
        <div className='rounded-t-lg h-52 animate-pulse sm:w-80 bg-gray-400 w-full border-b border-gray-100  object-cover' />
      </div>

      <div className='px-6 py-4 mb-4 flex flex-col gap-4'>
        <div>
          <h2 className=' bg-gray-400 font-medium tracking-wider h-4 mb-2 w-1/4'></h2>
          <h2 className='bg-gray-500 animate-pulse truncate h-4 w-2/3'></h2>
        </div>
        <div>
          <h2 className=' bg-gray-400 mb-2 w-1/4 h-4'></h2>
          <h2 className='bg-gray-500 animate-pulse w-2/3 h-4'></h2>
        </div>
        <div className=' bg-indigo-500 h-4 hover:text-indigo-400 w-1/2'>
          <span className='animate-pulse bg-indigo-500'></span>
        </div>
      </div>
    </div>
  )
}

function PhotoSkeleton() {
  return (
    <div className='w-full sm:w-80 bg-gray-50 rounded rounded-t-lg shadow-md flex flex-col gap-4 cursor-pointer hover:shadow-md'>
      <div className='w-80 h-52 rounded-t-lg animate-pulse bg-slate-400' />
      <div className='px-6 py-4 mb-4 flex flex-col gap-2'>
        <h2 className='bg-gray-400 h-4 animate-pulse w-1/3'></h2>
        <h2 className='bg-slate-700 h-4 animate-pulse w-4/5'></h2>
      </div>
    </div>
  )
}

export default PhotoSkeleton

type PhotoCardProps = {
  title: string
  thumbnailUrl: string
  id: number
  openPanel: boolean
  setOpenPanel: (o: boolean) => void
}

function PhotoCard({ thumbnailUrl, title, id, openPanel, setOpenPanel }: PhotoCardProps) {
  let newImageUrl = thumbnailUrl.replace('150', '256x200').concat(`/ffffff?text=Photo ${id}`)

  return (
    <div
      className='w-full sm:w-80 bg-gray-50 rounded rounded-t-lg shadow-md flex flex-col gap-4 cursor-pointer'
      onClick={() => setOpenPanel(!openPanel)}>
      <img src={newImageUrl} alt={title} className='rounded-t-lg' loading='lazy' />
      <div className='px-6 py-2 mb-4 flex flex-col gap-2'>
        <h2 className='text-xs text-gray-400 font-medium uppercase tracking-wider'>Photo Title</h2>
        <h2 className='text-gray-700 leading-relaxed truncate'>{title}</h2>
      </div>
    </div>
  )
}

export default PhotoCard

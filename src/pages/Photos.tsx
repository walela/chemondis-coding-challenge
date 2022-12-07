import { useParams } from 'react-router-dom'

function Photos() {
  const { id } = useParams()
  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-3xl text-gray-900'>Photos Page</h1>
      <h2 className='text-2xl text-gray-800'>Album id: {id}</h2>
    </div>
  )
}

export default Photos

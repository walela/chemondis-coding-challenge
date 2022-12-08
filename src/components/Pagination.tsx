type PaginationProps = {
  variant: string
  total: number
  offset: number
  limit: number
  setOffset: (value: number) => void
  setLimit: (value: number) => void
}

function Pagination({
  total,
  variant,
  offset,
  limit,
  setOffset,
  setLimit,
}: PaginationProps) {
  const getPrevious = () => {
    if (offset > 0) {
      setOffset(offset - limit)
    }
    // edge case - avoid negative offsets when the limit is higher than 20
    // sometimes
    if (offset - limit < 0) {
      setOffset(0)
    }
  }

  const getNext = () => {
    if (offset + limit < total) {
      setOffset(offset + limit)
    }
  }
  return (
    <div
      className='bg-white p-4 mb-6 w-11/12 mx-auto flex items-center rounded justify-center border border-gray-300 shadow-sm'
      aria-label='Pagination'>
      <div className='hidden sm:block'>
        <p className='text-sm text-gray-700'>
          Showing <span className='font-medium'>{offset + 1}</span> to{' '}
          <span className='font-medium'>
            {offset + limit >= total ? total : offset + limit}
          </span>{' '}
          of <span className='font-medium'>{total}</span> {variant}
        </p>
      </div>
      <div className='flex-1 flex justify-between sm:justify-end'>
        <div>
          <span className='text-gray-900'>Items per page: </span>
          <select
            name='count'
            className='rounded-md border-gray-300 py-2'
            value={limit}
            onChange={event => {
              setLimit(+event.target.value)
            }}>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>

        <button
          onClick={getPrevious}
          className='ml-3 relative cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
          Previous
        </button>
        <button
          onClick={getNext}
          className='ml-3 relative cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination

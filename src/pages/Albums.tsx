import { useState } from 'react'
import { useAlbumsQuery } from './api/queries'

function Albums() {
  /***
   * offset - the number of albums that need to be skipped when fetching. defaults to 0
   * because initially we want to fetch from the beginning
   * limit - the number of albums we want to fetch. defaults to 20
   ****/
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const { isLoading, error, data: albums } = useAlbumsQuery(offset, limit)
  return <h1>Albums Page</h1>
}

export default Albums

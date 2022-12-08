import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Albums from '@/pages/Albums'
import Photos from '@/pages/Photos'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Albums />} />
        <Route path='/album/:id/photos' element={<Photos />} />
      </Route>
    </Routes>
  )
}

export default App

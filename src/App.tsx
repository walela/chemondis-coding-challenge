import { Routes, Route } from 'react-router-dom'
import Albums from './pages/Albums'
import Photos from './pages/Photos'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Albums />} />
      <Route path='/album/:id/photos' element={<Photos />} />
    </Routes>
  )
}

export default App

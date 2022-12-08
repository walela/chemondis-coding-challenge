import { Outlet } from 'react-router-dom'
import logo from '@/assets/gallery_512.png'

function Layout() {
  return (
    <div className='w-full'>
      <div className=' bg-violet-700 w-full mx-auto py-4 mb-6 shadow-md sticky top-0 z-50'>
        <div className='w-96 mx-auto flex gap-4 items-center'>
          <img src={logo} width={48} alt='logo' />
          <h1 className='font-logo text-4xl text-center text-white font-bold tracking-wider border-b-2 border-white'>
            PhotoBucket
          </h1>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout

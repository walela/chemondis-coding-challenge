import { Fragment, Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline'

import type { PhotoDetails } from '@/utilities/types'

type PanelProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  photoDetails: PhotoDetails
}

export default function Panel({ open, setOpen, photoDetails }: PanelProps) {
  let updatedImageUrl = photoDetails.url?.concat(`/ffffff?text=Photo ${photoDetails.id}`)
  
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='fixed inset-0 overflow-hidden' onClose={setOpen}>
        <div className='absolute inset-0 overflow-hidden'>
          <Dialog.Overlay className='absolute inset-0' />

          <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'>
              <div className='w-screen max-w-lg'>
                <div className='h-full mt-20 flex flex-col bg-neutral-50 shadow-md overflow-y-scroll'>
                  <div className='px-4 py-6 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <h2 id='slide-over-heading' className='text-lg font-medium text-gray-900'>
                        Photo Details
                      </h2>
                      <div className='ml-3 h-7 flex items-center'>
                        <button
                          type='button'
                          className='bg-white rounded text-gray-700 hover:text-gray-900 focus:ring-2 focus:ring-violet-700'
                          onClick={() => setOpen(false)}>
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}
                  <div>
                    <div className='pb-1 sm:pb-6'>
                      <div>
                        <div className='relative h-40 sm:h-96'>
                          <img
                            className='absolute h-full w-full object-cover'
                            src={updatedImageUrl}
                            alt='full width image'
                            loading='lazy'
                          />
                        </div>
                        <div className='mt-6 px-6 py-2 mb-4 flex flex-col gap-2'>
                          <h2 className='text-xs text-gray-400 font-medium uppercase tracking-wider'>
                            Photo Title
                          </h2>
                          <h2 className='text-gray-800 leading-relaxed'>{photoDetails.title}</h2>
                        </div>
                        <div className='px-6 py-2 mb-4 flex flex-col gap-2'>
                          <h2 className='text-xs text-gray-400 font-medium uppercase tracking-wider'>
                            Album Title
                          </h2>
                          <h2 className='text-gray-800 leading-relaxed'>
                            {photoDetails.albumTitle}
                          </h2>
                        </div>
                        <div className='px-6 py-2 mb-4 flex flex-col gap-2'>
                          <h2 className='text-xs text-gray-400 font-medium uppercase tracking-wider'>
                            Owner
                          </h2>
                          <h2 className='text-gray-800 leading-relaxed'>{photoDetails.owner}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

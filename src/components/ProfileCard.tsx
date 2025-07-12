'use client'

import React from 'react'
import { Dialog, DialogContent, DialogTitle } from './ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'

const ProfileCard = ({
  user,
  open,
  onOpenChange,
}: {
  user: any
  open: boolean
  onOpenChange: (open: boolean) => void
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-white dark:bg-gray-800 rounded-xl p-0 shadow-2xl max-w-sm w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitle className="relative h-32 bg-gradient-to-b from-black to-accent">
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2'>

         {user.image ? <img
            src={user?.image || '/fallback.jpeg'}
            alt="Profile"
            className=" w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 transition-transform duration-300 hover:scale-105"
            />:
            <h1 className=' w-24 h-24 flex justify-center items-center rounded-full text-7xl bg-primary text-white border-4 border-white dark:border-gray-800 transition-transform duration-300 hover:scale-105'>{user?.name[0]}</h1>}
          {/* <input type="file" name="profile" id="upload_profile" hidden required/>

                        <label htmlFor="upload_profile" className="flex -mt-4 justify-center items-center">
                            <svg data-slot="icon" className="w-5 h-5 text-gray-800" fill="none" strokeWidth="1.5"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                </path>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                </path>
                            </svg>
                        </label> */}
            </div>
        </DialogTitle>

        <div className="pt-16 pb-6 px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
            {user?.name}
          </h1>
          <p className="text-gray-600 border w-min mx-auto px-2 rounded-full dark:text-gray-300 mb-4">
            {user?.email || 'No email provided'}
          </p>
           <p className="text-gray-600 dark:text-gray-300 mb-4">
            {user?.phone || 'No phone provided'}
          </p>

        </div>


      </DialogContent>
    </Dialog>
  )
}

export default ProfileCard

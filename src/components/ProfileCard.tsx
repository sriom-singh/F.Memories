'use client'

import React, { useState, useRef } from 'react'
import { Dialog, DialogContent, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Camera, Edit } from 'lucide-react'

type User = {
  name: string
  email?: string
  phone?: string
  image?: string
  isAdmin:boolean
}

const ProfileCard = ({
  user,
  open,
  onOpenChange,
  onUpdate, // <-- Add this prop for update callback
}: {
  user: any
  open: boolean
  onOpenChange: (open: boolean) => void
  onUpdate?: (updated: User) => void
}) => {
  const [editMode, setEditMode] = useState(false)
  const [form, setForm] = useState<User>(user)
  const [preview, setPreview] = useState<string | undefined>(user.image)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        setPreview(ev.target?.result as string)
        setForm((prev) => ({ ...prev, image: ev.target?.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  // Save changes
  const handleSave = () => {
    setEditMode(false)
    if (onUpdate) onUpdate(form)
  }

  // Cancel editing
  const handleCancel = () => {
    setEditMode(false)
    setForm(user)
    setPreview(user.image)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-white dark:bg-gray-800 rounded-xl p-0 shadow-2xl max-w-sm w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitle className="relative h-32 bg-gradient-to-b from-black to-accent">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            {preview ? (
              <img
                src={preview}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <div className="w-28 h-28 flex justify-center items-center rounded-full text-5xl bg-primary text-white border-4 border-white dark:border-gray-800 transition-transform duration-300 hover:scale-105">
                {form?.name?.[0] || "?"}
              </div>
            )}
            {editMode && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageChange}
                />
                <Button
                  size="sm"
                  className="absolute bottom-1 right-2 bg-black/70  text-black border border-gray-300"
                  onClick={() => fileInputRef.current?.click()}
                  type="button"
                >
                  <span className='sr-only'>Change</span>
                  <Camera color='white' />
                </Button>
              </>
            )}
          </div>
        </DialogTitle>

        <div className="pt-16 pb-6 px-6 text-center">
          {editMode ? (
            <form
              className="flex flex-col gap-3 items-center"
              onSubmit={e => {
                e.preventDefault()
                handleSave()
              }}
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="text-xl font-bold text-gray-800 dark:text-white border-b border-gray-300 bg-transparent text-center outline-none"
                required
                placeholder="Name"
              />
              <input
                name="email"
                value={form.email || ''}
                onChange={handleChange}
                className="text-gray-600 dark:text-gray-300 border-b border-gray-300 bg-transparent text-center outline-none"
                placeholder="Email"
                type="email"
              />
              <input
                name="phone"
                value={form.phone || ''}
                onChange={handleChange}
                className="text-gray-600 dark:text-gray-300 border-b border-gray-300 bg-transparent text-center outline-none"
                placeholder="Phone"
                type="tel"
              />
              <div className="flex gap-2 mt-4">
                <Button type="submit" size="sm" className=" text-white">
                  Save
                </Button>
                <Button type="button" size="sm" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                {form?.name}
              </h1>
              <p className="text-gray-600 border w-min mx-auto px-2 rounded-full dark:text-gray-300 mb-2">
                {form?.email || 'No email provided'}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {form?.phone || 'No phone provided'}
              </p>
              <Button
                size="sm"
              
                className="mt-2 flex items-center m-auto text-white"
                onClick={() => setEditMode(true)}
              >
                <Edit/> Edit Profile
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProfileCard
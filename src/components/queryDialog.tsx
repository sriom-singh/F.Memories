// components/WelcomeModal.tsx
'use client'

import * as React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from './ui/input'
import { Button } from './ui/button'

export function WelcomeModal() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        // Automatically open the modal after component mounts
        setTimeout(() => {
            setOpen(true)
        }, 4000)
    }, [])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="transition-all duration-300 sm:w-[450px] rounded-sm text-black bg-white dark:bg-gray-800 scale-95 animate-in fade-in zoom-in-95">
                <DialogHeader>
                    {/* <DialogTitle className='text-black text-center'>

                        <img src="/apple-touch-icon.png" alt="Logo" className="w-24 h-auto mx-auto" />
                    </DialogTitle> */}
                    <DialogTitle className=" tracking-tight text-xl font-bold">
                    Let's Plan Your Dream Trip!
                    </DialogTitle>
                    <DialogDescription className="text-center -ml-2 text-gray-600">
                    Let us craft the perfect travel experience tailored to your needs.
                        <br />
                    </DialogDescription>

                    <div className="mt-4 text-black space-y-3">
                        <Input type='text' required placeholder='Your Name*' className='w-full py-1  border-zinc-300' />
                        <Input type='email' required placeholder='Your Email*' className='w-full py-1  border-zinc-300' />
                        <Input type='number' required placeholder='Phone Number*' className='w-full py-1  border-zinc-300' />
                        <Input type='text' required placeholder='Destination*' className='w-full py-1 border-zinc-300' />
                        <Input type='number' required placeholder='Traveler Count*' className='w-full py-1  border-zinc-300' />

                        <textarea
                            placeholder='Your Message' rows={3}
                            className='w-full p-2 border border-gray-300 rounded-md'
                        ></textarea>
                        <Button className='w-full rounded-sm'>Submit</Button>
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md  text-center mb-3">
                        🎁 Submit now and get <strong>5% OFF</strong> your customized package!
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

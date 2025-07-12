// components/WelcomeModal.tsx
'use client'

import * as React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { IconBrandWhatsapp } from '@tabler/icons-react'

export function WelcomeModal() {
    const [open, setOpen] = React.useState(false)
    const [data, setData] = React.useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelerCount: '',
        message: ''
    })

    React.useEffect(() => {
        // Automatically open the modal after component mounts
        setTimeout(() => {
            setOpen(true)
        }, 4000)
    }, [])

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        const text = `*Name:* ${data.name} \n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Destination:* ${data.destination}\n*Traveler Count:* ${data.travelerCount}\n*Message:* ${data.message}`
        const url = `https://wa.me/919910583811?text=${encodeURIComponent(text)}`
        window.open(url, '_blank')
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="transition-all z-[10000]  duration-300 sm:w-[450px] rounded-sm text-black bg-white dark:bg-gray-800 scale-95 animate-in fade-in zoom-in-95">
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

                    <form onSubmit={handleSubmit} className="mt-4 text-black space-y-3">
                        <Input onChange={(e) => setData({ ...data, name: e.target.value })} type='text' required placeholder='Your Name*' className='w-full py-1  border-zinc-300' />
                        <Input onChange={(e) => { setData({ ...data, email: e.target.value }) }} type='email' required placeholder='Your Email*' className='w-full py-1  border-zinc-300' />
                        <Input onChange={(e) => { setData({ ...data, phone: e.target.value }) }} type='number' required placeholder='Phone Number*' className='w-full py-1  border-zinc-300' />
                        <Input onChange={(e) => { setData({ ...data, destination: e.target.value }) }} type='text' required placeholder='Destination*' className='w-full py-1 border-zinc-300' />
                        <Input onChange={(e) => { setData({ ...data, travelerCount: e.target.value }) }} type='number' required placeholder='Traveler Count*' className='w-full py-1  border-zinc-300' />

                        <textarea
                            onChange={(e) => { setData({ ...data, message: e.target.value }) }}
                            placeholder='Your Message' rows={3}
                            className='w-full p-2 border border-gray-300 rounded-md'
                        ></textarea>
                        <Button type='submit' className='w-full rounded-sm'>Submit</Button>
                        <Button variant={'outline'} onClick={() => window.open("https://wa.me/919910583811?text=Hello%20I%20am%20interested%20in%20your%20services")} className='w-full flex items-center justify-center border-green-500 text-green-500 rounded-sm hover:bg-green-300/50 '>Contact on <IconBrandWhatsapp className='ml-2 mr-1 size-5' /> Whatsapp</Button>

                    </form>
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

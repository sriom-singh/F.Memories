// components/WelcomeModal.tsx
'use client'

import * as React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import axios from 'axios'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

export function WelcomeModal() {
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
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

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        try {
            setLoading(true)
            const res = await axios.post('/api/mails', {
                name: data.name,
                email: data.email,
                subject: "Package Query",
                message: `*Name:* ${data.name} \n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Destination:* ${data.destination}\n*Traveler Count:* ${data.travelerCount}\n*Message:* ${data.message}`
            })
            if (res.status == 200) {
                setOpen(false)
                toast("Thanks for Contacting us! We will reach to you shortly")
            }
        }
        catch (e) {
            console.log(e);

        }
        finally {
            setLoading(false)
        }
        const text = `
                        <strong>Name:</strong> ${data.name}<br/>
                        <strong>Email:</strong> ${data.email}<br/>
                        <strong>Phone:</strong> ${data.phone}<br/>
                        <strong>Destination:</strong> ${data.destination}<br/>
                        <strong>Traveler Count:</strong> ${data.travelerCount}<br/>
                        <strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}
                    `;
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="transition-all z-[10000]  duration-300 sm:w-[550px] rounded-sm text-black bg-white dark:bg-gray-800 scale-95 animate-in fade-in zoom-in-95">
                <DialogHeader>
                    {/* <DialogTitle className='text-black text-center'>

                        <img src="/apple-touch-icon.png" alt="Logo" className="w-24 h-auto mx-auto" />
                    </DialogTitle> */}
                    <DialogTitle className=" tracking-tight text-xl font-bold">
                        Let's Plan Your Dream Trip!
                    </DialogTitle>
                    <DialogDescription className=" text-gray-600">
                        Let us craft the perfect travel experience tailored to your needs.
                        <br />
                    </DialogDescription>

                    <form onSubmit={handleSubmit} className="mt-4 text-black space-y-2">
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
                        <Button type='submit' disabled={loading} className='w-full  rounded-sm flex items-center justify-center'>
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                        <hr className='my-2' />
                        <Button variant={'outline'} onClick={() => window.open("https://wa.me/919910583811?text=Hello%20I%20am%20interested%20in%20your%20services.")} className='w-full flex items-center justify-center border-green-500 text-green-500 rounded-sm hover:text-green-600 '>Chat on <IconBrandWhatsapp className='ml-2 mr-0.5 size-5' /> Whatsapp</Button>

                    </form>
                </DialogHeader>
                <DialogFooter>
                    <div className="bg-green-100 text-green-800 mx-auto rounded-md  text-center mb-3">
                        <p className='px-2  py-1'>🎁 Submit now and get <strong>5% OFF</strong> your customized package!</p>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

"use client"

import React from 'react'
import { Button } from '../ui/button'
import { FaWhatsapp } from 'react-icons/fa6'
import Link from 'next/link'
import { handleContactCTA } from '@/lib/utils'

const ContactSection = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-purple to-purple-dark text-white">
            <div className="container ">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            Ready to Create Your Perfect Event?
                        </h2>
                        <p className="text-white/90 max-w-xl">
                            Let our team of experts help you design and execute an
                            unforgettable experience tailored to your vision.
                        </p>
                    </div>
                    <div className="flex items-center justify-start max-sm:w-full gap-4">
                        <Button
                            className="bg-green-600 hover:bg-green-700 text-white px-8"
                            onClick={handleContactCTA}
                            size="sm"
                        >
                            <FaWhatsapp />
                            Contact us
                        </Button>
                        <Link href="/events" passHref>
                            <Button size="lg" variant={"outline"}>
                                Browse Events
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection


{/* <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-white/90 max-w-xl">
                Let us help you create an unforgettable event that will be featured in our next showcase. Our team of
                experts is ready to bring your vision to life.
              </p> */}
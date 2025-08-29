
"use client"

import React from 'react'
import { Button } from '../ui/button'
import { handleContactCTA } from '@/lib/utils'
import { FaWhatsapp } from 'react-icons/fa6'

const StillQuestions = () => {
    return (
        <div className="mt-16 text-center bg-purple-light/30 rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-midnight-dark mb-4">
                Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our support team is here to help. Reach out to us and we'll get back
                to you as soon as possible.
            </p>
            <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={handleContactCTA}
                size="sm"
            >
                <FaWhatsapp />
                Contact on WhatsApp
            </Button>
        </div>
    )
}

export default StillQuestions
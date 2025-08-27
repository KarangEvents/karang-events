import React from 'react'

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${className}`}>{children}</h2>
    )
}

export default SectionTitle

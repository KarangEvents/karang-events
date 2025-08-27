import React from 'react'
import { Card } from '../ui/card'

const InfoCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: string | number }) => {
    return (
        <Card className="p-2 md:p-4 text-center">
            <Icon className="size-5 md:size-8 text-purple-600 mx-auto mb-2" />
            <p className="text-xs md:text-sm text-gray-600">{label}</p>
            <p className="text-sm font-semibold">{value}</p>
        </Card>
    )
}

export default InfoCard
import React from 'react'
import Image from 'next/image'

// Move partner data outside component to prevent recreation on each render
const partner = [
    {
        name: 'Guardian Tax',
        image: '/gt.png',
        width: 150,
        height: 60,
    },
    {
        name: 'Fidelity Tax Defense',
        image: '/ftd.png',
        width: 250,
        height: 80,
    },
    {
        name: 'Tax Relief Advocate',
        image: '/tra.svg',
        width: 100,
        height: 60,
    }
]

const Partners = () => {
  return (
    <div className='w-full py-16 mt-16 md:mt-8 lg:mt-0 md:py-8 lg:py-4 flex flex-col relative gap-8'>
        <div className='max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8'>
            <h2 className='text-lg font-base text-center'>Our Partners are Top Providers</h2>
        </div>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6'>
            {partner.map((partner) => (
                <div key={partner.name} className='flex flex-col items-center justify-center'>
                    <Image 
                        src={partner.image} 
                        alt={partner.name} 
                        width={partner.width} 
                        height={partner.height} 
                        className="h-auto w-auto max-w-full object-contain"
                        style={{ width: partner.width, height: 'auto' }}
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default React.memo(Partners)
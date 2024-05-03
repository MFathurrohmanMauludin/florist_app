import { Image } from '@nextui-org/react'
import React from 'react'

export default function Surprice() {
    return (
        <>
            <div className="grid grid-cols-2 px-8 py-[100px] gap-4">
                {/* slogan */}
                <div className="flex flex-col items-center justify-center text-center">
                    <span className='text-2xl '>Wedding</span>
                    <span className='text-4xl font-semibold capitalize tracking-wide'>Give the best and most beautiful flower bouquet to your beloved</span>
                </div>

                {/* image */}
                <div className="flex justify-center">
                    <Image src='https://i.ibb.co/n8vRvkY/wedding.jpg' width={500} alt='give precent' />
                </div>
            </div>
        </>

    )
}

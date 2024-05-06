import { Image } from '@nextui-org/react'
import React from 'react'

export default function Surprice() {
    const data = [{
        title: 'wedding',
        image: ['https://i.ibb.co/hVF9Mg6/wedding.jpg', 'https://i.ibb.co/87Bf91G/wedding-2.jpg', 'https://i.ibb.co/87Bf91G/wedding-3.jpg', 'https://i.ibb.co/87Bf91G/wedding-4.jpg', 'https://i.ibb.co/87Bf91G/wedding-5.jpg', 'https://i.ibb.co/87Bf91G/wedding-6.jpg', 'https://i.ibb.co/87Bf91G/wedding-7.jpg'],
        slogan: 'Give the best and most beautiful flower bouquet to your beloved'
    }]

    return (
        <>
            <div className="grid grid-cols-2 px-8 py-[100px] gap-4">
                {/* slogan */}
                <div className="flex flex-col items-center justify-center text-center">
                    <span
                        className="flex items-center line-color"
                    >
                        Wedding
                    </span>
                    <span className="text-4xl font-semibold capitalize tracking-wide w-[calc(100%_-_50px)]">Give the best and most beautiful flower bouquet to your beloved</span>
                </div>

                {/* image */}
                <div className="flex flex-row justify-center">
                    {/* <Image src='https://i.ibb.co/n8vRvkY/wedding.jpg' width={500} alt='give precent' /> */}
                    <div className="columns-3">
                        <Image className="mb-3 w-full max-w-[216px]" src="https://source.unsplash.com/random/1" width={400} alt="random-1" />
                        <Image className="mb-3 w-full max-w-[216px]" src="https://source.unsplash.com/random/2" width={400} alt="random-2" />
                        <Image className="mb-3 w-full max-w-[216px]" src="https://source.unsplash.com/random/3" width={400} alt="random-3" />
                        <Image className="mb-3 w-full max-w-[216px]" src="https://source.unsplash.com/random/4" width={400} alt="random-4" />
                        <Image className="mb-3 w-full max-w-[216px]" src="https://source.unsplash.com/random/5" width={400} alt="random-5" />
                        <Image className="mb-3 w-full max-w-[216px]" src="https://source.unsplash.com/random/6" width={400} alt="random-6" />
                        <Image className="mb-3 w-full max-w-[216px]" src="https://source.unsplash.com/random/7" width={400} alt="random-7" />
                    </div>
                </div>
            </div>
        </>

    )
}

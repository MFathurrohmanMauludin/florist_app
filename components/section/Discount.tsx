import React from 'react'
import SeeMore from '../button/SeeMore'
import Heading from './Heading'
import Product from '../card/Product'
import { flowers } from '@/app/api/_data'

export default function Discount() {
    const data = flowers();
    const filter = data.filter((data) => data.discount > 0);

    return (
        <div className='space-y-6 my-10'>
            <Heading
                title='Special Discount'
                icon={'faPercent'}
                colorBorder={'border-blue-500'}
                colorBackground={'bg-blue-300/60'}
                colorText={'text-blue-700'}
                isIcon={true}
            />
            <div className="grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 px-8 md:px-6 xs:px-4">
                {
                    filter.map((flower: any, index) =>
                        <Product data={flower} index={index} key={index} />
                    )
                }
            </div>
            <SeeMore url={'#best-seller'} />
        </div>
    )
}

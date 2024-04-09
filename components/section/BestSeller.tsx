import React from 'react'
import LoadMore from '../button/LoadMore'
import Heading from './Heading'
import Product from '../card/Product'
import { flowers } from '@/app/api/_data'

export default function BestSeller() {
    const data = flowers();
    return (
        <div className='space-y-6 my-10'>
            <Heading
                title='best seller'
                icon={'faFire'}
                colorBorder={'border-rose-500'}
                colorBackground={'bg-rose-300/60'}
                colorText={'text-rose-700'}
                isIcon={true}
            />
            <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 px-8 md:px-6 xs:px-4">
                {
                    data.map((flower: any, index) =>
                        <Product data={flower} index={index} key={index} />
                    )
                }
            </div>
            <LoadMore url={'#best-seller'} />
        </div>
    )
}

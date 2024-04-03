import React from 'react'
import LoadMore from '../button/LoadMore'
import Heading from './Heading'

export default function BestSeller() {
    return (
        <>
            <Heading title='best seller' />
            <LoadMore url={'#best-seller'} />
        </>
    )
}

import { Button } from '@nextui-org/react'
import React from 'react'

export default function BtnAddToCart() {
    return (
        <Button
            className='capitalize hover:!bg-black hover:text-white'
            variant='light'
            color='default'
            size='sm'
            radius='full'
        >
            add to cart
        </Button>
    )
}

'use client'

import { Button, Link } from '@nextui-org/react'

export default function BtnAddToCart() {
    return (
        <Button
            as={Link}
            href='#'
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

'use client'

import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Link } from '@nextui-org/react'

export default function BtnAddToCart() {
    return (
        <Button
            as={Link}
            href='#'
            className='capitalize hover:!bg-black text-gray-900/60 hover:text-white'
            variant='light'
            color='default'
            size='sm'
            radius='full'
            startContent={<FontAwesomeIcon icon={faCartArrowDown} fontSize={14} />}
        >
            cart
        </Button>
    )
}

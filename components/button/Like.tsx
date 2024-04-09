'use client';

import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import { useState } from 'react';

export default function LikeButton() {
    const [isLiked, setLiked] = useState(true);

    return (
        <Button
            className={`capitalize text-gray-500 hover:!bg-white ${isLiked ? 'hover:text-rose-600' : 'text-rose-600'}`}
            variant='light'
            color='default'
            size='sm'
            radius='full'
            onClick={() => setLiked(!isLiked)}
            startContent={<FontAwesomeIcon icon={isLiked ? faHeart : faHeartSolid} fontSize={16} />}
            aria-label='like button'
        >
            124
        </Button>
    )
}

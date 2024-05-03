import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import { useState } from 'react';

export default function LikeButton() {
    const [isLiked, setLiked] = useState(true);

    return (
        <Button
            className={`capitalize text-gray-500 text-[14px] hover:!bg-white ${isLiked ? 'hover:text-rose-600' : 'text-rose-600'}`}
            variant='light'
            color='default'
            size='sm'
            radius='full'
            onClick={() => setLiked(!isLiked)}
            startContent={
                <div className='flex items-center gap-x-[6px]'>
                    <FontAwesomeIcon icon={isLiked ? faHeart : faHeartSolid} fontSize={16} />
                    <span className='leading-none'>124</span>
                </div>
            }
            aria-label='like button'
        />
    )
}

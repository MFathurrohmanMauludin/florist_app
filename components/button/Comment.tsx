import { faComment } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Link } from '@nextui-org/react'

export default function CommentButton() {

    return (
        <Button
            as={Link}
            href='#'
            className='capitalize text-gray-500 text-[14px] hover:!bg-white hover:text-gray-900'
            variant='light'
            color='default'
            size='sm'
            radius='full'
            startContent={
                <div className='flex items-center gap-x-[6px]'>
                    <FontAwesomeIcon icon={faComment} fontSize={16} />
                    <span className='leading-none'>98</span>
                </div>
            }
        />
    )
}

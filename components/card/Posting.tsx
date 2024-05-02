import { Card, CardHeader, Avatar, Button, CardBody, CardFooter, Image } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import LikeButton from '../button/Like';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

const Posting = () => {
    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <>
            <Card className="max-w-[340px]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                            <h5 className="text-small tracking-tight text-default-400">5 day ago</h5>
                        </div>
                    </div>
                    <Button
                        className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                        color="secondary"
                        radius="full"
                        size="sm"
                        variant={isFollowed ? "bordered" : "solid"}
                        onPress={() => setIsFollowed(!isFollowed)}
                    >
                        {isFollowed ? "Unfollow" : "Follow"}
                    </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <Image src='https://source.unsplash.com/1200x760?google+place' height={245} alt='' loading='lazy' />
                </CardBody>
                <CardFooter className="flex flex-col gap-y-4">
                    <div className="space-y-1">
                        <Link href={'#'} className='text-[18px] text-gray-800 font-semibold hover:opacity-80'>Best flowers for inside home</Link>
                        <p className='text-default-500 tracking-wide'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quia.</p>
                    </div>

                    <div className="flex flex-row items-center gap-x-3 text-gray-500 w-full">
                        <LikeButton />
                        <div className="flex items-center gap-x-2">
                            <FontAwesomeIcon icon={faChartSimple} fontSize={14} />
                            <span className='text-[14px] leading-none'>140.5K</span>
                        </div>
                    </div>

                </CardFooter>
            </Card>
        </>
    )
}

export default Posting
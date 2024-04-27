import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/react';
import iconBuy from '../public/Buy.svg';
import iconSearch from '../public/Search.svg';
import iconHeart from '../public/Heart.svg';
import iconProfile from '../public/Profile.svg';
import Image from 'next/image';

export default function Header() {
    const linkData = ['event', 'category', 'fertilizer', 'gifts', 'guide'];
    const pageData = [
        {
            'page': 'search',
            'icon': iconSearch
        },
        {
            'page': 'whishlist',
            'icon': iconHeart
        },
        {
            'page': 'cart',
            'icon': iconBuy
        },
        {
            'page': 'profile',
            'icon': iconProfile
        },
    ];

    return (
        <>
            <div className="flex items-center justify-between px-8 py-5">
                {/* logo */}
                <a href="#" className='text-lg'>Florist Go</a>

                {/* nav-center */}
                <div className="flex items-center xs:hidden md:hidden gap-x-[48px]">
                    {
                        linkData.map((data, index) =>
                            <Link
                                href={`/${data !== 'home' ? data : ''}`}
                                className='capitalize text-[#51515199] hover:text-[#292929]'
                                size="md"
                                color='primary'
                                key={index}>
                                {data}
                            </Link>
                        )
                    }
                </div>

                {/* nav-right */}
                <div className="flex items-center gap-x-[28px] xs:gap-x-[16px]">
                    {
                        pageData.map((data, index) =>
                            <Button
                                as={Link}
                                className='hover:!bg-white'
                                href={data.page}
                                variant='light'
                                size='sm'
                                isIconOnly
                                startContent={<Image src={data.icon} width={24} alt={'buy'} />}
                                key={index}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}

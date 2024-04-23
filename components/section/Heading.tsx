import * as icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'

interface Props {
    title: string;
    icon: any;
    isIcon: boolean;
    colorBorder: string;
    colorBackground: string;
    colorText: string;
}

export default function Heading(getData: Props) {
    const icon: any = icons;

    return (
        <>
            <div className={`flex items-center justify-start gap-x-2 px-8 py-2 ${getData.colorBackground} ${getData.colorText} w-fit border-l-4 ${getData.colorBorder}`}>
                {
                    getData.isIcon ?
                        <FontAwesomeIcon icon={icon[getData.icon]} fontSize={24} />
                        :
                        <Image src={getData.icon} alt={getData.title} width={24} height={24} />
                }
                <span className='text-xl capitalize'>{getData.title}</span>
            </div>
        </>
    )
}

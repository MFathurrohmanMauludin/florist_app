import * as icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface Props {
    title: string;
    icon: any;
    colorBorder: string;
    colorBackground: string;
    colorText: string;
}

export default function Heading(getData: Props) {
    const icon: any = icons;

    return (
        <>
            <div className={`flex justify-start gap-x-2 px-8 py-2 ${getData.colorBackground} ${getData.colorText} w-fit border-l-4 ${getData.colorBorder}`}>
                <FontAwesomeIcon icon={icon[getData.icon]} fontSize={24} />
                <span className='text-xl capitalize'>{getData.title}</span>
            </div>
        </>
    )
}

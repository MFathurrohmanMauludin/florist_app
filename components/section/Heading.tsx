import React from 'react'

interface Props {
    title: string;
}

export default function Heading(getData: Props) {
    return (
        <>
            <div className="flex justify-start px-8">
                <span className='text-xl capitalize'>{getData.title}</span>
            </div>
        </>
    )
}

import React from 'react'
import Heading from './Heading'
import Posting from '../card/Posting'

const LatestPost = () => {
    return (
        <div className='space-y-6 py-8'>
            <Heading
                title={"latest post"}
                icon={'faNewspaper'}
                colorBorder={"border-purple-900"}
                colorBackground={"bg-purple-800/30"}
                colorText={"text-purple-800"}
                isIcon={true}
            />

            <div className="px-6">
                <Posting />
            </div>
        </div>
    )
}

export default LatestPost;
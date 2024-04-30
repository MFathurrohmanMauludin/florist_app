import React from 'react'
import Heading from './Heading'

const Blog = () => {
    return (
        <>
            <Heading
                title={"latest post"}
                icon={'faNewspaper'}
                colorBorder={"border-purple-900"}
                colorBackground={"bg-purple-800/30"}
                colorText={"text-purple-700"}
                isIcon={true}
            />

            <div className="px-6">

            </div>
        </>
    )
}

export default Blog
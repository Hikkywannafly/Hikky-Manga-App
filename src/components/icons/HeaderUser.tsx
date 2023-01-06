import React from 'react'

import { FaUserAlt } from 'react-icons/fa'
type Props = {}

const HeaderUser = (props: Props) => {
    return (
        <div className='bg-secondary items-center rounded-full p-4 '>
            <FaUserAlt className='w-8 h-8' />
        </div>
    )
}

export default HeaderUser
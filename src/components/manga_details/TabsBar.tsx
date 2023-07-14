import React from 'react'
import Link from 'next/link'
type Props = {}

const TabName = ({ title }: { title: string }) => {
    return (

        <div className="mr-2" >
            <button className="inline-block p-4 border-b-2 rounded-t-lg" type="button" role="tab"  >{title}</button>
        </div>

    )
}

const TabsBar = (props: Props) => {
    return (
        <>

            <div className="w-[100%] bg-red-500">
                test
            </div>

        </>
    )
}

export default TabsBar
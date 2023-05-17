import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarLink({data}) {
    
    const isActive = (text) => {
        return (data.activePage===text);
    }

    return (
        <div className='flex justify-center items-center w-full h-16 my-2'>
            <Link onClick={() => data.setActivePage(data.text)} to={data.target} className={`flex flex-row px-4 items-center text-xl w-16 h-16 ${isActive(data.text) ? 'bg-emerald-400' : 'bg-emerald-300'} rounded-[32px] hover:rounded-[6px] duration-200 mx-0 ${data.sidebarHidden ? 'justify-center' : 'w-48'}`}>
                <div className={`flex flex-col justify-end items-center h-[22px] ${data.sidebarHidden ? '' : 'mr-2'}`}>
                    {data.icon}
                </div>
                
                <div className='overflow-hidden '>
                {data.sidebarHidden ?
                    <></>
                    :
                    data.text
                }
                </div>
            </Link>
        </div>
  )
}

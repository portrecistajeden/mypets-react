import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarLink({target, text, icon, sidebarHidden}) {
  return (
    <div className='flex justify-center items-center w-full h-16 my-2'>
        <Link to={target} className={`flex flex-row px-4 items-center text-xl w-16 h-16 bg-emerald-300 rounded-[32px] hover:rounded-[6px]  duration-200 mx-0 ${sidebarHidden ? 'justify-center' : 'w-48'}`}>
            <div className={` overflow-hidden flex justify-center items-center h-8 ${sidebarHidden ? '' : 'mr-2'}`}>
                {icon}
            </div>

            {sidebarHidden ?
                <></>
                :
                text
            }
        </Link>
    </div>
  )
}

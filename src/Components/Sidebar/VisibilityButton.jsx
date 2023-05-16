import React from 'react'
import { BiRightArrow } from 'react-icons/bi';

export default function VisibilityButton({sidebarHidden, setSidebarHidden}) {
  return (
    <button onClick={() => setSidebarHidden(!sidebarHidden)} className='w-12 h-12 ml-auto mr-4 hover:text-pink-300'>
        <BiRightArrow className={`${sidebarHidden ? '' : 'rotate-180'} transition duration-200 ease-in-out text-3xl mx-auto`}/>
    </button>
  )
}

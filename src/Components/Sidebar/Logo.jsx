import React from 'react'

export default function Logo({sidebarHidden}) {
  return (
    <div className='flex items-center justify-center h-16 mb-8'>
        <h1 className="text-4xl font-bold text-center m-0"><span className="text-pink-300">{sidebarHidden ? 'm' : 'my'}</span>{sidebarHidden ? 'P' : 'Pets'}</h1>
    </div>
  )
}

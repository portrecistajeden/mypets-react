import React from 'react'

export default function VisibilityButton({sidebarHidden, setSidebarHidden}) {
  return (
    <button onClick={() => setSidebarHidden(!sidebarHidden)} className='w-12 h-12 ml-auto'>
        <div className={`${sidebarHidden ? '' : 'rotate-180'} transition duration-300 ease-in-out text-3xl`}>▶</div>
    </button>
  )
}

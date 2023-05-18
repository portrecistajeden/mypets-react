import React from 'react'

export default function PetCard({data}) {
  return (
    <div className='relative flex flex-col items-center w-1/4 aspect-[4/5]'>
        <div id=' photoWrapper' className='w-fit h-1/3 absolute top-0 z-30'>
            <img className='rounded-full border-4 border-accent h-full w-full object-cover' src={data.imgSource}/>
        </div>
        <div id='info' className='bg-primary absolute top-[16.66667%] w-full h-5/6 flex flex-col grow z-10 rounded-2xl border-4 border-accent shadow-md shadow-stone-300'>
            <span className='h-1/5 w-full'/>
            <div className='mx-auto text-2xl'>
                <h2>
                    Vinci Goliszek
                </h2>
            </div>
        </div>
    </div>
  )
}

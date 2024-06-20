import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        
      </div>
      <p>IT'S TIME TO GET</p>
      <h1 className='uppercase font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400 font-medium'>normous</span></h1>
      <p className='text-sm md:text-base font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing <span className='text-blue-400 font-medium'>elit</span>. Quidem odio ab ut repudiandae, quo explicabo porro unde, molestias ipsum eveniet animi beatae ad repellat repellendus pariatur?</p>
    <Button func={() => {
      window.location.href = '#generate'
    }} text={"Accept & Begin"}></Button>
    </div>
  )
}

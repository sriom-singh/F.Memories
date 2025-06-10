import React from 'react'

const loading = () => {
  return (
    <div className='flex space-x-2 bg-zinc-600 justify-center items-center  h-screen dark:invert'>
 	<span className='sr-only'>Loading...</span>
  	<div className='h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div className='h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div className='h-8 w-8 bg-primary rounded-full animate-bounce'></div>
</div>
  )
}

export default loading
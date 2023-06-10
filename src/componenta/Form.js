import React from 'react'

const Form = () => {
  return (
    <div className='py-8'>
        <form className='flex flex-row space-x-6'>
<input type='text'
placeholder='write'
className='border-2 rounded-md px-4'>
</input>
<input type='text'
placeholder='write'
className='border-2 rounded-md '>
</input>

        </form>
        <div className='px-12 py-5'>
  <button className='border-2 rounded-lg bg-purple-700 text-yellow-50 px-16  py-2 cursor-button'> get a new meme image</button>
</div>
    </div>
  )
}

export default Form
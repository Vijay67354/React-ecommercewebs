import React from 'react'

const Sales = () => {
  return (
    <div>
    <div className='container mx-auto m-auto items-center justify-center '>
 <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  mt-12'>

  <div className=''>
    <p className='font-bold text-3xl'>New Top Sales!</p>
  </div>

  <div className=' flex gap-4'>
    <p className='font-bold text-1xl'>Audio & Video</p>
    <p className='font-bold text-1xl'>Gamming</p>
    <p className='font-bold text-1xl'>Headphone</p>
  </div>

  <div className='ml-[220px]'>
    <p className='font-bold text-1xl'>View All</p>

  </div>
</div> 

</div>

<hr
        // className={color ? "bg-black text-black " : "bg-black text-black p-[1px] w-[100%] mx-auto "}
        className="bg-black text-black p-[2px] w-[87%] mx-[120px] items-center justify-center "
      />
      </div>
  )
}

export default Sales
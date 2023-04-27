import React from 'react'

const About = () => {
  return (
    <div>About
        <nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
     
      <div class="flex ml-[90px] flex-1 items-center justify-center sm:items-stretch sm:justify-start  ">
      
        <div class="ml-[90px] sm:ml-6 block lg:ml-[370px]  sm:pl-[160px] ">
          <div class="flex space-x-4 ml-[90px]">
         
          <div className='flex ml-[90px]'>
               <input type='text' placeholder='Search' className='ml-[90px] p-2 border-2 border-red-500 rounded-l-md lg:w-[421px]  sm:w-[270px] placeholder-gray-700'/> 
               <div className='p-3 bg-[#FA3434]'>
               <img src="./images/Vector.png"/>
               </div>
               </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
   

        <div class="relative ml-3">
       

          <div class="row ">
    <div class="col-3">
    <img src="./images/Vector (17).png" className=''/>
                    <p className='text-[12px] text-[#8B96A5]'>User</p>
    </div>
    <div class="col-3">
    <img src="./images/Vector (18).png"/>
                    <p className='text-[12px] text-[#8B96A5]'>User</p>
    </div>
    <div class="col-3">
    <img src="./images/Vector (19).png"/>
                    <p className='text-[12px] text-[#8B96A5]'>User</p>
    </div>
  </div>
    
        </div>
      </div>
    </div>
  </div>



</nav>
    </div>
  )
}

export default About
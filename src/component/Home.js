import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Sales from './Sales'
import Slider from './Slider'
import Blog from './Blog'
import SmartSlider from './Smartslider'
import SmartSlidere from './SmartSlidere'
import Subscribe from './Subscribe'
import Footer from './Footer'
import Consumer from './Consumer'
const Home = () => {
    return (
        <>
            <div>

                <div className='bg-[#E9E9E9] p-[8px] '>
                    <p className='text-center text-[12px] font-semibold'>World Wide Completely Free Returns and Free Shipping</p>
                </div>

                <div className='max-w-12xl px-2 sm:px-6'>
                    <div className='grid grid-col-3 md:grid-col-3 sm:grid-col-3  lg:grid-cols-3  mt-[51px] '>
                        <div className='col-4'>

                            <img src="./images/Logo_B 1.png" className=" w-[112px] h-[50px] ml-[90px]" />
                        </div>

                        <div className=''>
                            <div className='flex'>
                                <input type='text' placeholder='Search' className='p-2 border-2 border-red-500 rounded-l-md lg:w-[421px] placeholder-gray-700' />
                                <div className='p-3 bg-[#FA3434]'>
                                    <img src="./images/Vector.png" />
                                </div>
                            </div>
                        </div>

                        <div class="">

                            <div class="row lg:pl-[280px]">
                                <div class="col-3">
                                    <img src="./images/Vector (17).png" className='' />
                                    <p className='text-[12px] text-[#8B96A5]'>User</p>
                                </div>
                                <div class="col-3">
                                    <img src="./images/Vector (18).png" />
                                    <p className='text-[12px] text-[#8B96A5]'>User</p>
                                </div>
                                <div class="col-3">
                                    <img src="./images/Vector (19).png" />
                                    <p className='text-[12px] text-[#8B96A5]'>User</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <Navbar />
                <Banner />
                <Blog />
                <Sales />
                <Slider />

                <SmartSlider />
                <Consumer />
                <Sales />
                <Slider />
                <Sales />
                <Slider />
                <SmartSlidere />
                <Subscribe />
                <Footer />
            </div>
        </>
    )
}

export default Home
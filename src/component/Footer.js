import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='grid grid-cols-1 mt-[240px] lg:grid-cols-4 md:grid-cols-2 bg-[#f9f5f5] lg:px-[120px]'>
            <div className='flex flex-col space-y-1 mt-12'>
                <p className='font-semibold text-[20px]'>INFORMATION</p>
                <p1>About us</p1>
                <p1>Delivery information</p1>
                <p1>Privacy Policy</p1>
                <p1>Sales</p1>
                <p1>Terms & Condition</p1>
                <p1>Shipping Plicy</p1>
            </div>
            <div className='flex flex-col space-y-1 mt-12'>
                <p className='font-semibold text-[20px]'>INFORMATION</p>
                <p1>My account</p1>
                <p1>My orders</p1>
                <p2>Returns</p2>
                <p1>Shipping</p1>
                <p1>Whislist</p1>
            </div>
            <div className='flex flex-col space-y-1 mt-12'>
                <p className='font-semibold text-[20px]'>STORE</p>
                <p1>Affiliate</p1>
                <p1>Bestsellers</p1>
                <p1>Discount</p1>
                <p1>Latest products</p1>
                <p1>Sale</p1>
                <p1>All collection</p1>
            </div>
            <div className='flex flex-col mt-12'>
                <p className='font-semibold text-[20px]'>CONTACT US</p>
                <p1>if you have any qustion. please contact us demo@example.com</p1>
            
            <div className='flex mt-2'>
                <div className='pr-3'>
<img src="./images/Vector1.png"/>
                </div>
                <div>
                    <p>Your address goes here.123,Address.</p>
                </div>
            </div>

            <div className='flex'>
                <div>
<img src="./images/Vector (25).png" className='h-10'/>
                </div>
                <div className='pl-3 leading-3'>
                    <p>+0 123 456 789</p>
                    <p>+0 123 456 789</p>
                </div>
            </div>
            <div className='flex gap-4 mt-2 mb-4'>
                <div>
                <img src="./images/Facebook.png"/>
                </div>
                <div>
                <img src="./images/Twitter (1).png"/>
                </div>
                <div>
                <img src="./images/Vimeo.png"/>
                </div>
                <div>
                <img src="./images/Youtube (1).png"/>
                </div>
            </div>
            </div>

           
        </div>
        <hr
        // className={color ? "bg-black text-black " : "bg-black text-black p-[1px] w-[100%] mx-auto "}
        className="mt-12 bg-black text-black p-[2px] w-[87%] mx-[120px] items-center justify-center "
      />
        <div className='footermain text-center mx-auto items-center mt-6'>
                <div className='flex text-center mx-auto px-[520px]'>
       <p className='flex text-center mx-auto'>Our Stores /</p>
       <p className='flex text-center mx-auto'>Shipping /</p>
       <p className='flex text-center mx-auto'>Payment /</p>
       <p className='flex text-center mx-auto'>Checkout /</p>
       <p className='flex text-center mx-auto'>Terms & Condition /</p>
       <p className='flex text-center mx-auto'>Policy Shipping /</p>
       <p className='flex text-center mx-auto'>Returns /</p>
       <p className='flex text-center mx-auto'>Refunds /</p>
       </div>
       <p className='text-center'>@2019 Lift Media. All rights reserved.</p>
       
            </div>
            
        </div>
  )
}

export default Footer
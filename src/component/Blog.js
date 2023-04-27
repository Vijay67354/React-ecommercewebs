// import React from 'react'
// // import Pic1 from './images/Vector (17).png';
// // import Pic2 from './images/Vector (18).png';
// // import Pic3 from './images/Vector (19).png';
// // import Pic4 from './images/Vector (23).png';
// // import images1 from './images/Vector (17).png';
// // import images2 from './images/Vector (19).png';
// // import images3 from './images/Vector (20).png';
// // import images4 from './images/Vector (21).png';
// const Blog = () => {
  
//     const support = [
//         {
//             img:'./images/Vector24.png',
//             title:"EAS RETURNS",
//             text:"Shop with Confidence",
//         },
//         {
//             img:'./images/Vector1.png',
//             title:"SUPPORT 24/7",
//             text:"Shop with Confidence",
//         },
//         {
//             img:'./images/Vector1.png',
//             title:"EAS RETURNS",
//             text:"Shop with Confidence",
//         },
//         {
//             img:'./images/Vector (17).png',
//             title:"FREE SHIPPING",
//             text:"Shop with Confidence",
//         },
    
//     ]
//   return (
//     <>
//     <div>Blog
//     <div className='prodctHmePageSwc' id='solution'>

//     <div className='container'>

//         <div>

//             <div className="main-card">
           
//                 {/* <div className="main-card-one">
//                 {support.map((item) => (
//                     <div className="card-one" ontouchstart="this.classNameList.toggle('hover');">
//                         <div className="container-solution">
//                             <div className="front-solution  drop-shadow-lg" style={{ backgroundImage: `url(${item.img})` }}>
                                
//                                 <div className="inner-card">
                                
//                                     <span className='flex h-64 justify-center items-center text-center font-bold'>{item.title}</span>
//                                 </div>
//                             </div>
//                             <div className="back-solution">
//                                 <div className="inner-solution text-white">
//                                     <p className='text-white'>{item.text}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                        ))}
//                 </div> */}

//                 <div className='grid grid-cols-1 lg:grid-cols-4'>
//                     {support.map((item)=>(
//                         <>
//                  <div className='container'>
//                     <div className='row'>
//                         <div className='col-2 flex'>
//                         <div className="front-solution  drop-shadow-lg" style={{ backgroundImage: `url(${item.img})` }}>
//                         <div>
//                                 <p>EASY RETURNS</p>
//                                 <p1>Shop WIth Confidence</p1>
//                             </div>
//                            </div>     
                        
                       
//                         </div>
//                     </div>
//                     </div>       
//                         </>
//                     ))}
//                 </div>
//             </div>
//         </div>

    
//     </div>
// </div>
//     </div>
//     </>
//   )
// }

// export default Blog
























import React from 'react'

const Blog = () => {
  return (
    <div className='max-w-[1600px] mx-auto mb-[70px]'>
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 bg-[#F0F2F5] mb-0 p-[40px]">
    <div className="">
<div className="flex gap-2">
    <div>
        <img src="./images/Vector1.png"/>
    </div>
    <div className='mb-0 '>
        <p3 className='paragraph block'>EASY RETURNS</p3>
        <p4 className='paragraph'>Shop With Confidence</p4>
    </div>
</div>
    </div>
    <div className="">
    <div className="flex gap-2">
    <div>
        <img src="./images/Vector24.png"/>
    </div>
    <div className='mb-0 '>
        <p3 className='paragraph block'>EASY RETURNS</p3>
        <p4 className='paragraph'>Shop With Confidence</p4>
    </div>
</div>
    </div>
    <div className="">
    <div className="flex gap-2">
    <div>
        <img src="./images/Vector (21).png"/>
    </div>
    <div className='mb-0 '>
        <p3 className='paragraph block'>EASY RETURNS</p3>
        <p4 className='paragraph'>Shop With Confidence</p4>
    </div>
</div>
    </div>
    <div className="">
    <div className="flex gap-2">
    <div>
        <img src="./images/Vector(23).png"/>
    </div>
    <div className='mb-0 '>
        <p3 className='paragraph block'>EASY RETURNS</p3>
        <p4 className='paragraph'>Shop With Confidence</p4>
    </div>
</div>
    </div>
</div>

</div>

  )
}

export default Blog
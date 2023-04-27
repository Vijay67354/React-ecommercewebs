
import React, { Component } from "react";
import Slider from "react-slick";
import Blog from './Blog'

export default class SimpleSlider extends Component {
  render() {

    return (
      <div className="px-[134px] mt-[80px]">

     
          <div className="">
          <div class="grid grid-rows-3 grid-flow-col gap-4  ">
 
    <div class="lg:row-span-3 row-span-1 col-span-2">
        <img src="./images/23.png" className="w-[100%] h-[65%]"/>

      
    </div>
 
  <div class="col-span-2 ">  <img src="./images/s.png" className="w-[100%] lg:h-[210px]"/></div>
  <div class=" col-span-2 "> <img src="./images/21.png" className="w-[100%] lg:h-[210px]"/></div>
</div>


          </div>






          {/* <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">
  <div>
        <img src="./images/23.png" className="w-[100%] h-[100%]"/>
    </div>
  </div>
  <div class="col-span-2 ...">
  <div class="col-span-2 ">  <img src="./images/21.png" className="w-[100%] h-[100%]"/></div>
  </div>
  <div class="row-span-2 col-span-2 ...">
  <div class="">  <img src="./images/21.png" className="w-[100%] h-[100%]"/></div>
  </div>
</div> */}






          <div>
            {/* <h3>2</h3>
          </div>
          <div>
            <h3>3</h3> */}
          </div>
       
          {/* <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">
  <img src="./images/23.png" className="w-[100%] h-[100%]"/>
  </div>

  <div class="">  <img src="./images/21.png" className="w-[100%] h-[100%]"/></div>
  <div class=" "> <img src="./images/21.png" className="w-[100%] h-[100%]"/></div>

</div> */}
     









      
      </div>

      
    );
  }
}

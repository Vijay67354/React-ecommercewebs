import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ]
    };
    return (
      <div className="lg:pl-[120px] lg:pr-[120px] mt-12">
       
        <Slider {...settings}>
         
            <div className="flex flex-col">
              <div>
                <img src="./images/Frame83.png" className="w-[60px] "/>
                
              </div>
              <div>
              <div className="flex ">

                <div>
              <img src="./images/image8.png" />
              </div>
              <div>
<img src="./images/Group 996.png" />
</div>
              </div>
           
              <p6 className="font-semibold">Android Television Super</p6>
        <p1 className=" block lg:pl-10 font-semibold">New DGT - 256</p1>
        <p2  className=" block lg:pl-[63px] pt-1 text-red-600 font-semibold">$256.00</p2>
        <div className="lg:pl-[50px] pt-1">
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>     
        </div>

</div>
          </div>
          <div>
          {/* <img src="./images/image5.png"/> */}










          <div className="flex flex-col">
              <div>
                <img src="./images/Frame83.png" className="w-[60px] "/>
                
              </div>
              <div>
              <div className="flex ">

                <div>
              <img src="./images/image5.png" />
              </div>
              <div>
<img src="./images/Group 996.png" />
</div>
              </div>
           
              <p6 className="font-semibold">Android Television Super</p6>
        <p1 className=" block lg:pl-10 font-semibold">New DGT - 256</p1>
        <p2  className=" block lg:pl-[63px] pt-1 text-red-600 font-semibold">$256.00</p2>
        <div className="lg:pl-[50px] pt-1">
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>     
        </div>

</div>
          </div>


          </div>
          <div>
       <div className="flex flex-col">
              <div>
                <img src="./images/Frame83.png" className="w-[60px] "/>
                
              </div>
              <div>
              <div className="flex ">

                <div>
                <img src="./images/image5.png" />
              </div>
              <div>
<img src="./images/Group 996.png" />
</div>
              </div>
           
              <p6 className="font-semibold">Android Television Super</p6>
        <p1 className=" block lg:pl-10 font-semibold">New DGT - 256</p1>
        <p2  className=" block lg:pl-[63px] pt-1 text-red-600 font-semibold">$256.00</p2>
        <div className="lg:pl-[50px] pt-1">
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>     
        </div>

</div>
          </div>






          </div>
          <div>
      







          <div className="flex flex-col">
              <div>
                <img src="./images/Frame83.png" className="w-[60px] "/>
                
              </div>
              <div>
              <div className="flex ">

                <div>
              <img src="./images/image44.png" />
              </div>
              <div>
<img src="./images/Group 996.png" />
</div>
              </div>
           
              <p6 className="font-semibold">Android Television Super</p6>
        <p1 className=" block lg:pl-10 font-semibold">New DGT - 256</p1>
        <p2  className=" block lg:pl-[63px] pt-1 text-red-600 font-semibold">$256.00</p2>
        <div className="lg:pl-[50px] pt-1">
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>     
        </div>

</div>
          </div>
          </div>
          <div>



          <div className="flex flex-col">
              <div>
                <img src="./images/Frame83.png" className="w-[60px] "/>
                
              </div>
              <div>
              <div className="flex ">

                <div>
              <img src="./images/image5.png" />
              </div>
              <div>
<img src="./images/Group 996.png" />
</div>
              </div>
           
              <p6 className="font-semibold">Android Television Super</p6>
        <p1 className=" block lg:pl-10 font-semibold">New DGT - 256</p1>
        <p2  className=" block lg:pl-[63px] pt-1 text-red-600 font-semibold">$256.00</p2>
        <div className="lg:pl-[50px] pt-1">
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>     
        </div>

</div>
          </div>
          </div>
          <div>


          <div className="flex flex-col">
              <div>
                <img src="./images/Frame83.png" className="w-[60px] "/>
                
              </div>
              <div>
              <div className="flex ">

                <div>
              <img src="./images/image5.png" />
              </div>
              <div>
<img src="./images/Group 996.png" />
</div>
              </div>
           
              <p6 className="font-semibold">Android Television Super</p6>
        <p1 className=" block lg:pl-10 font-semibold">New DGT - 256</p1>
        <p2  className=" block lg:pl-[63px] pt-1 text-red-600 font-semibold">$256.00</p2>
        <div className="lg:pl-[50px] pt-1">
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>     
        </div>

</div>
          </div>
          </div>
          <div>
       


          <div className="flex flex-col">
              <div>
                <img src="./images/Frame83.png" className="w-[60px] "/>
                
              </div>
              <div>
              <div className="flex ">

                <div>
              <img src="./images/image44.png" />
              </div>
              <div>
<img src="./images/Group 996.png" />
</div>
              </div>
           
              <p6 className="font-semibold">Android Television Super</p6>
        <p1 className=" block lg:pl-10 font-semibold">New DGT - 256</p1>
        <p2  className=" block lg:pl-[63px] pt-1 text-red-600 font-semibold">$256.00</p2>
        <div className="lg:pl-[50px] pt-1">
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>     
        </div>

</div>
          </div>
          </div>
          <div>
          <img src="./images/image33.png"/>
          </div>
        </Slider>
      </div>
    
    );
  }
}










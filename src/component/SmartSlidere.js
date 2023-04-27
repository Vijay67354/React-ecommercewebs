import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="gap-12 lg:px-[97px] mt-[60px]">
 
        <Slider {...settings}>
            
          <div>
           <img src="./images/image 115.png" className="w-[97%] h-[100%]"/>
          </div>
          <div>
          <img src="./images/image 116.png" className="w-[97%] h-[100%]"/>
          </div>
          <div>
           <img src="./images/image 115.png" className="w-[97%] h-[100%]"/>
          </div>
          <div>
          <img src="./images/image 116.png" className="w-[97%] h-[100%]"/>
          </div>
          <div>
           <img src="./images/image 115.png" className="w-[97%] h-[100%]"/>
          </div>
          <div>
          <img src="./images/image 116.png" className="w-[97%] h-[100%]"/>
          </div>
          <div>
           <img src="./images/image 115.png" className="w-[97%] h-[100%]"/>
          </div>
          <div>
          <img src="./images/image 116.png" className="w-[97%] h-[100%]"/>
          </div>
          <div>
           <img src="./images/image 115.png" className="w-[97%] h-[100%]"/>
          </div>
          <div>
          <img src="./images/image 116.png" className="w-[97%] h-[100%]"/>
          </div>
        </Slider>
      </div>
    );
  }
}
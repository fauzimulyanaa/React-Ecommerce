import Media12 from '../../assets/media-12.png';
import Media13 from '../../assets/media-13.png';
import Media14 from '../../assets/media-14.png';
import Adidas from '../../assets/adidas.png';
import Nike from '../../assets/nike.png';
import Air from '../../assets/air.png';
import Nb from '../../assets/nb.png';
import Armor from '../../assets/armor.png';
import Puma from '../../assets/puma.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="mb-[10px] px-[50px] mt-10 font-custom">
      <div className="flex justify-between gap-7 ">
        <Slider {...settings} className="relative overflow-hidden w-[100%] rounded-lg  shadow-lg bg-[#FFF7F1] h-[350px]">
          <div className="left w-full h-[350px] flex justify-center items-center pb-[90px] ">
            <div className="flex items-center justify-between gap-2 px-[70px]">
              <div className="w-[50%]">
                <h1 className="pb-2 text-2xl uppercase text-red-800 font-bold">New Arrival</h1>
                <h1 className="text-5xl font-bold">Nike Air Force 1</h1>
                <p className="text-[13px] mt-5">{" From classic plimsolls to modern, high-tech designs, there's a sneaker style to suit every taste and occasion."}</p>
              </div>
              <div className="">
                <img src={Media12} alt="Nike" className="w-[350px]" />
              </div>
            </div>
          </div>
          <div className="left w-full h-[350px] flex justify-center items-center pb-[90px] ">
            <div className="flex items-center justify-between gap-2 px-[70px]">
              <div className="w-[50%]">
                <h1 className="pb-2 text-2xl uppercase text-red-800 font-bold">New Arrival</h1>
                <h1 className="text-5xl font-bold">Nike Air Force 1</h1>
                <p className="text-[13px] mt-5">{" From classic plimsolls to modern, high-tech designs, there's a sneaker style to suit every taste and occasion."}</p>
              </div>
              <div className="">
                <img src={Media13} alt="Nike" className="w-[350px]" />
              </div>
            </div>
          </div>
          <div className="left w-full h-[350px] flex justify-center items-center pb-[90px] ">
            <div className="flex items-center justify-between gap-2 px-[70px]">
              <div className="w-[50%]">
                <h1 className="pb-2 text-2xl uppercase text-red-800 font-bold">New Arrival</h1>
                <h1 className="text-5xl font-bold">Nike Air Force 1</h1>
                <p className="text-[13px] mt-5">{" From classic plimsolls to modern, high-tech designs, there's a sneaker style to suit every taste and occasion."}</p>
              </div>
              <div className="">
                <img src={Media14} alt="Nike" className="w-[350px]" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flex items-center justify-around mt-10">
        <img src={Nike} alt="logo" />
        <img src={Adidas} alt="logo" />
        <img src={Air} alt="logo" />
        <img src={Puma} alt="logo" />
        <img src={Nb} alt="logo" />
        <img src={Armor} alt="logo" />
      </div>
    </div>
  );
}

export default HomeSlider;

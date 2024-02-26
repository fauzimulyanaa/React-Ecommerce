import Hero from '../../assets/hero.jpg';
import Media1 from '../../assets/media-1.jpg';
import Media2 from '../../assets/media-2.jpg';
import Media3 from '../../assets/media-3.jpg';
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
    <div className="mb-[200px] px-[50px] mt-10 font-custom">
      <Slider {...settings} className="relative overflow-hidden">
        <div className="overflow-hidden object-contain mx-auto rounded-xl w-full  h-[750px] relative">
          <img src={Hero} alt="Nike Sneakers" className="absolute bottom-1 top-[-90px]" />
        </div>
        <div className="overflow-hidden object-contain mx-auto rounded-xl w-full  h-[700px] relative">
          <img src={Media1} alt="Nike Sneakers" className="absolute bottom-1 top-[-90px]" />
        </div>
        <div className="overflow-hidden object-contain mx-auto rounded-xl w-full  h-[700px] relative">
          <img src={Media2} alt="Nike Sneakers" className="absolute bottom-1 top-[-150px]" />
        </div>
        <div className="overflow-hidden object-contain mx-auto rounded-xl w-full  h-[700px] relative">
          <img src={Media3} alt="Nike Sneakers" className="absolute bottom-1 top-[-200px]" />
        </div>
      </Slider>
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

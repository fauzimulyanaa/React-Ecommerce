import Nike1 from '../../assets/nike-1.jpg';
import Nike2 from '../../assets/nike-2.jpg';
import Nike3 from '../../assets/nike-3.jpg';
// import Nike4 from '../../assets/nike-4.jpg';
import Media1 from '../../assets/media-1.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeSlider() {
  const settings = {
    dots: true,
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
    <Slider {...settings} className="relative px-[50px] h-[800px] mt-[30px] overflow-hidden mb-[100px]">
      <div className="">
        <img src={Nike1} alt="Nike Banner 1" className="w-full" />
      </div>
      <div>
        <img src={Nike2} alt="Nike Banner 2" className="w-full" />
      </div>
      <div>
        <img src={Media1} alt="Nike Banner 2" className="w-full" />
      </div>
      <div>
        <img src={Nike3} alt="Nike Banner 2" className="w-full" />
      </div>
    </Slider>
  );
}

export default HomeSlider;

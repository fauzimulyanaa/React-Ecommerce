import Trend1 from '../../../assets/tren-1.jpg';
import Trend2 from '../../../assets/trend-2.jpg';

function TrendingProduct() {
  return (
    <div className="px-[50px] mb-[100px] w-full ">
      <h1 className="font-custom text-3xl font-bold">Trending Now</h1>
      <div className="flex gap-5 mt-10 ">
        <div className="w-[50%]">
          <img src={Trend1} alt="Nike Shoes" className="w-full" />
        </div>
        <div className=" w-[50%]">
          <img src={Trend2} alt="Nike Shoes" className="w-full" />
        </div>
      </div>
      <div className="font-custom flex flex-col justify-center mx-auto items-center mt-[60px] mb-[30px]">
        <h1 className="text-5xl">Shop Now, Goodlook Later</h1>
        <p className="w-[60%] text-center mt-6">{"We have a bunch collection for you!.let's go explore and find your dream shoes, make it happen"}</p>
      </div>
    </div>
  );
}

export default TrendingProduct;

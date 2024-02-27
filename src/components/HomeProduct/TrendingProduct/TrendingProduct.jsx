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
    </div>
  );
}

export default TrendingProduct;

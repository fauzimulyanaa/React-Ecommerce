import Trend1 from '../../../assets/tren-1.jpg';
import Trend2 from '../../../assets/trend-2.jpg';

function TrendingProduct() {
  return (
    <div className="px-[50px] mb-[200px] w-full ">
      <h1 className="font-custom text-3xl font-bold">Trending Now</h1>
      <div className="flex gap-[370px] mt-20">
        <div className="font-custom w-[520px] bg-gray-100 group  cursor-pointer relative">
          <div className="img flex justify-center w-[700px]">
            <img src={Trend1} alt="Nike Shoes" className="w-full" />
          </div>
        </div>
        <div className="font-custom w-[520px] bg-gray-100 group  cursor-pointer relative">
          <div className="img flex justify-center w-[700px]">
            <img src={Trend2} alt="Nike Shoes" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;

import media from '../../../assets/media-9.png';

function BuyNow() {
  return (
    <div className="bg-[#FF3EA5]  mx-[50px] mt-10 mb-[200px] text-white font-custom h-[350px] flex justify-evenly items-center rounded-lg px-10">
      <div className="left w-[45%] mx-12">
        <h1 className="text-5xl mb-8 font-semibold">Grab Upto 50% off on Selected Item</h1>

        <button className="bg-white text-black px-7 py-2 rounded-lg">Buy Now</button>
      </div>
      <div className="right">
        <img src={media} alt="Nike Logo" />
      </div>
    </div>
  );
}

export default BuyNow;

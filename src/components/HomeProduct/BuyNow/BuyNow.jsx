import media from '../../../assets/media-9.png';
import email from '../../../assets/email.png';

function BuyNow() {
  return (
    <>
      <div className="bg-[#1B3C73]  mx-[50px] mt-10 mb-[20px] text-white font-custom h-[350px] flex justify-evenly items-center rounded-lg px-10">
        <div className="left w-[45%] ">
          <p className="uppercase text-[15px] mb-5">limited offfer</p>
          <h1 className="text-4xl mb-8 font-semibold">50% off only this friday and get special gift</h1>
          <button className="bg-white text-black w-[150px] h-[50px] rounded-lg">Grab it Now</button>
        </div>
        <div className="right">
          <img src={media} alt="Nike Logo" />
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center justify-center mb-[100px] font-custom w-[620px] text-center mt-10">
        <h1 className="text-3xl font-bold mb-6">Subscribe to our newslatter to get updates to our lates collection</h1>
        <p className="text-[14px]">Get 20% off on your first order just by subscribing to our newsletter</p>
        <div className="">
          <div className="relative mt-4">
            <input type="email" className="pl-10 bg-gray-200 py-2 px-10 rounded-lg outline-none border-[1px] border-gray-400" placeholder="Enter Your Email" />
            <img src={email} alt="email icon" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <button className="text-white bg-black px-6 py-2 rounded-lg ml-2">Subscribe</button>
          </div>
        </div>
        <div className="mt-5 text-[13px]">
          <p>You will be able to unsubscribe at any time</p>
          <p>
            Read our Privacy Policy <span className="font-bold underline">Here</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default BuyNow;

import white from '../../../assets/media-18.png';

function JoinMember() {
  return (
    <div className="bg-[#333A73]  mx-[50px] mt-20 mb-[200px] text-white font-custom h-[320px] flex justify-around items-center rounded-lg">
      <div className="left w-[50%]">
        <h1 className="text-1xl mb-3">{"Let's Go!"}</h1>
        <h1 className="text-5xl mb-8">Become a Members and Get More Discount</h1>
        <button className="bg-black text-white  px-7 py-2 rounded-lg ">Join Now</button>
      </div>
      <div className="right">
        <img src={white} alt="Nike Logo" />
      </div>
    </div>
  );
}

export default JoinMember;

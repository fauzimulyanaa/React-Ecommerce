import white from '../../../assets/white.png';

function JoinMember() {
  return (
    <div className="bg-black  mx-[50px] mt-20 mb-[200px] text-white font-custom h-[300px] flex justify-around items-center rounded-lg">
      <div className="left w-[50%]">
        <h1 className="text-5xl mb-8">Become A members</h1>
        <p className=" mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, natus?</p>
        <button className="bg-white text-black px-7 py-1 rounded-lg">Join Now</button>
      </div>
      <div className="right">
        <img src={white} alt="Nike Logo" />
      </div>
    </div>
  );
}

export default JoinMember;

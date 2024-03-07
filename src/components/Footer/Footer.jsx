import logo from '../../assets/logo.png';
import sent from '../../assets/sent.png';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';

function Footer() {
  return (
    <div className="font-custom">
      <footer className=" h-auto flex justify-center items-center py-10 bg-[#070F2B] text-white flex-col w-full">
        <div className="logo flex items-center gap-5 mb-10">
          <img src={logo} alt="logo" />
          <h1 className="text-1xl">SkylineTreasures</h1>
        </div>
        <div className="">
          <ul className="flex justify-between items-center gap-20 cursor-pointer">
            <li className="mb-3">Home</li>
            <li className="mb-3">Project</li>
            <li className="mb-3">Blog</li>
            <li className="mb-3">Category</li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col items-center">
          <h1 className="font-bold items-center">Sign up for personalized offers</h1>
          <div className="relative w-[369px] overflow-hidden mt-4">
            <input type="text" className="bg-gray-200 px-10 py-3 rounded-full w-full" placeholder="Enter your email" />
            <div className="bg-black absolute top-[24px] right-[-25px] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[48px] h-[48px] flex items-center justify-center">
              <img src={sent} alt="sent icon" />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-10 justify-between w-full px-20">
          <div className="logo">
            <h1 className="mb-4">Follow Social Media</h1>
            <div className="flex gap-6">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={github} alt="github" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-sm">&copy; 2024 SkylineTreasures. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

{
  /* <footer className="px-[50px] items-center flex justify-around py-[70px]">
 
  
  <div className="">
    <h1 className="font-bold text-[18px] mb-5">Features</h1>
    <ul>
      <li className="mb-3">About Us</li>
      <li className="mb-3">Instructions</li>
      <li className="mb-3">Catalog</li>
      <li className="mb-3">Contact Us</li>
    </ul>
  </div>
  <div className="">
    <h1 className="font-bold text-[18px] mb-5">Company</h1>
    <ul>
      <li className="mb-3">Privacy</li>
      <li className="mb-3">Terms</li>
      <li className="mb-3">Security</li>
      <li className="mb-3">Next</li>
    </ul>
  </div>
</footer>; */
}

import nike from '../../assets/nike.png';
import sent from '../../assets/sent.png';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';

function Footer() {
  return (
    <div className="font-custom">
      <footer className="px-[50px] items-center flex justify-around py-[70px]">
        <div className="logo">
          <img src={nike} alt="Nike Logo" />
          <div className="flex">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={github} alt="github" />
          </div>
          <div className="">
            <h1 className="font-bold">Sign up for personalized offers</h1>
            <div className="relative w-[269px] overflow-hidden mt-4">
              <input type="text" className="bg-gray-200 px-10 py-3 rounded-full w-full" placeholder="Enter your email" />
              <div className="bg-black absolute top-[24px] right-[-22px] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[47px] h-[47px] flex items-center justify-center">
                <img src={sent} alt="sent icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-[18px] mb-5">Linkes</h1>
          <ul>
            <li className="mb-3">Home</li>
            <li className="mb-3">Project</li>
            <li className="mb-3">Blog</li>
            <li className="mb-3">Category</li>
          </ul>
        </div>
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
      </footer>
    </div>
  );
}

export default Footer;

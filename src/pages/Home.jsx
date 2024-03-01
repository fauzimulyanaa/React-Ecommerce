import { HomeSlider, Navbar } from '../components';
import Footer from '../components/Footer/Footer';
import BestSeller from '../components/HomeProduct/BestSeller/BestSeller';
import HomeProduct from '../components/HomeProduct/HomeProduct';
import JoinMember from '../components/HomeProduct/JoinMember/JoinMember';
import TrendingProduct from '../components/HomeProduct/TrendingProduct/TrendingProduct';

function Home() {
  return (
    <div>
      <Navbar />
      <HomeSlider />
      <HomeProduct />
      <BestSeller />
      <TrendingProduct />
      <JoinMember />
      <Footer />
    </div>
  );
}

export default Home;

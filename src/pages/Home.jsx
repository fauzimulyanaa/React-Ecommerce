import { HomeSlider, Navbar } from '../components';
import HomeProduct from '../components/HomeProduct/HomeProduct';
import TrendingProduct from '../components/HomeProduct/TrendingProduct/TrendingProduct';

function Home() {
  return (
    <div>
      <Navbar />
      <HomeSlider />
      <HomeProduct />
      <TrendingProduct />
    </div>
  );
}

export default Home;

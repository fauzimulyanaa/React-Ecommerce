import DetailProduct from '../../components/DetailProduct/DetailProduct';
import { Footer } from '../../components';
import BestSeller from '../../components/HomeProduct/BestSeller/BestSeller';

function DetailProductPage() {
  return (
    <div className="bg-[#EEEEEE]">
      <DetailProduct />
      <BestSeller />
      <Footer />
    </div>
  );
}

export default DetailProductPage;

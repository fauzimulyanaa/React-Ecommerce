/* eslint-disable react/prop-types */
import Product from './Product/ProductCard';

function Products({ products, onAddCart }) {
  return (
    <main className="container-fluid">
      <div className="flex  justify-center items-center gap-10 p-6 flex-wrap m-auto">
        {products.map((product) => {
          return <Product key={product.id} product={product} onAddCart={onAddCart} />;
        })}
      </div>
    </main>
  );
}

export default Products;

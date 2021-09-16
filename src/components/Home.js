import PageWrapper from './PageWrapper';
import ProductList from './ProductList';
import Product from './Product';

import products from '../data/products.json';

const Home = () => {
  return (
    <PageWrapper>
      <div>
        <h2>Accueil</h2>
        <p>
          Muffin donut pie tart carrot cake pastry apple pie jelly beans dragée.
          Cotton candy powder topping sweet sesame snaps croissant brownie
          macaroon tart. Gummies topping bonbon cheesecake ice cream carrot cake
          powder.
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <h2>Meilleures ventes</h2>
        <ProductList>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ProductList>
      </div>
    </PageWrapper>
  );
};

export default Home;

import PageWrapper from './PageWrapper';
import ProductList from './ProductList';
import ProductListItem from './ProductListItem';

import products from '../data/products.json';

const Home = () => {
  return (
    <PageWrapper>
      <h2 className="mb-4 font-bold text-blue-500">Liste des produits</h2>
      <ProductList>
        {products.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </ProductList>
    </PageWrapper>
  );
};

export default Home;

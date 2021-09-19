import PageWrapper from './PageWrapper';
import ProductList from './ProductList';
import ProductListItem from './ProductListItem';

const PageHome = ({ products, handleAddToCart }) => {
  return (
    <PageWrapper>
      <h2 className="mb-4 ml-3 font-bold text-blue-500">Liste des produits</h2>
      <ProductList>
        {products.map((product) => (
          <ProductListItem
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </ProductList>
    </PageWrapper>
  );
};

export default PageHome;

const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price} €</p>
    </div>
  );
};

export default Product;

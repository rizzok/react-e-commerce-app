const ProductListItem = ({ product }) => {
  function currencyToEuro(number) {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(number);
  }

  return (
    <div className="bg-white p-4 shadow rounded-lg text-center flex flex-col">
      <h3 className="mb-4 font-medium">{product.title}</h3>
      <img src={product.thumbnailUrl} alt={product.title} className="mx-auto" />
      <p className="text-left text-sm">{product.description}</p>
      <div className="mt-auto">
        <p>{currencyToEuro(product.price)}</p>
        <button className="mb-2 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;

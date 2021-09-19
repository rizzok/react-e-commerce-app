import { useState } from 'react';
import { Link } from 'react-router-dom';
import currencyToEuro from '../helper/func';

const ProductListItem = ({ product, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  function handleMinus() {
    setQuantity(quantity - 1);
  }
  function handlePlus() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="bg-white p-4 shadow rounded-lg text-center flex flex-col">
      <Link to="/produit/id-name">
        <h3 className="mb-4 font-medium">{product.title}</h3>
      </Link>
      <img src={product.thumbnailUrl} alt={product.title} className="mx-auto" />
      <p className="my-2 text-center text-sm">{product.description}</p>
      <div className="mt-auto">
        <p className="my-2">{currencyToEuro(product.price)}</p>

        <div className="my-2">
          <label htmlFor="">Quantité : </label>
          <button
            className="px-1 w-6 border border-gray-500 h-8"
            onClick={handleMinus}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            max={99}
            className="w-16 h-8"
          />
          <button
            className="px-1 w-6 border border-gray-500 h-8"
            onClick={handlePlus}
          >
            +
          </button>
        </div>

        <button
          onClick={() => handleAddToCart(product)}
          className="mb-2 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;

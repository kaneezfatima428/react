import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0">
        <img src={product.image} className="card-img-top object-fit-cover" style={{ height: '200px' }} alt={product.title} />
        <div className="card-body d-flex flex-column text-center">
          <h5 className="card-title fs-6 text-dark">{product.title}</h5>
          <p className="card-text text-danger fw-bold fs-5">${product.price}</p>
          <button className="btn btn-dark mt-auto w-100" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
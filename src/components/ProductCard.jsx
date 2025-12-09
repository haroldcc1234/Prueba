import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card-elegant">
      {product.brand !== 'Other' && <div className="product-badge">{product.brand}</div>}
      <img src={product.imageUrl} className="product-img" alt={product.name} />
      <div className="product-content">
        <h5 className="product-name">{product.name}</h5>
        {product.description && <p className="product-desc">{product.description}</p>}
        {product.specs && product.specs.length > 0 && (
          <div className="product-specs">
            {product.specs.map((spec, index) => (
              <span key={index} className="spec-tag">{spec}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

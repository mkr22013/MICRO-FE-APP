import React, { useState, useEffect } from "react";
import { getProductById, currency } from "../../../../home/service/products";
import { useParams } from "react-router-dom";

function PDPContent() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else setProduct(null);
  }, [id]);

  if (!product) return null;

  return (
    <div className="border-4 rounded-2xl bg-amber-50 grid grid-cols-2 gap-5">
      <div className="m-5">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="m-5">
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
}

export default PDPContent;

import React from 'react';
import { useParams } from 'react-router-dom'; 
import productsData from './data/products'; 
import ProductDetails from './components/ProductDetails';

function ProductDetailsPage() {
  const params = useParams();
  const productId = params.productId.toString(); 
  const product = productsData.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />;
}




export default ProductDetailsPage;

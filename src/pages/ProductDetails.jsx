import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
        setProduct(data);
        setLoading(false);
});
}, [id]);

    if (loading) return <Loader />;

return (
<div className="product-page">
  
<div className="product-card-big">
  <img src={product.thumbnail} />
  
<div className="product-info">
    <h1>{product.title}</h1>
    <p className="desc">{product.description}</p>
    <p><b>Бренд:</b> {product.brand}</p>
    <p><b>Категория:</b> {product.category}</p>
    <p><b>Рейтинг:</b> ⭐ {product.rating}</p>
    <p><b>В наличии:</b> {product.stock} шт.</p>
    <p className="price">
            {product.price}$ 
            <span className="discount">
              (-{product.discountPercentage}%)
            </span>
    </p>
  
<button className="buy-btn">
            Добавить в корзину
</button>
  </div>
   </div>
    </div>
);
}

export default ProductDetails;
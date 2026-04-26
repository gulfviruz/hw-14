import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    Promise.all([
        fetch("https://dummyjson.com/products/category/beauty").then(r => r.json()),
        fetch("https://dummyjson.com/products/category/fragrances").then(r => r.json()),
        fetch("https://dummyjson.com/products/category/skincare").then(r => r.json()),
])
.then(([a, b, c]) => {
        setProducts([...a.products, ...b.products, ...c.products]);
        setLoading(false);
    });
}, []);

if (loading) return <Loader />;

return (
    <div>
        <div className="hero">
        <h1>Лучшие средства для твоей красоты и ухода</h1>

        <Link to="/" className="hero-btn">
            Смотреть каталог
        </Link>
    </div>

<h2 className="title-prod">Популярные товары</h2>

<div className="catalog">
    {products.map(product => (
    <div className="product-card" key={product.id}>
        
<div className="img-box">
        <img src={product.thumbnail} />
    </div>

<div className="info">
        <h3>{product.title}</h3>
        <p className="desc">{product.description.slice(0, 60)}...</p>

<div className="bottom">
        <span className="price">{product.price}$</span>

        <Link to={`/product/${product.id}`} className="btn">
            Подробнее
          </Link>
        </div>
      </div>
</div>
))}
</div>
<Footer />
    </div>
);
}

export default Home;
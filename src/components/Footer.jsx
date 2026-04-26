import { Link } from "react-router-dom";

function Footer() {
return (
<footer className="footer">
    <div className="footer-container">

        <div className="footer-block">
            <h3> BEAUTY STORE</h3>
            <p>Интернет-магазин косметики и ухода за собой.</p>
        </div>

        <div className="footer-block">
        <h4>Навигация</h4>
            <Link to="/">Главная</Link>
            <Link to="/login">Вход</Link>
            <Link to="/profile">Профиль</Link>
        </div>

        <div className="footer-block">
            <h4>Контакты</h4>
            <p>📍 Astana</p>
            <p>📧 support@beautystore.com</p>
            <p>📞 +7 (777) 123-45-67</p>
        </div>

        <div className="footer-block">
            <h4>Информация</h4>
            <p>🚚 Доставка 1-3 дня</p>
            <p>💳 Оплата онлайн</p>
            <p>🔁 Возврат 14 дней</p>
        </div>
</div>

        <div className="footer-bottom">
        © 2026 Beauty Store. All rights reserved.
</div>

    </footer>
);
}

export default Footer;
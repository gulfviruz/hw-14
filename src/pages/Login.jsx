import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "test@mail.com" && password === "1234") {
        setMessage("Успешный вход!");
    } else {
        setMessage("Неверный email или пароль");
    }
};

return (
<div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
        <h2>Вход в Beauty Store</h2>

        <input
            type="email"
            placeholder="Введите свой Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            type="password"
            placeholder="Пароль"
            value={password}
            nChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Войти</button>

        {message && <p>{message}</p>}
</form>
    </div>
);

}

export default Login;
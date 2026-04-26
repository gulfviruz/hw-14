
function Profile() {
    const user = {
        name: "Jane Doe",
        email: "jane00@example.com",
        city: "Astana",
        avatar: "https://i.pravatar.cc/150?img=5"
    };

    const orders = [
        { id: 1, name: "Lipstick", price: 12 },
        { id: 2, name: "Face Cream", price: 25 },
        { id: 3, name: "Perfume", price: 40 }
    ];

    const favorites = [
        "Lip Gloss",
        "Serum Vitamin C",
        "Body Lotion"
    ];

    return (
    <div className="profile-page">
  
    <div className="profile-card">
        <img className="avatar" src={user.avatar} />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>📍 {user.city}</p>

    <div className="stats">
            <div>
              <h3>{orders.length}</h3>
              <p>Заказы</p>
            </div>
  
            <div>
              <h3>{favorites.length}</h3>
              <p>Избранное</p>
            </div>
          </div>
  

<div className="block">
            <h3>🛒 Последние заказы</h3>
            {orders.map(order => (
              <p key={order.id}>
                {order.name} — {order.price}$
              </p>
            ))}
</div>

<div className="block">
            <h3>❤️ Избранное</h3>
            {favorites.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
</div>
  
<button className="logout-btn">
            Выйти
</button>
  
    </div>
</div>
    );
}
  
export default Profile;
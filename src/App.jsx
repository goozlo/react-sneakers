import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://62d15e83dccad0cf176623b6.mockapi.io/items")
      .then((data) => data.json())
      .then((data) => setItems(data));
  }, []);

  const onAddToCart = (cartItem) => {
    setCartItems((prev) => [...prev, cartItem]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickCart={() => setCartOpened(!cartOpened)}
        />
      )}
      <Header onClickCart={() => setCartOpened(!cartOpened)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => {
                console.log("favorite");
              }}
              onPlus={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

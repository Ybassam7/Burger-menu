import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const burgerData = [
  {
    name: "X-Juicy Lucy",
    ingredients:
      "Juicy Beef Patty, Melted American Cheese, Crispy Bacon, Caramelized Onions, Special Sauce",
    price: 110,
    photoName: "burger/burger1.png",
    soldOut: false,
  },
  {
    name: "Mighty Monster",
    ingredients:
      "Stacked Beef Patties, Melted Cheese, Crispy Onion Rings, Spicy Buffalo Sauce, Smoky BBQ Sauce",
    price: 160,
    photoName: "burger/burger2.png",
    soldOut: false,
  },
  {
    name: "O Mushroom",
    ingredients:
      "Juicy Beef Patty, Creamy Mushroom Sauce, Grilled Onions, Melted Cheese, Tangy Ranch Sauce",
    price: 110,
    photoName: "burger/burger3.png",
    soldOut: false,
  },
  {
    name: "Chili N Spicy",
    ingredients:
      "Juicy Beef Patty, Melted Cheese, Spicy Chili Sauce, Jalapeños",
    price: 110,
    photoName: "burger/burger4.png",
    soldOut: false,
  },
  {
    name: "Big Boy",
    ingredients:
      "Juicy Beef Patty, Melted Cheese, Grilled Onions, Oriental Sauce, Grilled Hot Dog",
    price: 155,
    photoName: "burger/burger5.png",
    soldOut: true,
  },
  {
    name: "Classic Smash Burger",
    ingredients: "Smash Burger Patty, Melted Cheese, Classic Burger Sauce",
    price: 105,
    photoName: "burger/burger6.png",
    soldOut: false,
  },
];

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="arabic ">عترة</h1>
    </header>
  );
}

function Menu() {
  const burgers = burgerData;
  const numBurgers = burgers.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numBurgers > 0 ? (
        <>
          <p className="arabic">فاست فود بس مظبوط</p>
          <ul className="pizzas">
            {burgers.map((burger) => (
              <Burger burgerObj={burger} key={burger.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still Working on our Website. Please come back later :)</p>
      )}
    </main>
  );
}

function Burger({ burgerObj }) {
  return (
    <li className={`pizza ${burgerObj.soldOut ? "sold-out" : ""}`}>
      <img src={burgerObj.photoName} alt={burgerObj.name} />
      <div>
        <h3>{burgerObj.name}</h3>
        <p>{burgerObj.ingredients}</p>
        <span>{burgerObj.soldOut ? "SOLD OUT" : burgerObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const openHour = 10; // 10 AM
  const closingHour = 3; // 3 AM (next day)
  const currentHour = new Date().getHours();

  const isOpen =
    (currentHour >= openHour && currentHour < 24) || // From 10 AM to midnight
    (currentHour >= 0 && currentHour < closingHour); // From midnight to 3 AM
  return (
    <footer className="footer">
      <p>
        Time Now is {new Date().toLocaleTimeString()}
        <br />
        {isOpen
          ? `We are currently Open, until ${closingHour} AM`
          : `Sorry, we're closed visit us at ${openHour} AM`}
      </p>
      {isOpen && <button className="btn">Order Now</button>}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

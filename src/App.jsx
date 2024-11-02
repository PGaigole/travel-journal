import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Card from "./components/card/Card";

import "./App.scss";

export default function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  return (
    <div className="container">
      <Header />
      <main className="cards">
        {cards.map((card) => (
          <Card key={card.id} info={card} />
        ))}
      </main>
    </div>
  );
}

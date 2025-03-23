
import pizzaData from "../data/pizza.json";
import PizzaCard from "../components/PizzaCard";
import styles from './styles_modules/PizzaList.module.css';
import React, { useState, useEffect } from "react";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(pizzaData);
  }, []);

  return (
    <div className={styles.pizzaList}>
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default PizzaList;
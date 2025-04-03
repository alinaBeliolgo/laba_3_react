# README: Интернет-магазин "Пиццерия"

## Описание проекта  
Веб-приложение интернет-магазина пиццы на **React**. Позволяет пользователям просматривать меню, искать пиццы и выбирать размер.

## Запуск проекта  
1. Установите зависимости:  
   ```
   npm install
   ```
2. Запустите проект:  
   ```
   npm run dev
   ```
Приложение откроется на **http://localhost:5173/**.

---

##  Основные компоненты  

###  `PizzaList.js` – Список пицц  
Загружает данные, фильтрует по поиску.  
```jsx
const [pizzas, setPizzas] = useState([]);
useEffect(() => setPizzas(pizzaData), []);

const handleSearch = (query) => {
  setFilteredPizzas(pizzas.filter(pizza =>
    pizza.name.toLowerCase().includes(query.toLowerCase())
  ));
};
```

---

###  `PizzaCard.js` – Карточка пиццы  
Выбор размера, добавление в корзину.  
```jsx
const [selectedSize, setSelectedSize] = useState(pizza.sizes[0]);

<button onClick={() => setSelectedSize(size)}>
  {size} см.
</button>;
<button className={styles.addToCartButton}>Добавить в корзину</button>;
```

---

###  `Slider.js` – Слайдер  
Автоматически перелистывает изображения.  
```jsx
const [currentSlide, setCurrentSlide] = useState(0);
useEffect(() => {
  const interval = setInterval(() => setCurrentSlide(prev => (prev + 1) % slides.length), 3000);
  return () => clearInterval(interval);
}, []);
```

---

###  `Search.js` – Поиск  
Фильтрует список пицц по названию.  
```jsx
<input type="text" placeholder="Поиск..." onChange={(e) => onSearch(e.target.value)} />
```

---

###  `Header.js` – Навигация  
Простое меню.  
```jsx
<nav>
  <a href="#">Меню</a> | <a href="#">О нас</a> | <a href="#">Контакты</a>
</nav>;
```

---

###  `Footer.js` – Футер  
Содержит ссылку на репозиторий.  
```jsx
<a href="https://github.com/alinaBeliolgo/laba_3_react.git">Репозиторий</a>
```

---




# Контрольные вопросы

# Основные концепции React: useState, useEffect и рендеринг списков

## Как использовать useState для управления состоянием?

`useState` — это хук, который позволяет управлять состоянием в функциональных компонентах React. Он принимает начальное значение и возвращает массив из двух элементов: текущего состояния и функции для его обновления.

### Пример использования:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Текущее значение: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}
```
Здесь `count` — это переменная состояния, а `setCount` — функция для его изменения.

---

## Как работает useEffect?

`useEffect` — это хук, который выполняет побочные эффекты в функциональных компонентах. Он используется для загрузки данных, подписки на события и других действий, которые не относятся к рендерингу.

### Основные моменты работы `useEffect`:
- Выполняется после первого рендера и при изменении зависимостей.
- Принимает функцию и массив зависимостей.
- Если передать пустой массив `[]`, эффект выполнится только один раз при монтировании компонента.
- Можно вернуть функцию очистки, которая выполнится перед удалением компонента.

### Пример использования:
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Секунды: {count}</p>;
}
```
Здесь `useEffect` создаёт интервал, который обновляет счётчик каждую секунду, и очищает его при удалении компонента.

---

## Как рендерить списки элементов в React?

В React для рендеринга списка элементов используется метод `map()`. Каждому элементу списка необходимо передавать уникальный `key`, чтобы React мог эффективно обновлять DOM.

### Пример рендеринга списка:
```jsx
import React from 'react';

function ItemList() {
  const items = ['Яблоко', 'Банан', 'Вишня'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```
Здесь массив `items` преобразуется в список `<li>` с помощью `map()`, а `index` используется как `key`. Однако, если элементы могут изменяться, лучше использовать уникальные идентификаторы из данных.



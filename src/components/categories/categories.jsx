import React, { useState } from 'react';

const Categories = () => {
  const [activeBtn, setActiveBtn] = useState(2);
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (i) => {
    setActiveBtn(i)
  }
  return (
    <div className="categories">
      <ul>
        { categories.map((item, index) => {
        return (
        <li
          key={index}
          onClick={() => onClickCategory(index)} 
          className={activeBtn === index ? "active" : ''}>
            {item}
          </li>
        )})}
      </ul>
    </div>
  );
};

export default Categories;
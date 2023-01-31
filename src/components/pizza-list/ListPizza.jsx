import React, { useState } from 'react';
import PizzaBlock from '../skiletons/PizzaBkock';
import ItemPizza from './ItemPizza';

const ListPizza = ({ data, processSatate }) => {
  const [count, setCount] = useState(0);
  console.log(data);
  const inc = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {processSatate
          ? [...new Array(8)].map((_, i) => <PizzaBlock key={i} />)
          : data.map(({ id, imageUrl, title, sizes, category, rating, price, types }) => {
              return (
                <ItemPizza
                  ddd={count}
                  inc={inc}
                  price={price}
                  title={title}
                  imageUrl={imageUrl}
                  sizes={sizes}
                  category={category}
                  rating={rating}
                  types={types}
                  key={id}
                />
              );
            })}
      </div>
    </>
  );
};

export default ListPizza;

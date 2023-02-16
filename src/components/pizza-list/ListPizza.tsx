import React from 'react';
import PizzaBlock from '../skiletons/PizzaBkock';
import ItemPizza from './ItemPizza';
type pizzaesT = {
  id: number,
  imageUrl: string,
 title: string,
 types: number[],
 sizes: number[],
 price: number,
 category: string,
 rating: number
}
type listPropsT = {
  data: pizzaesT[];
  processSatate: boolean;
}
const ListPizza: React.FC<listPropsT> = ({ data, processSatate }) => {
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {processSatate
          ? [...new Array(8)].map((_, i) => <PizzaBlock key={i} />)
          : data.map(({ id, imageUrl, title, sizes, category, rating, price, types }) => {
              return (
                <ItemPizza
                  price={price}
                  title={title}
                  imageUrl={imageUrl}
                  sizes={sizes}
                  category={category}
                  rating={rating}
                  types={types}
                  key={id}
                  id={id}
                />
              );
            })}
      </div>
    </>
  );
};

export default ListPizza;

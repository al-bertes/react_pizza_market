import React from 'react';
import { addPizza } from '../../redux/slices/caratSlice';
import { useDispatch } from 'react-redux';
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
const ItemPizza: React.FC<pizzaesT> = ({ imageUrl, title, sizes, id, category, rating, price, types }) => {
 const [activeType, setActiveType] = React.useState(0);
 const [activeSize, setActiveSize] = React.useState(26);
 const [countPizza, setCountPizza] = React.useState(0)
 const dispatch = useDispatch();
 const makeOrder = () => {
  const typePizza = (activeType === 0) ? "Тонкое" : "Традиционное";
  const pticeActual = (activeSize === 30) ? price * 1.2 : (activeSize === 40) ? price * 1.3 : price;
  return {
    price: pticeActual,
    imageUrl,
    title,
    id,
    typePizza,
    countItem: 1,
    sizes: activeSize
  }
 }

  const typePizza = ['Тонкое', 'Традиционное'];
  return (
    <div>
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt={'Pizza' + title} />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
          {types.map((itemId, i) => {
              return <li 
                key={i} 
                onClick={() => setActiveType(itemId)}
                className={activeType === itemId ? 'active' : ''}
                >{typePizza[itemId]} тесто</li>
            })}
          </ul>
          <ul>
            {sizes.map((item, i) => {
              return <li 
                key={i}
                onClick={() => setActiveSize(item)}
                className={activeSize === item ? 'active' : ''}
                >{item} см.</li>
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button onClick={() => { setCountPizza(countPizza => countPizza += 1); dispatch(addPizza(makeOrder()));}} className="button button--outline button--add">
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{countPizza}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPizza;

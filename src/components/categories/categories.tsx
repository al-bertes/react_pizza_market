import { hendleCategory } from "../../redux/slices/sortSlice";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { RootState } from "../../redux/store";
type categoriesItemsT = {
  name: string,
  title: string
}

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const {catigories} = useSelector((state: RootState) => state.sort);
  const categoriesItems: categoriesItemsT[] = [
    {
      name: 'all',
      title: 'Все',
    },
    {
      name: 'meat',
      title: 'Мясные',
    },
    {
      name: 'vegeterian',
      title: 'Веганские',
    },
    {
      name: 'grill',
      title: 'Гриль',
    },
    {
      name: 'hot',
      title: 'Острые',
    }
  ];
  return (
    <div className="categories">
      <ul>
        {categoriesItems.map((item, index) => {
          return (
            <li key={index} onClick={() => dispatch(hendleCategory(item.name))} className={catigories === item.name ? 'active' : ''}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

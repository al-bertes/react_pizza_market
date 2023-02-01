import React, { useState } from 'react';

const Categories = ({getCategoryItem, categories, categoryItem}) => {

  return (
    <div className="categories">
      <ul>
        { categories.map((item, index) => {
        return (
        <li
          key={index}
          onClick={() =>  getCategoryItem(index)} 
          className={categoryItem === index ? "active" : ''}
          >
            {item}
          </li>
        )})}
      </ul>
    </div>
  );
};

export default Categories;
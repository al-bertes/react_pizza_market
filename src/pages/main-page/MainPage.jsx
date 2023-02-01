import axios from 'axios';
import React from 'react';
import Categories from '../../components/categories/categories';
import Header from '../../components/header/header';
import ListPizza from '../../components/pizza-list/ListPizza';
import Sort from '../../components/sort/Sort';

const MainPage = () => {
  const [data, setData] = React.useState([]);
  const [processSatate, setProcessState] = React.useState(true)
  const [activeSortItem, setActiveSortItem] = React.useState(0);
  const [categoryItem, setCategoryItem] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const sortItem = ['raiting', 'price', 'title'];
  
  const dataSearch = `sortBy=${sortItem[activeSortItem]}&order=${sortItem[activeSortItem] === 'title' ? 'asc' : 'desc'}`; //
  const dataFilter = `category=${categoryItem ? categoryItem - 1 : ''}`

  React.useEffect(() => {
    axios.get(`https://63d8dc4a5a330a6ae16f414d.mockapi.io/items?${dataSearch}&${dataFilter}`)
         .then(data => { setData(data.data); setProcessState(false)})
      
  }, [dataSearch, dataFilter])

  const getCategoryItem = (item) => {
    setCategoryItem(item);
  }
  console.log(categoryItem);
  return (
    <div className="wrapper">
     <Header/>
     <div className="content">
       <div className="container">
         <div className="content__top">
           <Categories 
            categories={categories} 
            categoryItem={categoryItem} 
            getCategoryItem={getCategoryItem}/>
           <Sort
            setActiveSortItem={setActiveSortItem} 
            activeSortItem={activeSortItem}/>
         </div>
         <ListPizza data={data} processSatate={processSatate}/>
       </div>
     </div>
   </div>
  );
};

export default MainPage;
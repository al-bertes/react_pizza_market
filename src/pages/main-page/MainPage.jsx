import axios from 'axios';
import React from 'react';
import Categories from '../../components/categories/categories';
import Header from '../../components/header/header';
import ListPizza from '../../components/pizza-list/ListPizza';
import Sort from '../../components/sort/Sort';

const MainPage = () => {
  const [data, setData] = React.useState([]);
  const [processSatate, setProcessState] = React.useState(true)

  React.useEffect(() => {
    axios.get('https://63d8dc4a5a330a6ae16f414d.mockapi.io/items')
         .then(data => { setData(data.data); setProcessState(false)})
      
  }, [])


  return (
    <div className="wrapper">
     <Header/>
     <div className="content">
       <div className="container">
         <div className="content__top">
           <Categories/>
           <Sort/>
         </div>
         <ListPizza data={data} processSatate={processSatate}/>
       </div>
     </div>
   </div>
  );
};

export default MainPage;
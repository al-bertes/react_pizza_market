import { Pagination, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Categories from '../../components/categories/categories';
import Header from '../../components/header/header';
import ListPizza from '../../components/pizza-list/ListPizza';
import Sort from '../../components/sort/Sort';
import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { fetchPizzaes, setActivePagination, setSearchData } from '../../redux/slices/pizzaesSlice';
import { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';

type pizzaesT = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: string;
  rating: number;
};

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    catigories,
    sort: { name },
  } = useSelector((state: RootState) => state.sort);
  const { activePagePagination, allPageCount, pizzaes, isLoading, searchData } = useSelector(
    (state: RootState) => state.pizzaes,
  );
  const [searh, setSearch] = useState('');

  const dataSort = `sortBy=${name}&order=${name === 'title' ? 'asc' : 'desc'}`;

  const dataFilter = catigories === 'all' ? '' : `category=${catigories}`;

  const generateData = () => {
    return pizzaes as pizzaesT[];
  };
  const data = generateData();
  const countItemPerPage = 4;

  const onChangeInput = useCallback(
    debounce((str) => {
      dispatch(setSearchData(str));
    }, 1500),
    [],
  );

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.target.value);
    onChangeInput(e.target.value);
  };

  React.useEffect(() => {
    dispatch(fetchPizzaes({ activePagePagination, countItemPerPage, dataSort, dataFilter, searchData }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFilter, activePagePagination, allPageCount, searchData, dataSort]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />

            <TextField
              onChange={(e) => changeSearch(e)}
              value={searh}
              id="outlined-basic"
              InputProps={{
                sx: { borderRadius: '15px', width: '100%', backgroundColor: '#F8F8F8' },
              }}
              label="Поиск пиццы"
              variant="outlined"
            />
            <Sort />
          </div>
          <ListPizza data={data} processSatate={isLoading} />
          <Pagination
            onChange={(e, value) => dispatch(setActivePagination(value))}
            count={allPageCount}
            shape="rounded"
            sx={{ background: 'F4C35C' }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

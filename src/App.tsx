import './App.css';
import './scss/app.scss';
import MainPage from './pages/main-page/MainPage';
import { Route, Routes } from 'react-router-dom';
// import Cart from './pages/cart/Cart';
import Page404 from './pages/page404';
import React from 'react';
const Cart = React.lazy(() => import('./pages/cart/Cart'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/cart"
          element={
            <React.Suspense fallback={<div>Ждемс...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;

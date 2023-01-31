import './App.css';
import './scss/app.scss';
import MainPage from './pages/main-page/MainPage';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Page404 from './pages/page404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default App;

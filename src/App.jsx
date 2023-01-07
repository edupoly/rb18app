import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import FoodItems from './features/FoodItems/Fooditems';
import Header from './features/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <div className="container">
          <Outlet></Outlet>
        </div>
      </div>
    </Provider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './features/Counter/Counter';
import Todolist from './features/Todolist/Todolist';
import Product from './features/Product/Product';
import Countries from './features/Countries/Countries';

function App() {
  return (
    <Provider store={store}>
      <div className="border border-2 border-info p-2 m-2">
      <h1>Hello WOrld</h1>
      {/* <Counter></Counter>
      <Todolist></Todolist>
       */}
      {/* <Countries></Countries> */}
      <Product></Product>
      </div>
    </Provider>
  );
}

export default App;

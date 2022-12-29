import logo from './logo.svg';
import './App.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Counter from './features/Counter/Counter';
function App() {
  return (
    <Provider store={store}>
      <div className="border border-2 border-danger p-2 m-2">
      <h1>Hello WOrld</h1>
      <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;

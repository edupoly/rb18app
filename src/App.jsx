import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
function App() {
  return (
    <div className="border border-2 border-danger p-2 m-2">
     <h1>Hello WOrld</h1>
     <Counter></Counter>
     <Todolist></Todolist>
    </div>
  );
}

export default App;

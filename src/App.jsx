import logo from './logo.svg';
import './App.css';
import { Link,Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="border border-2 border-danger p-2 m-2">
     <h1>Hello WOrld</h1>
     <a href='/mypage'>Goto My Page</a>
     <br />
     <Link to={'/mypage'}>Lets see MyPage</Link>
     <br />
     <Link to={'/yourpage'}>Lets see Yours page</Link>
     <Outlet></Outlet>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Link,Outlet, useNavigate } from 'react-router-dom'
function App() {
  var navigate = useNavigate()
  function home(){
    navigate("/yourpage")
  }
  return (
    <div className="border border-2 border-danger p-2 m-2">
     <h1>Hello WOrld</h1>
     <a href='/mypage'>Goto My Page</a>
     <br />
     <Link to={'/mypage'}>Lets see MyPage</Link>
     <br />
     <Link to={'/yourpage'}>Lets see Yours page</Link>
     <br />
     <Link to={'/products'}>products</Link>
     <br />
     <Link to={'/products2'}>Products2</Link>
     <button onClick={home}>Gotohome</button>
     <Outlet></Outlet>
    </div>
  );
}

export default App;

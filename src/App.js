import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Offers from "./Offers";

function App() {
  const title='booking'
  const menu = ['homes','apts','bAndb','resorts','cabins']
  return (
    <div className='App'> <Header title={title} menu={menu}/>

    <Offers/>
    </div>
  );
}

export default App;

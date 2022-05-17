import logo from './logo.svg';
import './App.css';
import Header from "./Header";

function App() {
  const title='booking'
  const menu = ['homes','apts','bAndb','resorts']
  return (
    <div className='App'> <Header title={title} menu={menu}/></div>
  );
}

export default App;

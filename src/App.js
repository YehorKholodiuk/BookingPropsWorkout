import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Offers from "./Offers";

function App() {
    const title = 'booking'
    const menu = ['homes', 'apts', 'bAndb', 'resorts', 'cabins']
    const offers = [
        {
            name: 'PASV Hotel',
            description: 'coding house1',
            price: 100,
            pictures: null,


        },
        {
            name: 'Hilton',
            description: '4 star',
            price: 453,
            pictures: null,
        },
        {
            name: 'Holiday Inn',
            description: 'good accomodation for cats)',
            price: 180,
            pictures: null,
        }

    ]
    return (
        <div className='App'><Header title={title} menu={menu}/>

            <Offers offers={offers}/>
        </div>
    );
}

export default App;

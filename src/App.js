import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Components/MainNavbar'
import NewTripForm from './Pages/TripForm/NewTripForm'
import MapBox from './Components/MapBox';

export default function App() {
  return (
    <div className="App">
      <MainNavbar />
      <MapBox />
    </div>
  );
}
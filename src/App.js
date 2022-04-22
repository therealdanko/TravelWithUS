import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Components/MainNavbar'
import Resources from './Pages/Resources/Resources'
import FormPage from './Pages/TripForm/FormPage'
import Home from './Pages/Home'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainNavbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/new-trip' element={<FormPage/>}/>
        <Route path="resources" element={<Resources />}/>
      </Routes>
    </div>
  );
}
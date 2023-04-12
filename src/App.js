import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Addproduct from './Pages/Addproduct/Addproduct';
import Editproduct from './Pages/Editproduct/Editproduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/addProduct" element={ <Addproduct/> } />
        <Route exact path="/editProduct/:id" element={ <Editproduct/> } />
      </Routes>
    </div>
  );
}

export default App;

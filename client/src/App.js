import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Login from './pages/Login';
import { UserContext } from './components/UserContext';
import Private from './components/Private';
import Register from './pages/Register';
import Home from './components/Home';
import VynilInfo from './components/VynilInfo';
import NoMatch from './components/NoMatch';

// import Error from './pages/Error';


function App() {

  return (

  <Router>
        <UserContext.Provider value='Hello from context'>
              <Routes>
                <Route path="/" element={<Private><Home/></Private>}/>
                <Route path="/Admin" element={<Private><Admin/></Private>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/AddProduct" element={<AddProduct/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="*" element={<NoMatch/>}/>
                <Route path="/vynil/:id" element={<Private><VynilInfo/></Private>}/>
              </Routes>
        </UserContext.Provider>
  </Router>
  )
}

export default App;
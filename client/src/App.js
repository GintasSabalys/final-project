import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Login from './pages/Login';
import { UserContext } from './components/UserContext';
// import Private from './components/Private';
import Register from './pages/Register';
import Home from './components/Home';
import VynilInfo from './components/VynilInfo';
import NoMatch from './components/NoMatch';

// // import Error from './pages/Error';

import PrivateRoutes from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
  <UserContext.Provider value='Hello from context'>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Products/>} path="/products"/>
                <Route element={<AddProduct/>} path="/AddProduct"/>
                <Route element={<VynilInfo/>} path="/vynil/:id"/>
                <Route element={<Admin/>} path="/Admin"/>
            </Route>
            <Route element={<Login/>} path="/Login" exact/>
            <Route element={<Register/>} path="/Register" exact/>
            <Route element={<Home/>} path="/" exact/>
            <Route element={<NoMatch/>} path="*" exact/>
          </Routes>
      </Router>
  </UserContext.Provider>
    </div>
  );
}

export default App;
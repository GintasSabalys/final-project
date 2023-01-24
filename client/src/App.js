import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import { Admin } from "./pages/Admin";
import Login from './pages/Login';
import { UserContext } from './components/UserContext';
import Register from './pages/Register';
import Home from './components/Home';
import VynilInfo from './components/VynilInfo';
import NoMatch from './components/NoMatch';
import PrivateRoute from './components/PrivateRoute';
import { AuthContexProvider } from "./context/authContext";
import PrivateAdminRoute from "./components/PrivateAdminRoute";
import apiClient from './clients/ApiClient';
import ApiClientInterceptor from './interceptors/apiClientInterceptor';


const App = () => {

return (

  <Router>
        <UserContext.Provider value='Hello from context'>
          <ApiClientInterceptor client={apiClient} />
            <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Login" element={<Login/>}/>
                  <Route path="/Register" element={<Register/>}/>
                  <Route path="/Admin" element={<PrivateAdminRoute><Admin/></PrivateAdminRoute>}/>
                  <Route path="/Products" element={<AuthContexProvider><PrivateRoute><Products /></PrivateRoute></AuthContexProvider>}/>
                  <Route path="/AddProduct" element={<PrivateRoute component={AddProduct}/>}/>
                  <Route path="/vynil/:id" element={<PrivateRoute component={VynilInfo}/>}/>
                  <Route path="*" element={<NoMatch/>}/>
                </Routes>
        </UserContext.Provider>
  </Router>
  )
}


export default App;
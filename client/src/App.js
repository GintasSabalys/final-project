import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from "./pages/Products";
import { Admin } from "./pages/Admin";
import Login from './pages/Login';
import { UserContext } from './components/UserContext';
import Register from './pages/Register';
import Home from './components/Home';
import VynilInfo from './components/VynilInfo';
import NoMatch from './components/Routes/NoMatch';
import PrivateRoute from './components/Routes/PrivateRoute';
import { AuthContexProvider } from "./context/authContext";
import PrivateAdminRoute from "./components/Routes/PrivateAdminRoute";
import apiClient from './clients/ApiClient';
import ApiClientInterceptor from './interceptors/apiClientInterceptor';
import { Cart } from './pages/Cart';


const App = () => {

return (

  <Router>
        <UserContext.Provider value='Hello from context'>
          <ApiClientInterceptor client={apiClient} />
            <Routes>
                  <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
                  <Route path="/Login" element={<Login/>}/>
                  <Route path="/Register" element={<Register/>}/>
                  <Route path="/Admin" element={<PrivateAdminRoute><Admin/></PrivateAdminRoute>}/>
                  <Route path="/Products" element={<AuthContexProvider><PrivateRoute><Products /></PrivateRoute></AuthContexProvider>}/>
                  <Route path="/Vynil/:id" element={<PrivateRoute><VynilInfo /></PrivateRoute>}/>
                  <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
                  <Route path="*" element={<NoMatch/>}/>
                </Routes>
        </UserContext.Provider>
  </Router>
  )
}


export default App;
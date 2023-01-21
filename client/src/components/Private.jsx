import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from './Navbar';
// import { useContext } from 'react';
// import { UserContext } from './UserContext';
// import { useNavigate } from 'react-router-dom';

// function PrivateNav(props) {

//     const user = useContext(UserContext)

//     const navigate = useNavigate()
    
//     if(!user) {
//     navigate('/login')  
//     }
//     return (
//         <div className='component'>
//             <Navbar/>
//             <Header/>
//             {props.children}
//             <Footer/>
//         </div>
//     )  
// }


// export default PrivateNav

// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Navbar from './Navbar';
// // import Home from './Home';

function privateNav(props) {
    
    return (
        <div className='component'>
            <Navbar/>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )  
}


export default privateNav
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from './Navbar';
// import Home from './Home';

function privateNav(props) {
    
    return (
        <div className='component'>
            <Navbar/>
            <Header/>
            {props.children}
            {/* <Home/> */}
            <Footer/>
        </div>
    )  
}


export default privateNav
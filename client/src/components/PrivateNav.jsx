import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

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
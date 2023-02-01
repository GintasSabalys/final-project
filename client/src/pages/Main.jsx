import {Link} from 'react-router-dom';

 function Admin() {

    return (
        <div className='Main'>
            <p>Main</p>
            <Link to="/AddProduct">Add product</Link>
            <br/>
            <Link to="/Products">Products</Link>
            <br/>
        </div>
    )
}

export default Admin;
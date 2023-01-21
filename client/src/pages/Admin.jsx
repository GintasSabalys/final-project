import {Link} from 'react-router-dom';

 function Admin() {
    return (
        <div>
            <p>Admin page</p>
            <Link to="/AddProduct">Add product</Link>
            <br/>
            <Link to="/Products">Products</Link>
            <br/>
        </div>
    )
}

export default Admin;
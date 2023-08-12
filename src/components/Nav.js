import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap'

const Nav = () => {

    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    //it is a hook it will rerender(refresh) automaticaly when we shift from one page to another
    const logout = ()=>{
        console.warn("apple");
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <img className='logo' src="./saas-logo.png" alt='logo' />
            {
                auth?
                <ul className='nav-ul nav-right'>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">LogOut</Link></li>
                    <li>Welcome {JSON.parse(auth).name}</li>
                    <li><img src="./logo1.png" style={{width:"20px",height:"20x"}}></img></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                
            }
        </div>
    )
}
export default Nav;

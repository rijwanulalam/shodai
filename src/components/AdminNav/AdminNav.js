import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png';
import './AdminNav.css';

const AdminNav = () => {
    return (
        <div className="admin-header">
            <div className="admin-logo"><img className="logo" src={logo} alt=""/></div>
            <div className="admin-nav">
                <ul>
                    <li>
                        <Link to="/manageProduct">Manage Product</Link>
                    </li>
                    <li>
                        <Link to="/addProduct">Add Product</Link>
                    </li>
                    <li>
                        <Link to="/editProduct">Edit Product</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminNav;
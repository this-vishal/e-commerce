import React from "react";
import MenuItems from './MenuItems';
import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar() {


    return (

        <>

            <nav className="nav-container">
                <div className="header">
                    <i className=" nav-icon fa-sharp fa-solid fa-bars"></i>
                    <h3>Shopping Cart</h3>
                    <i className="nav-icon fa-solid fa-circle-xmark"></i>
                </div>
                <ul className="nav-items">
                    {MenuItems.map((item, index) => {

                        return (
                            <li className={item.className} key={index}>

                                <Link to={item.url}> <i className={item.icon}></i> {item.title}</Link>
                            </li>
                        )

                    })}
                </ul>

            </nav>

        </>

    )

};
export default Navbar;
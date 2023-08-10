import React from "react";

import './Category.css';
import Navbar from '../../components/Navbar/Navbar';

function Category() {

    return (
       
        <div className="category">

            <div className="category-items">

                <ul className='align-item'>
                    <li><button>All Products</button></li>
                    <li><button>Laptop</button></li>
                    <li><button>Mobile & Phones</button></li>

                    <li> <button>Grocery</button></li>
                    <li><button>Tv & Electronics</button></li>
                    <li><button>Clothes</button></li>
                    <li><button>Books</button></li>

                </ul>

            </div>


        </div>
        

    )
};

export default Category;
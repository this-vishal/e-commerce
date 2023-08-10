import React from "react";
import './Sidebar.css';
import Carousel from 'react-bootstrap/Carousel';
// import Category from "../../UserComponents/CategoryProduct/Category";


const Slidebar = (props) => {


  
    return (
      <>
      <div className="container-fluid">
      
            <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={props.img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>First slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={props.img2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h2>Second slide label</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={props.img3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h2>Third slide label</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={props.img4}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h2>Forth slide label</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className="category"><Category/></div> */}
      </div>
      </>
    );
  }



export default Slidebar
import React from "react";
import Slidebar from "./Slidebar";
import img1 from "./homeAssest/img1.jpg";
import img2 from "./homeAssest/img2.jpg";
import img3 from "./homeAssest/img3.jpg";
import img4 from "./homeAssest/img4.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";
// import { useStateContext } from "../../Store/GlobalContext.jsx";
// import Slider from "react-slick";
// import Product from "../../UserComponents/Product/Product";
// import Product from "../../UserComponents/Product/Product";

function Home() {
  return (
    <>
      <Navbar />
      <Slidebar img1={img1} img2={img2} img3={img3} img4={img4} />
      <Product />
      <Footer />
    </>
  );
}
export default Home;

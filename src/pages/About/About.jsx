import styles from "./about.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/about.jpg";
import Pagearrows from "../../components/pagearrows/pagearrows";
function About() {
  return (
    <div className={`container mt-4 mb-4 px-1 ${styles.box}`}>
      <h2 className={`text-center pt-1 fs-1`} style={{ fontFamily: "ChetteVisto" }}>
        About
      </h2>
      <div className={`card ${styles.maincard}`}>
        <div className="row  row row-cols-1 row-cols-md-1 row-cols-lg-2 g-1">
          <div className="col col-sm-12 col-lg-4">
            <div className={`card`}>
              <div className={`${styles.imagecontainer}`}>
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="col col-md-12 col-lg-8 col-sm-12">
            <div className={`card h-100 p-2 ${styles.cardstyle} `}>
              <h3 style={{ color: "white", fontFamily: "ChetteVisto" }}>
                Who We Are~
              </h3>
              <p style={{ color: "#ccc" }}>
                Shopify is a modern e-commerce application designed to simplify
                online shopping for both customers and sellers.
              </p>
              <p style={{ color: "#aac5ce" }}>
                {" "}
                Our platform allows businesses of all sizes to create, manage,
                and scale their online stores with ease. With a clean interface,
                secure checkout process, and mobile-friendly design, Shopify
                ensures a seamless shopping experience. Whether you're browsing
                products, managing inventory, or tracking orders, our goal is to
                make online commerce efficient, intuitive, and accessible.
              </p>
              <p>
                <Link
                  to="/Products"
                  className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  <i className="fa-solid fa-basket-shopping"></i> Back to shopping
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

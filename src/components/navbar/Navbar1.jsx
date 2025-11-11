import styles from "./navbar.module.css"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../../pages/cart/cartSlice";

function Navbar() {
    const totalQuantity=useSelector(selectTotalQuantity)
    
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-1 pb-2">
      <div className="container-fluid ms-1 me-1">
      <a className={`navbar-brand order-0 order-md-0 ${styles.logof}`} href="#"><span style={{color:"#ffa202"}}>S</span>h<span style={{color:"#ec4aa9ff"}}>0</span>pif<span style={{color:"#93d7d6"}}>Y</span></a>
      <div className="d-flex order-1 order-md-3 me-2 ">
        <button className="navbar-toggler me-2 mt-0" type="button"  data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
          </button>
          <span className="d-flex">
        <Link className={`p-1 pb-0 position-relative ${styles.cart}`} to="/Cart"><i className="fa-solid fa-cart-shopping fs-5"></i>
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning" style={{fontSize:"0.7rem"}}>
          {totalQuantity}
          </span>
        </Link></span>
        </div>

        <div className={`w-100 mt-1 order-3 order-md-1 ${styles.box}`}>
           <form className="d-flex" role="search">
        <input className={`form-control me-0 ${styles.searchInput}`} type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn btn-outline-success ${styles.searchButton}`} type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
        </div>
      <div className="collapse navbar-collapse order-4 order-md-2 mt-1" id="navMenu">
        <ul className="navbar-nav ms-1 ">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Products">Products</Link></li>
  
        </ul>
      </div>
      </div> 
    </nav>
  );
}
export default Navbar;

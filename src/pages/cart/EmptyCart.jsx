import styles from "./empty.module.css"
import logo from "../../images/emptycart.png"
import { Link } from "react-router-dom"
function EmptyCart() {
  return (
    <div className="container d-flex justify-content-center mb-1">
      <div className={`card w-100 d-flex align-items-center p-5 mt-4`} style={{border:"2px dashed #3dd5f3"}}>
        <div className={`${styles.imagecontainer}`}>
          <img src={logo} alt="empty cart"/>
        </div>
        <div className={`text-center ${styles.textstyle}`}>
          <h4>Your cart is empty!</h4>
          <p className="card-text text-muted">Add something to make me happy!</p>
     <p>  
      <button className="btn btn-warning"><Link to="/Products" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
      style={{textDecoration:"none"}}>
      <i className="fa-solid fa-basket-shopping"></i>{" "}Back to shopping</Link></button>
      </p>
        </div>
      </div>
    </div>
  )
}

export default EmptyCart
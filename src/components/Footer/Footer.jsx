import styles from "./footer.module.css"
import { Link } from "react-router-dom"
import Logout from "../logout/Logout.jsx"
function Footer() {
  return (
    <div className="card text-center">
  <div className={`card-header ${styles.footHeader}`}>
    Featured
  </div>
  <div className={`card-body ${styles.box}`} >
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div className="d-flex gap-2 justify-content-center">
    <Link to="/About"  className={`btn btn-warning ${styles.btnStyle}`}>Know more</Link>
    <Logout/></div>
  </div>
  <div className={`card-footer text-body-secondary ${styles.logof,styles.Footbottom}`}>
   @2025 <span style={{color:"#ffa202"}}>S</span>h<span style={{color:"#ec4aa9ff"}}>0</span>pif<span style={{color:"#93d7d6"}}>Y</span>.com
  </div>
</div>
  )
}

export default Footer
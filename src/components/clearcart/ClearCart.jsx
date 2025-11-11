import { useDispatch } from "react-redux"
import { clearCart } from "../../pages/cart/cartSlice.js"
import styles from "./clearcartbtn.module.css"
function ClearCartbtn() {
    const dispatch=useDispatch()
  return (
     <button className={`btn btn-danger ${styles.btnStyle}`}onClick={() => dispatch(clearCart())}>
           Clear Cart
    </button>
  )
}

export default ClearCartbtn
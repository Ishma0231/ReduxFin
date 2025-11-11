import { useSelector } from "react-redux";
import { selectTotalPrice } from "../cart/cartSlice.js";
import Pagearrows from "../../components/pagearrows/Pagearrows.jsx";

function Checkout() {
    const totalprice=useSelector(selectTotalPrice)
    const cartItems=useSelector((state)=>state.cart.cartItems)
  return (
    <div className="container ">
      <div className="d-flex align-items-center mt-3 mb-3">
      <div className="me-auto">
        <Pagearrows />
      </div>
        <div className="flex-grow-1 text-center">
        <h4 className="text-center" style={{color:"#a8d8d9"}}>CHECKOUT</h4>
        </div>
        </div>
        <div className="card shadow-sm rounded-3 p-3 mb-3 m-2">
        {cartItems.map((item) => {
            const total=item.price*item.quantity;
            return(
          <div className="row mb-2" key={item.id}>
            <div className="col-8">{item.title} <span  style={{color:"red"}}> x {item.quantity}</span></div>
            <div className="col-4 text-end text-warning fst-italic fs-5">${total}</div>
          </div>
        );
        })}  
        <div className="d-flex justify-content-between">
            <h4  style={{color:"#6eb35e"}}>Subtotal : </h4>
            <p className="fs-5 ">${totalprice.toFixed(2)}</p>
        </div>
    </div>
    <div>
        <button type="button" className="btn btn-info m-2" style={{backgroundColor:"#6eb35e",color:"white"}}>CONFIRM ORDER</button>
    </div>
    </div>
 )}
                


export default Checkout
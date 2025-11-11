import {addToCart,removeFromCart,deleteItem, selectTotalQuantity} from './cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Styles from "./cartcard.module.css"
function CartCard({item}) {
    const totalQuantity=useSelector(selectTotalQuantity)
    const dispatch=useDispatch();
  return (
    <div className='col-12 mb-2'>
     <div className='card shadow-sm p-3'>
         <div className='row'>
            <div className='col-4 d-flex align-items-center justify-content-center'>
                  <div className={`${Styles.ImageContainer}`}>
                      <img src={item.image} alt={item.title}/>
                  </div>
            </div>
            <div className='col-8 flex-column justify-content-start'>
                <h6 className={`card-title ${Styles.titleStyle}`}>{item.title}</h6>
                 <p className="product-desc mb-0">{item.description}</p>
                 <div className='d-flex align-items-baseline gap-2'>
                    <span  style={{ color: "#B12704", fontWeight: 700 }}>${item.price}</span>
                    <span style={{ fontSize: "13px", color: "#777" }}>M.R.P</span>
                 </div>
                 <p style={{ fontSize: "13px", color: "green" }}>
              Eligible for FREE Shipping
            </p>
            </div>
          </div> {/*closing of subrow */}
            <div className='d-flex justify-content-between'>
              <div className='d-flex'>
                <button className={`btn btn-warning border px-2 ${Styles.quantityBtn}`} onClick={()=>dispatch(removeFromCart(item.id))}>-</button>
                <span className={`${Styles.quantityValue}`} style={{ fontWeight: 600 }}>{item.quantity}</span>
                <button className={`btn btn-warning border px-2 ${Styles.quantityBtn}`} onClick={()=>dispatch(addToCart(item))}>+</button>
                </div> 
              <button className="btn btn-warning" onClick={()=>dispatch(deleteItem(item.id))}>Delete</button>                
            </div> {/*closing of button div */}
     </div>  {/*closing of card */}
    </div> //closing of parent column
  )
}

export default CartCard
import { useSelector } from 'react-redux'
import EmptyCart from './EmptyPage.jsx'
import { selectTotalPrice} from './cartSlice.js'
import CartCard from './CardCard.jsx'
import { Link } from 'react-router-dom'
import ClearCartbtn from '../../components/clearcart/ClearCartbtn.jsx'
import Pagearrows from '../../components/pagearrows/Pagearrows.jsx'
function Cart() {
    const totalPrice=useSelector(selectTotalPrice)
    const cartItems=useSelector((state) => state.cart.cartItems)
  return (
    <div className='container mt-2'>
      <Pagearrows/>
        {cartItems.length===0?(<EmptyCart/>)
        :(
    <div className="row gap-2">
    {cartItems.map((item)=>(
        <CartCard key={item.id} item={item}/>
    ))}
     <div className="col-12">
        <div className="card mb-2  p-2">
      <h6 className="fs-3 text-center bg-light-rounded" style={{fontFamily:"ChettaVisto"}}>Subtotal: <span style={{color:"green"}}>${(totalPrice||0).toFixed(2)}</span></h6>
      <Link to="/checkout" className="btn btn-info m-2" style={{backgroundColor:"#6eb35e",color:"white"}}>CONFIRM ORDER</Link>
      <ClearCartbtn/>
      </div>
      </div>

      </div>
      )}
      </div>
  )
}

export default Cart

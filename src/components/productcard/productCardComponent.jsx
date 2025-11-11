import styles from "./productcard.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../pages/cart/cartSlice";

function ProductCard({product}){
  const dispatch=useDispatch();
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card h-100">
             <div className={styles.imageContainer}>
             <img src={product.image} alt={product.title} className={`card-img-top ${styles.image}`}  />
             </div>
                    <div className="card-body d-flex flex-column">
          <h6 className={`card-title ${styles.titleStyle}`}>
            <Link to={`/products/${product.id}`}>
            {product.title}</Link>
            </h6>

          <p className={`card-text ${styles.description}`}>
            {product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}
          </p>

          <h5 className="mt-auto">${product.price}</h5>

          <button type="button" className="btn btn-warning mt-2" onClick={() => {dispatch(addToCart(product))}}>
            Add to Cart
          </button>
        </div>     
        </div>
    </div>
  )
}

export default ProductCard;
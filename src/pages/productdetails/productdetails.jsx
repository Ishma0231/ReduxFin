import { useParams,Link } from "react-router-dom"
import { useEffect,useState } from "react"
import Styles from "./productdetail.module.css"
import { useSelector ,useDispatch} from "react-redux";
import {fetchProductById} from "./productdetailslice"


function ProductDetails() {
  const {id}=useParams();
  const {product,loading,error}=useSelector((state)=>state.productdetail)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProductById(id))
  },[dispatch, id])
    
  if (loading) return (
    <>
    <div className="text-center my-5">
    <div className="spinner-grow text-warning" role="status">
      <span className="visually-hidden ">Loading...</span>
    </div>
    <p className="mt-3 fst-italic text-center">Loading product...</p>
    </div>
  
</>)
 if (error) {
    return <p className="text-danger text-center mt-5">Error: {error}</p>;
  }
  if (!product) return null;
  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-3 mb-3">
      <div className="row row-cols-2 row-cols-lg-2">
          <div className="col col-md-4 d-flex justify-content-center align-items-center">
              <div className={`d-flex justify-content-center align-items-center ${Styles.imageContainer}`}>
                <img src={product.image} alt={product.title}/>
              </div>
          </div>
          <div className="col col-md-8 d-flex flex-column justify-content-start p-1">
              <h4 className="card-title">{product.title}</h4>
              <p>{product.description}</p>
               <div className="d-flex align-items-baseline gap-2">
              <span style={{ color: "#B12704", fontWeight: 700 }}> ₹{product.price}</span>
              <span style={{ fontSize: "13px", color: "#777" }}>M.R.P.</span>
            </div>
            <p style={{ fontSize: "13px", color: "green" }}>
              Eligible for FREE Shipping
            </p>
          </div>
      </div>
      </div>
      <p className="text-center"><Link to="/Products" className={`btn btn-warning text-decoration-none text-dark`} style={{textDecoration:"none"}}>
  <i className="fa-solid fa-basket-shopping"></i>{" "}Back to shopping</Link></p>

    </div>
  )
}

export default ProductDetails
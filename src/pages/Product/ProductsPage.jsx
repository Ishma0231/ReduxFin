import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from './productSlice1'
import { useEffect } from 'react'

import ProductCard from '../../components/productcard/productCardComponent'
import { selectSelectedCategory } from "../category/categorySlice";
import CategoryList from '../category/categoryList'
import Pagearrows from '../../components/pagearrows/pagearrowsComponent'

function Products() {
    const {items,error,loading}=useSelector((state)=>state.product)
    const selectedCategory = useSelector(selectSelectedCategory);
    const dispatch=useDispatch()
    useEffect(()=>{
      if(items.length==0){
        dispatch(fetchProducts());   
      }
    },dispatch,items.length)

    if (error) return <p>error</p>;

    const filtered = selectedCategory ? 
    items.filter((p) => p.category === selectedCategory):items;
    
  return (
     <div className="container">

      <div className="d-flex align-items-center mt-2 mb-4">
        <div className="me-auto">
          <Pagearrows />
        </div>

        <div className="flex-grow-1 text-center ">
          <h2 className="d-inline-block px-3 py-1 m-0 " style={{color:"black"}}><span style={{color:"#e4920fff"}}>O</span>UR <span style={{color:"#e4920fff"}}>P</span>RODUCTS</h2>
        </div>
      </div>
        
        {loading?(
         <div className="text-center my-5">
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden ">Loading...</span>
    </div>
    <p className="mt-3 fst-italic">Loading products...</p>
  </div>
        ):(  <> <CategoryList/>
        <div className="row row-cols-1 row-cols-lg-4">
            {filtered.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </>)}
     
    </div>
  )
}

export default Products
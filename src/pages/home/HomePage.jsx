import styles from "./home.module.css"
import { useNavigate } from "react-router-dom"
import offer1 from "../../images/offer1.jpeg"
import offer4 from "../../images/offer4.jpeg"
import offer5 from "../../images/offer5.jpg"

function Home() {
  const navigate=useNavigate()
  const goToProducts=()=>navigate("/Products")
  return (
    <div className="container-fluid m-0 p-0 mt-3">
        <div className={` container-fluid p-0 m-0 mb-3 ${styles.bannerWrap}`}></div>
        <div className={`${styles.customFont} containe d-flex flex-column align-items-center p-3`}>
          <h2 style={{backgroundColor:"#93d7d6",color:"white"}} className="w-100 text-center py-1">
            - E<span style={{color:"white"}}>X</span>CLUSIVE O<span style={{color:"white"}}>FF</span>ERS -
            </h2>
          <div className="card w-100 shadow-lg p-2 mt-2 pb-4">
          <div className={`row row-cols-1 row-cols-lg-3 row-cols-md-1 row-cols-sm-1 justify-content-center g-3`}>
            <div className="col col-lg-4 col-sm-12">
                <div className={`card text-center shadow-sm ${styles.offercard}`}>
                  <img src={offer1} alt="offer" className={`${styles.offerImg} mx-auto`} onClick={goToProducts} />
                  <h5 className="mt-3">50% Off Headphones</h5>
                </div>
            </div>
            <div className="col col-lg-3 col-sm-12">
              <div className={`card text-center shadow-sm ${styles.offercard}`}>
                <img src={offer4} alt="offer" className={`${styles.offerImg} mx-auto`} onClick={goToProducts} />
                  <h5 className="mt-3">Buy 1 Get 1 Free</h5>
              </div>
            </div>
            <div className="col col-lg-3 col-sm-12">
              <div className={`card text-center shadow-sm ${styles.offercard}`}>
                <img src={offer5} alt="offer" className={`${styles.offerImg} mx-auto`} onClick={goToProducts}/>
                  <h5 className="mt-3">50% Off T-shirts</h5>
              </div>
            </div>

          </div>
          </div>

        </div>
    </div>
  )
}

export default Home
import { useNavigate} from "react-router-dom";
import styles from "./pgarrow.module.css"
function Pagearrows() {
    const navigate=useNavigate()
    const goforward=()=>navigate(1)
    const gobackward=()=>navigate(-1)
    
    return(
        <div className="d-flex gap-2 mt-3 ms-1 mb-1">
        <span onClick={gobackward} className={`${styles.arrow}`} ><i className="fa-solid fa-arrow-left "></i></span>
        <span onClick={goforward} className={`${styles.arrow}`}><i className="fa-solid fa-arrow-right"></i></span>
        </div>
    )
}

export default Pagearrows

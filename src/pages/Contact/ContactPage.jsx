import styles from "./contact.module.css";
import Pagearrows from "../../components/pagearrows/Pagearrows";
function Contact() {
  return (
    <div className={`container-fluid m-0 mb-2 p-4 ${styles.box}`}>
      
        <div className="d-flex align-items-center mt-3 mb-4">
        <div className="me-auto">
          <Pagearrows />
        </div>

        <div className="flex-grow-1 text-center">
          <h2 className="d-inline-block px-3 py-1 m-0" style={{ color: "black" }}>
            CONTACT US
          </h2>
        </div>
      </div>

      <div className="card shadow-lg p-2 mt-2 pb-4">
      <div className="w-100 mt-4">
        <div className="row justify-content-center row-cols-1 rol-cols-md-2 row-cols-lg-3 g-lg-3 g-3">
          <div className="col">
            <div className={`card shadow-sm ${styles.cardbody}`}>
              <i className={`fa-solid fa-phone fs-3 p-3 ${styles.customicons}`}></i>
              <h5 className="card-title fw-semibold mt-0">Call Us</h5>
              <p className="card-text text-muted">+91 98765 43210</p>
              <button type="button" className="btn btn-primary m-0">Call Us</button>
            </div>
          </div>
          <div className="col">
            <div className={`card shadow-sm ${styles.cardbody}`}>
              <i
                className={`fa-solid fa-envelope fs-3 p-3 ${styles.customicons}`}
              ></i>
              <h5 className="card-title fw-semibold">Email</h5>
              <p className="card-text text-muted">support@shopify.com</p>
              <button type="button" className="btn btn-primary m-0">Email Us</button>
            </div>
          </div>
          <div className="col">
            <div className={`card shadow-sm ${styles.cardbody}`}>
              <div style={{backgroundColor:"#004f87",color:"white",borderRadius:"70px"}}>
              <i className="fa-solid fa-building-user fs-4 p-3"></i>
              </div>
                <h5 className="card-title fw-semibold">Location</h5>
        <p className="card-text text-muted">Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;

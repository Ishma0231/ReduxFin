import { useDispatch } from "react-redux";
import { logout } from "../../pages/Authorisation/Authslice1.js";
import styles from "./logoutbtn.module.css"

function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <button className={`btn btn-danger ${styles.btnStyle}`}onClick={() => dispatch(logout())}>
      Logout
    </button>
  );
}

export default LogoutButton;

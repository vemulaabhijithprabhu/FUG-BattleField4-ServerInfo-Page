import PropTypes from "prop-types";
import styles from "./SideMenu2.module.css";

const SideMenu2 = ({ className = "" }) => {
  return (
    <button className={[styles.sideMenu, className].join(" ")}>
      <img
        className={styles.sideMenuGameIcon}
        alt=""
        src="/sidemenu--game@2x.png"
      />
      <div className={styles.sideMenuLineGame} />
    </button>
  );
};

SideMenu2.propTypes = {
  className: PropTypes.string,
};

export default SideMenu2;

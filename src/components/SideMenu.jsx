import PropTypes from "prop-types";
import styles from "./SideMenu.module.css";

const SideMenu = ({ className = "" }) => {
  return (
    <button className={[styles.sideMenu, className].join(" ")}>
      <img
        className={styles.sideMenuWatchIcon}
        alt=""
        src="/sidemenu--watch.svg"
      />
    </button>
  );
};

SideMenu.propTypes = {
  className: PropTypes.string,
};

export default SideMenu;

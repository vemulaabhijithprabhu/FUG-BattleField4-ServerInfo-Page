import SideMenu1 from "./SideMenu1";
import SideMenu from "./SideMenu";
import PropTypes from "prop-types";
import styles from "./SideMenuOther.module.css";

const SideMenuOther = ({ className = "" }) => {
  return (
    <div className={[styles.sideMenuOther, className].join(" ")}>
      <SideMenu1 />
      <SideMenu />
      <button className={styles.sideMenu}>
        <img
          className={styles.sideMenuCareerIcon}
          alt=""
          src="/sidemenu3@2x.png"
        />
      </button>
    </div>
  );
};

SideMenuOther.propTypes = {
  className: PropTypes.string,
};

export default SideMenuOther;

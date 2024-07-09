import PropTypes from "prop-types";
import styles from "./SideMenu1.module.css";

const SideMenu1 = ({ className = "" }) => {
  return (
    <button className={[styles.sideMenu, className].join(" ")}>
      <div className={styles.sideMenuNews}>
        <div className={styles.sideMenuNewsChild} />
        <div className={styles.sideMenuNewsItem} />
        <div className={styles.sideMenuNewsInner} />
      </div>
    </button>
  );
};

SideMenu1.propTypes = {
  className: PropTypes.string,
};

export default SideMenu1;

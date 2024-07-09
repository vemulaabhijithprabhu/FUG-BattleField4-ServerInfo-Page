import PropTypes from "prop-types";
import styles from "./SideMenuMisc.module.css";

const SideMenuMisc = ({ className = "" }) => {
  return (
    <div className={[styles.sideMenuMisc, className].join(" ")}>
      <button className={styles.sideMenuQuit}>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </button>
      <div className={styles.sideMenuQuitPopup}>
        <div className={styles.quit}>Quit</div>
      </div>
    </div>
  );
};

SideMenuMisc.propTypes = {
  className: PropTypes.string,
};

export default SideMenuMisc;

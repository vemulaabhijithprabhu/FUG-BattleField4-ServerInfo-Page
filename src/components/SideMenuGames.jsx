import SideMenu2 from "./SideMenu2";
import PropTypes from "prop-types";
import styles from "./SideMenuGames.module.css";

const SideMenuGames = ({ className = "" }) => {
  return (
    <div className={[styles.sideMenuGames, className].join(" ")}>
      <button className={styles.sideMenu}>
        <button className={styles.sideMenuGame} />
      </button>
      <SideMenu2 />
      <button className={styles.sideMenu1}>
        <img
          className={styles.sideMenuGameIcon}
          alt=""
          src="/sidemenu1@2x.png"
        />
      </button>
      <button className={styles.sideMenu2}>
        <img
          className={styles.sideMenuGameIcon1}
          alt=""
          src="/sidemenu2@2x.png"
        />
      </button>
    </div>
  );
};

SideMenuGames.propTypes = {
  className: PropTypes.string,
};

export default SideMenuGames;

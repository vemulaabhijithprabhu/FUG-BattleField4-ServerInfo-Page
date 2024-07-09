import PropTypes from "prop-types";
import styles from "./BrowserSIButtons1.module.css";

const BrowserSIButtons1 = ({ className = "" }) => {
  return (
    <button className={[styles.browserSiButtons, className].join(" ")}>
      <div className={styles.browserSiButtonsChild} />
      <div className={styles.div}>13672</div>
      <img className={styles.favoriteIcon} alt="" src="/favorite.svg" />
    </button>
  );
};

BrowserSIButtons1.propTypes = {
  className: PropTypes.string,
};

export default BrowserSIButtons1;

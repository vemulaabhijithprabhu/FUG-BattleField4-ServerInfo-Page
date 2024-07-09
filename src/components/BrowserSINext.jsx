import PropTypes from "prop-types";
import styles from "./BrowserSINext.module.css";

const BrowserSINext = ({
  className = "",
  browserSINextImageW,
  dawnbreaker,
}) => {
  return (
    <div className={[styles.browserSiNext, className].join(" ")}>
      <div className={styles.browserSiNextBg} />
      <img
        className={styles.browserSiNextImageWIcon}
        alt=""
        src={browserSINextImageW}
      />
      <div className={styles.browserSiNextInfo}>
        <b className={styles.operationLocker}>{dawnbreaker}</b>
        <b className={styles.conquestLarge}>conquest large</b>
      </div>
    </div>
  );
};

BrowserSINext.propTypes = {
  className: PropTypes.string,
  browserSINextImageW: PropTypes.string,
  dawnbreaker: PropTypes.string,
};

export default BrowserSINext;

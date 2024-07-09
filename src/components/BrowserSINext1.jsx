import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BrowserSINext1.module.css";

const BrowserSINext1 = ({
  className = "",
  browserSINextImageW,
  dawnbreaker,
  propLeft,
}) => {
  const browserSINextStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={[styles.browserSiNext, className].join(" ")}
      style={browserSINextStyle}
    >
      <div className={styles.browserSiNextBg} />
      <img
        className={styles.browserSiNextImageWIcon}
        alt=""
        src={browserSINextImageW}
      />
      <div className={styles.browserSiNextInfo}>
        <b className={styles.dawnbreaker}>{dawnbreaker}</b>
        <b className={styles.conquestLarge}>conquest large</b>
      </div>
    </div>
  );
};

BrowserSINext1.propTypes = {
  className: PropTypes.string,
  browserSINextImageW: PropTypes.string,
  dawnbreaker: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default BrowserSINext1;

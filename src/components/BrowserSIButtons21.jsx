import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BrowserSIButtons21.module.css";

const BrowserSIButtons2 = ({
  className = "",
  joinAsCommander,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propAlignSelf,
}) => {
  const browserSIButtons1Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propPosition, propTop, propLeft, propWidth, propAlignSelf]);

  return (
    <button
      className={[styles.browserSiButtons, className].join(" ")}
      style={browserSIButtons1Style}
    >
      <div className={styles.joinAsCommander}>{joinAsCommander}</div>
      <div className={styles.browserSiButtonsChild} />
    </button>
  );
};

BrowserSIButtons2.propTypes = {
  className: PropTypes.string,
  joinAsCommander: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default BrowserSIButtons2;

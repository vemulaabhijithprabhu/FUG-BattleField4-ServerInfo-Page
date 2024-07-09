import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BrowserSIButtons2.module.css";

const BrowserSIButtons2 = ({
  className = "",
  joinAsCommander,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propAlignSelf,
}) => {
  const browserSIButtonsStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propPosition, propTop, propLeft, propWidth, propAlignSelf]);

  return (
    <div
      className={[styles.browserSiButtons, className].join(" ")}
      style={browserSIButtonsStyle}
    >
      <a className={styles.join}>{joinAsCommander}</a>
      <div className={styles.joinBackground} />
    </div>
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

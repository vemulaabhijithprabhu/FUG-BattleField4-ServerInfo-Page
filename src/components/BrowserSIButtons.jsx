import BrowserSIButtons2 from "./BrowserSIButtons21";
import BrowserSIButtons1 from "./BrowserSIButtons1";
import PropTypes from "prop-types";
import styles from "./BrowserSIButtons.module.css";

const BrowserSIButtons = ({ className = "" }) => {
  return (
    <div className={[styles.browserSiButtons, className].join(" ")}>
      <div className={styles.browserSiButtonsInner}>
        <button className={styles.frameWrapper}>
          <button className={styles.browserSiButtonsWrapper}>
            <button className={styles.browserSiButtons1}>
              <div className={styles.join}>join</div>
              <div className={styles.browserSiButtonsChild} />
            </button>
          </button>
        </button>
      </div>
      <button className={styles.browserSiButtonsContainer}>
        <BrowserSIButtons2
          joinAsCommander="spectate"
          propPosition="relative"
          propTop="unset"
          propLeft="unset"
          propWidth="unset"
          propAlignSelf="stretch"
        />
      </button>
      <BrowserSIButtons2 joinAsCommander="join as commander" />
      <BrowserSIButtons1 />
    </div>
  );
};

BrowserSIButtons.propTypes = {
  className: PropTypes.string,
};

export default BrowserSIButtons;

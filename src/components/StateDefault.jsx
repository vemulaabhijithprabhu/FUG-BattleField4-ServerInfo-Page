import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./StateDefault.module.css";

const StateDefault = ({
  className = "",
  stateDefaultPosition,
  stateDefaultTop,
  stateDefaultLeft,
}) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      position: stateDefaultPosition,
      top: stateDefaultTop,
      left: stateDefaultLeft,
    };
  }, [stateDefaultPosition, stateDefaultTop, stateDefaultLeft]);

  return (
    <div
      className={[styles.statedefault, className].join(" ")}
      style={stateDefaultStyle}
    >
      <div className={styles.browserSiRegion}>
        <div className={styles.region}>Region</div>
        <div className={styles.europeDe}>europe - de</div>
      </div>
      <div className={styles.statedefaultChild} />
    </div>
  );
};

StateDefault.propTypes = {
  className: PropTypes.string,

  /** Style props */
  stateDefaultPosition: PropTypes.any,
  stateDefaultTop: PropTypes.any,
  stateDefaultLeft: PropTypes.any,
};

export default StateDefault;

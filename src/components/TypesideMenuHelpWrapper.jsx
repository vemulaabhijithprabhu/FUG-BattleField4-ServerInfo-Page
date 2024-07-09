import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TypesideMenuHelpWrapper.module.css";

const TypesideMenuHelpWrapper = ({
  className = "",
  typesideMenuHelpWrapperPosition,
  typesideMenuHelpWrapperTop,
  typesideMenuHelpWrapperLeft,
}) => {
  const typesideMenuHelpWrapperStyle = useMemo(() => {
    return {
      position: typesideMenuHelpWrapperPosition,
      top: typesideMenuHelpWrapperTop,
      left: typesideMenuHelpWrapperLeft,
    };
  }, [
    typesideMenuHelpWrapperPosition,
    typesideMenuHelpWrapperTop,
    typesideMenuHelpWrapperLeft,
  ]);

  return (
    <div
      className={[styles.typesideMenuHelpWrapper, className].join(" ")}
      style={typesideMenuHelpWrapperStyle}
    >
      <img
        className={styles.sideMenuHelpIcon}
        alt=""
        src="/sidemenu--help.svg"
      />
      <div className={styles.sideMenuHelpPopup}>
        <div className={styles.help}>help</div>
      </div>
    </div>
  );
};

TypesideMenuHelpWrapper.propTypes = {
  className: PropTypes.string,

  /** Style props */
  typesideMenuHelpWrapperPosition: PropTypes.any,
  typesideMenuHelpWrapperTop: PropTypes.any,
  typesideMenuHelpWrapperLeft: PropTypes.any,
};

export default TypesideMenuHelpWrapper;

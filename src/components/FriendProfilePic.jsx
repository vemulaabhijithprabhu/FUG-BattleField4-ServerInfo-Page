import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FriendProfilePic.module.css";

const FriendProfilePic = ({
  className = "",
  homeFriendLine,
  homeFriendPictureMaryJane,
  propOpacity,
}) => {
  const friendProfilePicStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <button
      className={[styles.friendProfilePic, className].join(" ")}
      style={friendProfilePicStyle}
    >
      <img className={styles.homeFriendLineIcon} alt="" src={homeFriendLine} />
      <img
        className={styles.homeFriendPictureMaryjaneIcon}
        alt=""
        src={homeFriendPictureMaryJane}
      />
    </button>
  );
};

FriendProfilePic.propTypes = {
  className: PropTypes.string,
  homeFriendLine: PropTypes.string,
  homeFriendPictureMaryJane: PropTypes.string,

  /** Style props */
  propOpacity: PropTypes.any,
};

export default FriendProfilePic;

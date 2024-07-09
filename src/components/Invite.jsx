import FriendProfilePic from "./FriendProfilePic";
import PropTypes from "prop-types";
import styles from "./Invite.module.css";

const Invite = ({ className = "" }) => {
  return (
    <div className={[styles.invite, className].join(" ")}>
      <div className={styles.homeOffline}>
        <FriendProfilePic
          homeFriendLine="/home--friendline.svg"
          homeFriendPictureMaryJane="/home--friendpicture@2x.png"
          propOpacity="0.3"
        />
        <div className={styles.offline} />
      </div>
      <div className={styles.homeOnline}>
        <FriendProfilePic
          homeFriendLine="/home--friendline1.svg"
          homeFriendPictureMaryJane="/home--friendpicturemaryjane@2x.png"
        />
        <img className={styles.onlineIcon} alt="" src="/online.svg" />
      </div>
      <button className={styles.homeSquad}>
        <img className={styles.squadIcon} alt="" src="/squad.svg" />
        <img className={styles.joinIcon} alt="" src="/join@2x.png" />
      </button>
    </div>
  );
};

Invite.propTypes = {
  className: PropTypes.string,
};

export default Invite;

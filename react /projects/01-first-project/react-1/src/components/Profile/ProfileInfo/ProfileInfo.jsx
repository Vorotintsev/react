import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img src="https://wallpaper.dog/large/10940905.jp"></img>
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;

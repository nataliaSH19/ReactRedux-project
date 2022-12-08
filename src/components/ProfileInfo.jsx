import React from 'react';
import s from '../styles/ProfileInfo.module.css';
import Preloader from './Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  debugger;
  return (
    <div>
      {/*  <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqTU3objoxj1TwuB2YgPo5mpEGSOXAT4xyg&usqp=CAU"
          alt="descriptPhoto"
        />
  </div>*/}
      <div className={s.descriptionBlock}>
        <div>
          <img
            src={props.profile.photos.large}
            alt="profileUsePhoto"
            style={{ width: 200, height: 200 }}
          />
          <ProfileStatus status={"Hello friends"}/>
          <h3>{props.profile.fullName}</h3>
          <h4>
            Looking for the job:
            {props.profile.lookingForAJob ? (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVT90ZNzIRMLpCa_QM-nmdFKdyVVyOvuz8aVHUririDpQuvEb0JobRBsYrQlzD7HFPT8&usqp=CAU"
                alt="profileUserImg"
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <img
                src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_prodpictxmark_2_1484336301-1.png"
                alt="profileUserImg"
                style={{ width: 20, height: 20 }}
              />
            )}
          </h4>
        </div>
        Some description...
      </div>
    </div>
  );
};

export default ProfileInfo;

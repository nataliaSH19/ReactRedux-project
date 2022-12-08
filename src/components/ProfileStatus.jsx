import React from 'react';
import { useState } from 'react';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(true);
  /* let state = {
    editMode: false,
  };
  const activateEditMode = () => {
    setState({editMode : true});
    state.editMode = true;
  };
  const deactiveEditMode = () => {
    setState({ editMode: true });
    state.editMode = false;
  };*/
  return (
    <div>
      {!editMode && (
        <div>
          <span
            onDoubleClick={() => {
              setEditMode(true);
            }}>
            {props.status}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus={true} onBlur={setEditMode(false)} value={props.status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;

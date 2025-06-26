import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  return <div>
    {user.displayName}
    {user.email}
    {
        user.
photoURL

    }
  
  </div>;
};

export default Profile;

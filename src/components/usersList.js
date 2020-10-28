import React from "react";
import User from "./user";
import { useSelector } from "react-redux";

const UserList = () => {
  const Users = useSelector((state) => state.users);
  return (
    <div className="d-flex flex-wrap">
      {Users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;

import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Juan Carlos Sastre Iglesias",
      image: "https://avatars2.githubusercontent.com/u/9654629?s=460&v=4",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

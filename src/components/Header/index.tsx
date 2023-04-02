import React from "react";
import "./Header.scss";

import NameBar from "./NameBar";
import UserInformation from "./UserInformation";

const Header = () => {
  return (
    <>
      <NameBar />
      <UserInformation />
    </>
  );
};

export default Header;

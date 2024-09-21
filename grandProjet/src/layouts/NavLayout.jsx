import React, { Children, Fragment } from "react";
import LayoutNavbar from "../components/navbar/LayoutNavbar";
import { SafeAreaView } from "react-native-safe-area-context";

const NavLayout = ({ children }) => {
  return (
    <Fragment>
        {children}
      <LayoutNavbar />
    </Fragment>
  );
};

export default NavLayout;

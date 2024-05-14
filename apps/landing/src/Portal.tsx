import React from "react";
import NavBar from "./NavBar";
import DrawerLayout from "./DrawerLayout";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Portal() {
  return (
    <DrawerLayout menu={<Menu />}>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </DrawerLayout>
  );
}

export default Portal;

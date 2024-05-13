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
        <div className="container mx-auto min-h-[80vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </DrawerLayout>
  );
}

export default Portal;

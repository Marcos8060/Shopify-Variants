import React from "react";
import Sidebar from "./sidebar";
import CustomizedHeader from "./header";
import RightSideBar from "./right-sidebar";

const CustomizedLayout = ({ children }) => {
  return (
    <section className="md:flex md:h-screen h-auto overflow-hidden bg-secondary">
      <div className={`w-1/6 bg-white shadow-xl rounded md:block hidden`}>
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <CustomizedHeader />
        <section className="flex gap-4 py-6 px-10 ">
          <div className="w-8/12">{children}</div>
          <div className="w-4/12">
            <RightSideBar />
          </div>
        </section>
      </div>
      <div></div>
    </section>
  );
};

export default CustomizedLayout;

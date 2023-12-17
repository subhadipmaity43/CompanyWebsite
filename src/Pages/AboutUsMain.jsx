import React from "react";

import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/AboutBreadcrumb";
import Sidenav from "../components/Sidenav";

function AboutUsMain() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <Breadcrumb />
      <AboutUs />
      <Footer />
    </>
  );
}

export default AboutUsMain;

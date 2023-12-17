import React from "react";
import Navbar from "../components/Navbar";
import Career from "../components/Career";
import Footer from "../components/Footer";
import CareerBreadcrumb from "../components/CareerBreadcrumb";
import Sidenav from "../components/Sidenav";

function Careers() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <CareerBreadcrumb />
      <Career />
      <Footer />
    </>
  );
}

export default Careers;

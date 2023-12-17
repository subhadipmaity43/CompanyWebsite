import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ContactBraedcrumb from "../components/ContactBraedcrumb";
import Sidenav from "../components/Sidenav";

function ContactUs() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <ContactBraedcrumb />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactUs;

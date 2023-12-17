import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import Sidenav from "./Sidenav";

function SecurityOurService() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <div class=" main-bg">
        <div class="container-fluid p-0">
          <div
            class="text-left iq-breadcrumb-one
                  iq-bg-over black     "
          >
            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm-12">
                  <nav
                    aria-label="breadcrumb"
                    class="text-center iq-breadcrumb-two"
                  >
                    <h2 class=" head">Security </h2>
                    <ol class="breadcrumb main-bg">
                      <li class="breadcrumb-item">
                        <Link to="/">
                          <i
                            class="fa fa-home mr-2"
                            style={{ paddingRight: "5px", fontSize: "13px" }}
                          ></i>
                          <span style={{ fontSize: "16px" }}>Home</span>
                        </Link>
                      </li>

                      <li class="breadcrumb-item active">Our Service</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container ">
          <img
            src="/Images/shape1.png"
            className="img-fluid shape-right "
            alt="QLOUD"
          ></img>
          <div className="row pt-0 iq-pb-70">
            <div className="col-lg-6 col-sm-12 mb-lg-0 mb-5">
              <img
                src="/Images/secutiry1.gif"
                className="img-fluid"
                alt="qloud"
              ></img>
            </div>
            <div className="col-lg-6 col-sm-12 ">
              <div className="iq-title-box iq-title-default iq-title-box-2 size">
                <h2 className="iq-title size1">Cloud security challenges</h2>
                <p className="iq-title-desc">
                  Since data in the public cloud is being stored by a third
                  party and accessed over the internet, several challenges arise
                  in the ability to maintain a secure cloud. These are:
                </p>
              </div>
              <div className="top-para  pt-0 iq-pb-70 ">
                <div className="iq-list  ">
                  <ul className="iq-list-with-icon">
                    <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                      <i class="fa-solid fa-hashtag devsecops"></i>
                      Compliance
                    </li>
                    <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                      <i class="fa-solid fa-hashtag devsecops"></i>
                      Cloud Security
                    </li>
                    <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                      <i class="fa-solid fa-hashtag devsecops"></i>
                      Disaster recovery
                    </li>
                    <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                      <i class="fa-solid fa-hashtag devsecops"></i>
                      Endpoint Security
                    </li>
                    <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                      <i class="fa-solid fa-hashtag devsecops"></i>
                      Threat Intelligence
                    </li>
                    <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                      <i class="fa-solid fa-hashtag devsecops"></i> Security
                      Operations
                    </li>

                    <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                      <i class="fa-solid fa-hashtag devsecops"></i>Control over
                      cloud data
                    </li>

                    <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                      <i class="fa-solid fa-hashtag devsecops"></i>
                      Access to cloud data and applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="kub"
          style={{ background: "#EEF1FF", padding: "70px 0px" }}
        >
          <div className="container ">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
                <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud">
                  <div className="icon-box-content">
                    <h5 className="icon-box-title">
                      {" "}
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#F18235" }}
                      >
                        Visibility into cloud data
                      </Link>
                    </h5>

                    <p className="icon-box-desc">
                      In many cases, cloud services are accessed outside of the
                      corporate network and from devices not managed by IT. This
                      means that the IT team needs the ability to see into the
                      cloud service itself to have full visibility over data, as
                      opposed to traditional means of monitoring network
                      traffic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-md-12">
                <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud">
                  <div className="icon-box-content">
                    <h5 className="icon-box-title">
                      {" "}
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#F18235" }}
                      >
                        Control over cloud data
                      </Link>
                    </h5>

                    <p className="icon-box-desc">
                      {" "}
                      In a third-party cloud service provider’s environment, IT
                      teams have less access to data than when they controlled
                      servers and applications on their own premises. Cloud
                      customers are given limited control by default, and access
                      to underlying physical infrastructure is unavailable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
                <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud">
                  <div className="icon-box-content">
                    <h5 className="icon-box-title">
                      {" "}
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#F18235" }}
                      >
                        Disaster recovery
                      </Link>
                    </h5>

                    <p className="icon-box-desc">
                      Cybersecurity planning is needed to protect the effects of
                      significant negative breaches. A disaster recovery plan
                      includes policies, procedures, and tools designed to
                      enable the recovery of data and allow an organization to
                      continue operations and business.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
                <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud">
                  <div className="icon-box-content">
                    <h5 className="icon-box-title">
                      {" "}
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#F18235" }}
                      >
                        Cloud–native breaches
                      </Link>
                    </h5>

                    <p className="icon-box-desc">
                      Data breaches in the cloud are unlike on-premises
                      breaches, in that data theft often occurs using native
                      functions of the cloud. A Cloud-native breach is a series
                      of actions by an adversarial actor in which they “land”
                      their attack by exploiting errors or vulnerabilities in a
                      cloud deployment without using malware, “expand” their
                      access through weakly configured or protected interfaces
                      to locate valuable data, and “exfiltrate” that data to
                      their own storage location.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
                <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud">
                  <div className="icon-box-content">
                    <h5 className="icon-box-title">
                      {" "}
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#F18235" }}
                      >
                        Compliance
                      </Link>
                    </h5>

                    <p className="icon-box-desc">
                      Use of cloud computing services adds another dimension to
                      regulatory and internal compliance. Your cloud environment
                      may need to adhere to regulatory requirements such as
                      HIPAA, PCI and Sarbanes-Oxley, as well as requirements
                      from internal teams, partners and customers. Cloud
                      provider infrastructure, as well as interfaces between
                      in-house systems and the cloud are also included in
                      compliance and risk management processes.Self-service
                      interface is the core tenets of cloud.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud">
                <div className="icon-box-content">
                  <h5 className="icon-box-title">
                    {" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Insider threats
                    </Link>
                  </h5>

                  <p className="icon-box-desc">
                    A rogue employee is capable of using cloud services to
                    expose an organization to a cybersecurity breach. A recent
                    McAfee Cloud Adoption and Risk Report revealed irregular
                    activity indicative of insider threat in 85% of
                    organizations.
                  </p>
                </div>
              </div>
            </div> */}
              <div className="col-lg-4 col-md-6 col-md-12">
                <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud">
                  <div className="icon-box-content">
                    <h5 className="icon-box-title">
                      {" "}
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#F18235" }}
                      >
                        Access to cloud data and applications{" "}
                      </Link>
                    </h5>

                    <p className="icon-box-desc">
                      Users may access cloud applications and data over the
                      internet, making access controls based on the traditional
                      data center network perimeter no longer effective. User
                      access can be from any location or device, including
                      bring-your-own-device (BYOD) technology. In addition,
                      privileged access by cloud provider personnel could bypass
                      your own security controls.Cloud computing removes the
                      need for many of these tasks to achieve more important
                      business goals.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud">
                <div className="icon-box-content">
                  <h5 className="icon-box-title">
                    {" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Misconfiguration
                    </Link>
                  </h5>

                  <p className="icon-box-desc">
                    Cloud-native breaches often fall to a cloud customer’s
                    responsibility for security, which includes the
                    configuration of the cloud service. Research shows that just
                    26% of companies can currently audit their IaaS environments
                    for configuration errors. Misconfiguration of IaaS often
                    acts as the front door to a Cloud-native breach, allowing
                    the attacker to successfully land and then move on to expand
                    and exfiltrate data. Research also shows 99% of
                    misconfigurations go unnoticed in IaaS by cloud customers.
                    Here’s an excerpt from this study showing this level of
                    misconfiguration disconnect:
                  </p>
                  <p></p>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <div class="et_pb_blurb_description">
              <p
                style={{
                  marginTop: "70px",
                  fontSize: "17px",
                  color: "#7C7C7C",
                  fontWeight: "500",
                }}
              >
                <span style={{ color: "#F18235", fontWeight: "700" }}>
                  Compliance –{" "}
                </span>
                We help customers to implement below compliance related
                benchmark. Even if you do not have a dedicated security team,
                don’t worry !! Our engineers take full responsibility to
                identify the gaps per specific compliance requirement and help
                to implement those.
              </p>
            </div>
            <div className="main-list">
              <ol className="compliance-list" type="1">
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  1. AWS Audit Manager Control Tower Guardrails
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  2. AWS Foundational Security Best Practices
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  3. CIS v1.3.0
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  4. CIS v1.4.0
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  5. CIS v1.5.0
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  6. CISA Cyber Essentials
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  7. FedRAMP Low Revision 4
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  8. FedRAMP Moderate Revision 4
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  9. Federal Financial Institutions Examination Council (FFIEC)
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  10. General Data Protection Regulation (GDPR)
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  11, GxP 21 CFR Part 11
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  12. GxP EU Annex 11
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  13. HIPAA
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  14. NIST 800-171 Revision 2
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  15. NIST 800-53 Revision 4
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  16. NIST 800-53 Revision 5
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  17. NIST Cybersecurity Framework (CSF) v1.1
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  18. Other Compliance Checks
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  19. PCI v3.2.1
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  20. RBI Cyber Security Framework
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: "#7C7C7C",
                    fontWeight: "500",
                  }}
                >
                  21. SOC 2
                </li>
              </ol>
            </div>

            <p
              style={{
                fontSize: "17px",
                color: "#7C7C7C",
                fontWeight: "500",
              }}
            >
              <span style={{ color: "#F18235", fontWeight: "700" }}>
                Kubernetes Compliance :
              </span>
              Kuberntest has become the one and only de-facto orchestration tool
              for containers. With so many moving parts , it’s very difficult to
              check if your Kubernetes clusters are configured and deployed
              following best practice . If you have more than one Kubernetes
              cluster maintaining the compliance requirements for all , is very
              difficult without great expertise and proper tools.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#7C7C7C",
                fontWeight: "500",
              }}
            >
              We provide right tools and expertise to implement Kubernetes
              Compliance –
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#7C7C7C",
                fontWeight: "500",
              }}
            >
              1. CIS Kubernetes v1.20 Benchmark.
              <br />
              2. NSA and CISA Kubernetes Hardening Guidance v1.0
              <br />
              3. Extra Checks
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#7C7C7C",
                fontWeight: "500",
              }}
            >
              Extra Checks – So far these are out of scope of any predefined
              benchmark for Kubernetes, but we consider them are important and
              helpful.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#7C7C7C",
                fontWeight: "500",
              }}
            >
              <span style={{ color: "#F18235", fontWeight: "700" }}>
                Benchmarks:{" "}
              </span>
              <br />
              Containers should have liveness probe
              <br />
              Privileged ports should not be mapped with containers
              <br />
              Containers should have readiness probe
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#7C7C7C",
                fontWeight: "500",
              }}
            >
              <span style={{ color: "#F18235", fontWeight: "700" }}>
                Controls:
              </span>
              <br />
              Deployment should have a minimum of 3 replicas
              <br />
              Pods should not refer to a non existing service account
              <br />
              Containers should not be exposed through a forbidden service type{" "}
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#7C7C7C",
                fontWeight: "500",
              }}
            >
              <span style={{ color: "#F18235", fontWeight: "700" }}>
                What is CIS Benchmark? –
              </span>
              CIS Benchmarks are guidelines for hardening specific operating
              systems, middleware, software applications, and network devices.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#7C7C7C",
                fontWeight: "500",
              }}
            >
              <span style={{ color: "#F18235", fontWeight: "700" }}>
                What is CIS Control:
              </span>
              The CIS Controls are a general set of recommended practices for
              securing a wide range of systems and devices.{" "}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SecurityOurService;

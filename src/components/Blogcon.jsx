import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function Blogcon() {
  //   const {itemId}=useParams();
  const params = useParams();
  const userId = params.id;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
    console.log(userData, "hallo");
    console.log(userId, "konichiva");
  }, []);
  console.log("----dnsdb", userData);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Sidenav />
      <div className="readmore-container">
        <div className="readmore-heading-picture">
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
                        <h2 class=" head">Blogs </h2>
                        <ol class="breadcrumb main-bg">
                          <li class="breadcrumb-item">
                            <Link to="/">
                              <i
                                class="fa fa-home mr-2"
                                style={{
                                  paddingRight: "5px",
                                  fontSize: "13px",
                                  overflow: "hidden",
                                }}
                              ></i>
                              <span style={{ fontSize: "17px" }}>Home</span>
                            </Link>
                          </li>

                          <li class="breadcrumb-item active">blog</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {userData ? (
          <div className="blog-pp">
            {/* <img src={userData?.user?.profile_picture} alt="" /> */}
            <div className="blog-pp-container">
              <div className="heading-of-blog">
                {" "}
                <h1 style={{ overflow: "hidden" }}>
                  {userData?.user?.first_name}
                </h1>
              </div>
              <div className="full-blog-info-img">
                <img
                  // src={item.profile_picture}
                  src="/Images/02 (3).png"
                  alt=""
                  className=" h-50"
                />
              </div>
              <div className="writer-info">
                <h4 className="overflow">{userData?.user?.state}</h4>
                <p> {userData?.user?.date_of_birth}</p>
                <p>{userData?.user?.phone}</p>
              </div>
              <div className="blog-main-content-write">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable English.The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  ‘lorem ipsum’ will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
}

export default Blogcon;

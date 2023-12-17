import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import Breadcam from "./Breadcam";
import Footer from "./Footer";
import Sidenav from "./Sidenav";

function Blogmain() {
  const [data, setData] = useState([]);
  //   const params = useParams();

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data, "hhh");

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

                      <li class="breadcrumb-item active">Blog</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container-for-blog">
        <div className="main-container-for-sink">
          {data.users?.map((item) => (
            <div key={item.id} className="all-content-info">
              <div className="blog-card-img">
                {" "}
                <img
                  // src={item.profile_picture}
                  src="/Images/02 (3).png"
                  alt={item.title}
                  className=" h-50"
                />
              </div>

              <div className="author-info">
                <div className="short-description">
                  {" "}
                  <p>{item.date_of_birth}</p>
                </div>
                <div className="author-info-heading">
                  {" "}
                  <h2 style={{ overflow: "hidden" }}>{item.first_name}</h2>
                </div>
                <div className="blog-short-description">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using ‘Content here, content here’, making it look like
                    readable English.The point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as
                    opposed to using ‘Content here, content here’, making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text, and a search for ‘lorem ipsum’ will uncover many
                    web sites still in their infancy.
                  </p>
                </div>
                <Link
                  to={`blogcon/${item.id}`}
                  className="readmore"
                  style={{
                    color: "#F18235",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                    paddingLeft: "10px",
                  }}
                >
                  --- Read More ---
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogmain;

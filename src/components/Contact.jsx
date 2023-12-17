import React from "react";

function Contact() {
  return (
    <>
      <div className=" overview-block-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img
                src="/Images/05 (2).png"
                className="img-fluid anmates contact-flot-img"
                alt="contact"
              ></img>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className=" text-left iq-title-box iq-title-default iq-title-box-2">
                <div className="iq-title-icon"></div>
                <span className="iq-subtitle contact-get-in-touch">
                  Get In Touch
                </span>
                <h2 className="iq-title">Contact With US </h2>

                <p className="iq-title-desc">
                  It is a long established fact that a reader will be distracted
                </p>
              </div>
              <div
                role="form"
                className="wpcf7"
                id="wpcf7-f790-p785-o1"
                lang="en-US"
                dir="ltr"
              >
                <div className="screen-reader-response"></div>
                <form
                  action="https://formspree.io/f/xbjvnjkv"
                  method="post"
                  className="wpcf7-form"
                  id="contact-form"
                  novalidate="novalidate"
                >
                  <div style={{ display: "none" }}></div>
                  <div className="row">
                    <div className="col-lg-6">
                      <span className="wpcf7-form-control-wrap first-name">
                        <input
                          type="text"
                          name="first-name"
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="First Name"
                        />
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <span className="wpcf7-form-control-wrap last-name">
                        <input
                          type="text"
                          name="last-name"
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Last Name"
                        />
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <span className="wpcf7-form-control-wrap your-email">
                        <input
                          type="email"
                          name="your-email"
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Email Address"
                        />
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <span className="wpcf7-form-control-wrap tel-554">
                        <input
                          type="tel"
                          name="Your-tel"
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                          aria-invalid="false"
                          placeholder="Phone"
                        />
                      </span>
                    </div>
                    <div className="col-lg-12">
                      <p>
                        {" "}
                        <span className="wpcf7-form-control-wrap your-message">
                          <textarea
                            name="your-message"
                            cols="40"
                            rows="10"
                            className="wpcf7-form-control wpcf7-textarea"
                            aria-invalid="false"
                            placeholder="Message"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <input
                        type="submit"
                        value="Send"
                        className="iq-button iq-btn-round d-inline contact-submit-btn"
                        style={{ height: "40px" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class=" overview-block-ptb">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <img
                src="/Images/05 (2).png"
                class="img-fluid anmates contact-flot-img"
                alt="contact"
              ></img>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class=" text-left iq-title-box iq-title-default iq-title-box-2">
                <div class="iq-title-icon"></div>
                <span class="iq-subtitle contact-get-in-touch">
                  Get In Touch
                </span>
                <h2 class="iq-title">Contact With US </h2>

                <p class="iq-title-desc">
                  It is a long established fact that a reader will be distracted
                </p>
              </div>
              <div
                role="form"
                class="wpcf7"
                id="wpcf7-f790-p785-o1"
                lang="en-US"
                dir="ltr"
              >
                <div class="screen-reader-response"></div>
                <form
                  action="https://formspree.io/f/xbjvnjkv"
                  method="post"
                  class="wpcf7-form"
                  id="contact-form"
                  novalidate="novalidate"
                >
                  <div style={{ display: "none" }}>
                    <input type="hidden" name="_wpcf7" value="790" />
                    <input type="hidden" name="_wpcf7_version" value="5.1.6" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      value="wpcf7-f790-p785-o1"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_container_post"
                      value="785"
                    />
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <span class="wpcf7-form-control-wrap first-name">
                        <input
                          type="text"
                          name="first-name"
                          size="40"
                          class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="First Name"
                        />
                      </span>
                    </div>
                    <div class="col-lg-6">
                      <span class="wpcf7-form-control-wrap last-name">
                        <input
                          type="text"
                          name="last-name"
                          size="40"
                          class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Last Name"
                        />
                      </span>
                    </div>
                    <div class="col-lg-6">
                      <span class="wpcf7-form-control-wrap your-email">
                        <input
                          type="email"
                          name="your-email"
                          size="40"
                          class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Email Address"
                        />
                      </span>
                    </div>
                    <div class="col-lg-6">
                      <span class="wpcf7-form-control-wrap tel-554">
                        <input
                          type="tel"
                          name="tel-554"
                          size="40"
                          class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                          aria-invalid="false"
                          placeholder="Phone"
                        />
                      </span>
                    </div>
                    <div class="col-lg-12">
                      <p>
                        {" "}
                        <span class="wpcf7-form-control-wrap your-message">
                          <textarea
                            name="your-message"
                            cols="40"
                            rows="10"
                            class="wpcf7-form-control wpcf7-textarea"
                            aria-invalid="false"
                            placeholder="Message"
                          ></textarea>
                        </span>
                      </p>
                    </div>
                    <div class="col-lg-4">
                      <input
                        type="submit"
                        value="Send"
                        class="iq-button iq-btn-round d-inline contact-submit-btn"
                        style={{ height: "40px" }}
                      />
                    </div>
                  </div>
                  <div class="wpcf7-response-output wpcf7-display-none"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Contact;

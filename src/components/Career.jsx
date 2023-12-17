import React from "react";

function Career() {
  return (
    <>
      <div className="images">
        <section className="container main">
          <div className="heading">
            <p>We're looking for</p>
            <p className="job-title">Cloud System Engineer (Freshers)</p>
          </div>
          <div className="role">
            <div className="role-heading">
              <p>The Role</p>
              <li>
                You will be working with customers to help them to build and
                deliver scalable, reusable & secure applications/products. You
                will be learning & working to build
              </li>
              <li>a/ DevSecOps pipeline,</li>
              <li>DataEngineering platform,</li>
              <li>
                Implementation of micro-services-based applications using
                Kubernetes ecosystem.
              </li>
              <li>
                Based on your interest and technical ability you may choose to
                work on a/b/c OR a combination of these.
              </li>
            </div>
          </div>
          <div className="basic-qualification">
            <div className="role-heading">
              <p>Basic Qualification</p>
              <li>
                Must have good learning ability. Should be able to learn new
                technologies quickly.
              </li>
              <li>
                Ability to take ownership & deliver result. Should be a good
                communicator and a team player.
              </li>
              <li>
                Someone with inquisitive mindset about technologies and love to
                build/experiment new things (may not be related to job) would be
                given highest preference.
              </li>
              <li>Should be comfortable with basic Linux commands.</li>
              <li>Knowledge of Python Programming language.</li>
              <li> Knowledge of AWS Cloud is preferable.</li>
              <li>
                Degree in computer science/engineering is preferable but not
                necessary.
              </li>
            </div>
          </div>
          <div className="job-location">
            <div className="job-location-heading">
              <p>Job Location – Kolkata(From Office)</p>
              <p className="job-location-sub-heading">
                Hiring Process (Usually completed everything within 15/20
                working days)
              </p>
              <div className="role-heading">
                <li> Phone Screening – 45 minutes</li>
                <li>
                  If found to be a suitable match, technical round of 1 hour.
                </li>
                <li>
                  A programming assignment in your own preferable language (C,
                  Java, Golang, Python, Scala)
                </li>
                <li>
                  Final interview round & if selected suitable offer will be
                  provided within 5 working days.
                </li>
              </div>
            </div>
          </div>
          <div className="probation-period">
            <div className="probation-period-heading">
              <p>Probation Period – 3 months</p>
            </div>
            <div className="role-heading">
              <li>
                During probation trainings will be provided for specific
                learnings and certifications.
              </li>
              <li>
                Need to complete 2 or more certifications during first 3 months.
                Completion of 2 certifications is must.
              </li>
              <li>
                During probation period allowance & company provided free
                accommodation will be provided (If needed). Once probation is
                completed with satisfactory performance along with
                certification(s), monthly salary of 30K INR (CTC) will be
                provided on confirmation. If needed free accommodation is also
                provided.
              </li>
              <li>
                Performance evaluation – every 6 months there will be a
                performance evaluation and based on performance and contribution
                salary will be revised.
              </li>
            </div>
            <div className="cv">
              <p>If interested, please send your resume in PDF format to </p>
              <a
                href="mailto:jobs@dataluminous.com"
                style={{
                  color: "#0d6efd",
                  textDecoration: "none",
                }}
              >
                <p style={{ fontStyle: "italic" }}>jobs@dataluminous.com</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Career;

import React from "react";
import "./Projects.css";

import ListGroup from "react-bootstrap/ListGroup";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />

        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Redux</span>
                <span className="card-detail-badge">Node Js</span>
                <span className="card-detail-badge">Express Js</span>
                <span className="card-detail-badge">Sequelize</span>
                <span className="card-detail-badge">MY Sql</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Mail Box Client</h6>
                </div>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Mailbox Client is an application where users can send and
                    receive mail. -Implement client-side routing using React
                    Router to create a smooth, single-page application
                    experience.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Implement secure user authentication using JWT to ensure
                    that users can access only their own data.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Each user has their own account and users cannot access
                    other users data.
                  </ListGroup.Item>
                </ListGroup>
                <a className="ad-btn" href="https://github.com/Pra1233/MailBox">
                  View
                </a>

                <a className="ad-btn" href="https://youtu.be/aWRFHMLM7Ss">
                  Watch
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://cdn.helpwise.io/assets/images/helpwise-chat.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">Javascript</span>
                <span className="card-detail-badge">Node Js</span>
                <span className="card-detail-badge">Express Js</span>
                <span className="card-detail-badge">Sequelize</span>
                <span className="card-detail-badge">MY Sql</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Group Chat App</h6>
                </div>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    App for user registration, login, group creation, and chat
                    with strangers and friends. The group creator becomes the
                    admin with special powers.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Implemented SQL schema for one-to-one, one-to-many,
                    many-to-many relationships using Sequelize.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Added live chat using Socket.io. Tested it thoroughly and
                    ran it on AWS for speed and reliability.
                  </ListGroup.Item>
                </ListGroup>
                <a
                  className="ad-btn"
                  href="https://github.com/Pra1233/chatTask"
                >
                  View
                </a>
                <a className="ad-btn" href="https://youtu.be/z9jEeMJQ_Uc">
                  Watch
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://www.printabulls.com/wp-content/uploads/2021/06/Printable-Expense-Tracker-Page-3-scaled.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">Javascript</span>
                <span className="card-detail-badge">Node Js</span>
                <span className="card-detail-badge">Express Js</span>
                <span className="card-detail-badge">Sequelize</span>
                <span className="card-detail-badge">MY Sql</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Expense Tracker</h6>
                </div>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Developed an expense tracking website with signup and signin
                    pages, Implemented bcrypt for password encryption, JWT for
                    user identification.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Offers separate user interfaces for regular and premium
                    users.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Users can monitor expenses, credits, and savings, displayed
                    on the frontend. Integrated AWS S3 for efficient storage and
                    retrieval of data.
                  </ListGroup.Item>
                </ListGroup>
                <a
                  className="ad-btn"
                  href="https://github.com/Pra1233/NODEJS-1"
                >
                  View
                </a>
                <a className="ad-btn" href="https://youtu.be/CQXhfLCoHkU">
                  Watch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

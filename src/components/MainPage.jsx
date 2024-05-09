import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import { Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <img src={logo} alt="Logo" srcSet="" height={100} />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* PART 2 */}
      <div className="caro" style={{ marginTop: "12px" }}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* PART 3 */}
      <div>
        <Carousel
          interval={null}
          indicators={false}
          controls={true}
          pause={true}
        >
          <Carousel.Item style={{ marginTop: "12px", marginBottom: "12px" }}>
            <div className="d-flex justify-content-around">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>New Bharat Biz</Card.Title>
                  <Card.Text>
                    New Bharat Biz is an online service Mobile APP that helps
                    you find the right service professionals for activities of
                    importance . New Bharat Biz is an online service Mobile APP
                    that helps you find the right service professionals for
                    activities of importance . New Bharat Biz is an online
                    service Mobile APP
                  </Card.Text>
                  <Button variant="primary">More Details</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>Ricexpert APP</Card.Title>
                  <Card.Text>
                    The ICAR-National Rice Research Institute (NRRI), Cuttack is
                    a premier rice research institute in India with a vision to
                    ensure sustainable food and nutritional security. The
                    ICAR-National Rice Research Institute (NRRI), Cuttack is a
                    premier rice research institute in India with a vision to
                    ensure sustainable.
                  </Card.Text>
                  <Button variant="primary">More Details</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                  <Card.Title>Blood in a Tip</Card.Title>
                  <Card.Text>
                    Keeping in mind the noble and important cause for blood
                    requirement, ‘Blood in a Tip’, aims to give the user, fast
                    access to contact blood donor at one tap. Keeping in mind
                    the noble and important cause for blood requirement, ‘Blood
                    in a Tip’, aims to give the user, fast access to contact
                    blood donor at one tap.
                  </Card.Text>
                  <Button variant="primary">More Details</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img7} />
                <Card.Body>
                  <Card.Title>HMS-AI</Card.Title>
                  <Card.Text>
                    Hospital Management System. Modules are Out-Patient
                    Management, Purchase Management, In-Patient Management, OT
                    Management, Medication Orders,
                  </Card.Text>
                  <Button variant="primary">More Details</Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* PART 4 */}={" "}
      <div id="parent">
        <div id="child1">
          <img src={logo} alt="" srcset="" />
        </div>
        <div id="child2">
          Wayindia Software Solution Pvt. Ltd. driven by 21st Century cutting
          edge technology enables successful platform based Digital
          transformation initiatives for enterprises to innovate, transform and
          nurture business that can drive positive, sustainable change for
          clients, our people and society at large.
        </div>
      </div>
      {/* PART 5 */}
      {/* Footer page */}
      <div className="footer-content" style={{ marginTop: "15px" }}>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Order Status</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Information</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>Categories</li>
            <li>Deals</li>
            <li>New Arrivals</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We at ShopSage assure you quality products with faster delivery and
            at lower price.
          </p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li>
              <i className="fa fa-facebook"></i>
            </li>
            <li>
              <i className="fa fa-twitter"></i>
            </li>
            <li>
              <i className="fa fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainPage;

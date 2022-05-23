import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import "../css/Home.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <header className="navbar">
        <div className="navbar__title navbar__item">Auth App</div>
        <div className="navbar__item">
          {currentUser ? (
            <p>
              You are logged in - <Link to="/dashboard">View Dashboard</Link>
            </p>
          ) : (
            <p>
              <Link to="/login" className="btn btn-danger">
                เข้าสู่ระบบ
              </Link>{" "}
              หรือ{" "}
              <Link to="/signup" className="btn btn-success">
                ลงทะเบียน
              </Link>
            </p>
          )}
        </div>
      </header>

      <section className="Header">
        <div className="container mt-5">
          กรุณาเข้าสู่ระบบ ที่ปุ่มด้านบนขวามือ
        </div>{" "}
        <br></br>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1596879857570-7b6b9018bcb6?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1520961810802-7f0a32de665a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1512553353614-82a7370096dc?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Home;

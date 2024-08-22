import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion"; 
import item1 from "../../images/1 (1).jpg";
import item2 from "../../images/2.jpg";
import "./carousel.css";

function IndividualIntervalsExample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} 
      className="slider"
    >
      <div className="container">
        <h1>Testimonials</h1>
        <div className="row col-lg-12 col-md-12">
          <Carousel controls={true} indicators={false} pause={false}>
            <Carousel.Item interval={1000}>
              <img src={item1} alt="First slide" />
              <Carousel.Caption>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <h3>Maccy Doe - Front End</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img src={item2} alt="Second slide" />
              <Carousel.Caption>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <h3>Johnthan Doe - UX Designer</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={item1} alt="Third slide" />
              <Carousel.Caption>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <h3>Simab Dave - Web Designer</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
}

export default IndividualIntervalsExample;

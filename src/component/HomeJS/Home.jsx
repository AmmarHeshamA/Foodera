import React, { useEffect, useRef } from "react";
import Header from "./Header";
import "./Home.css";
import prideimg from "../../images/1.png";
import ingredientsimg from "../../images/2.png";
import Data from "../../Data";
import IndividualIntervalsExample from "../Carousel/carousal";
import { CountUp } from "countup.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const savingRef = useRef(null);
  const photosRef = useRef(null);
  const rocketsRef = useRef(null);
  const globesRef = useRef(null);

  const { ref: savingInViewRef, inView: savingInView } = useInView({
    triggerOnce: true,
  });
  const { ref: photosInViewRef, inView: photosInView } = useInView({
    triggerOnce: true,
  });
  const { ref: rocketsInViewRef, inView: rocketsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: globesInViewRef, inView: globesInView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const options = {
      useEasing: true,
      useGrouping: true,
      separator: ",",
      decimal: ".",
    };

    if (savingInView) {
      const saving = new CountUp(savingRef.current, 1287, options);
      saving.start();
    }
    if (photosInView) {
      const photos = new CountUp(photosRef.current, 4587, options);
      photos.start();
    }
    if (rocketsInView) {
      const rockets = new CountUp(rocketsRef.current, 1452, options);
      rockets.start();
    }
    if (globesInView) {
      const globes = new CountUp(globesRef.current, 1287, options);
      globes.start();
    }
  }, [savingInView, photosInView, rocketsInView, globesInView]);

  const Blogitem = Data.map((pro) => {
    return (
      <motion.div
        className="col-md-4"
        key={pro.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: pro.id * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="box">
          <img src={pro.img} alt={pro.title} />
          <h5>{pro.title}</h5>
          <span>{pro.time}</span>
          <h6>{pro.price}</h6>
          <button>Order Now</button>
        </div>
      </motion.div>
    );
  });

  return (
    <>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <motion.div
              className="col-md-3"
              initial={{ scale: 0 }}
              animate={savingInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5 }}
              ref={savingInViewRef}
            >
              <h2 ref={savingRef}>0</h2>
              <h6>SAVING</h6>
            </motion.div>
            <motion.div
              className="col-md-3"
              initial={{ scale: 0 }}
              animate={photosInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              ref={photosInViewRef}
            >
              <h2 ref={photosRef}>0</h2>
              <h6>PHOTOS</h6>
            </motion.div>
            <motion.div
              className="col-md-3"
              initial={{ scale: 0 }}
              animate={rocketsInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              ref={rocketsInViewRef}
            >
              <h2 ref={rocketsRef}>0</h2>
              <h6>ROCKETS</h6>
            </motion.div>
            <motion.div
              className="col-md-3"
              initial={{ scale: 0 }}
              animate={globesInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              ref={globesInViewRef}
            >
              <h2 ref={globesRef}>0</h2>
              <h6>GLOBES</h6>
            </motion.div>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <section className="pride">
          <div className="container">
            <div className="row">
              <motion.div
                className="col-md-6"
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img src={prideimg} alt="Pride" />
              </motion.div>
              <motion.div
                className="col-md-6"
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h2>
                  We pride ourselves on making real food from the best
                  ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
                <button>Learn More</button>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <section className="ingredients">
          <div className="container">
            <div className="row">
              <motion.div
                className="col-md-6"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h2>
                  We make everything by hand with the best possible ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus. Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.
                </p>
                <ul>
                  <li>Etiam sed dolor ac diam volutpat.</li>
                  <li>Erat volutpat aliquet imperdiet.</li>
                  <li>purus a odio finibus bibendum.</li>
                </ul>
                <button>
                  <a href="#">Learn More</a>
                </button>
              </motion.div>
              <motion.div
                className="col-md-6"
                initial={{ rotate: -180 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img src={ingredientsimg} alt="Ingredients" />
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <section className="paralex">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2>
                  When a man's stomach is full it makes no <br /> difference
                  whether he is rich or poor.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio <br /> finibus bibendum in sit amet leo.
                  Mauris feugiat erat tellus.
                </p>
                <a href="#">Watch Our Story</a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <section className="bloges">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2>Explore Our Foods</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus. Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts. Separated they live in Bookmarksgrove.
                </p>
              </div>
            </div>
            <div className="row">{Blogitem}</div>
          </div>
        </section>
      </motion.div>
      <IndividualIntervalsExample />
    </>
  );
};

export default Home;

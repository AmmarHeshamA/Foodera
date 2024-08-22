import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }} // Initial animation state (invisible and above)
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts (visible and in place)
      transition={{ duration: 1 }} // Animation duration
    >
      <div className="container">
        <div className='row'>
          <div className="col-md-6">
            <h2>Good food choices are good investments.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <button>Order Now</button>
            <button>Learn More</button>
          </div>
          
          <div className="col-md-6">
            {/* Add any content for the second column here */}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

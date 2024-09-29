import PropTypes from "prop-types";
import { FaUtensils, FaLeaf, FaTruck, FaHeart } from "react-icons/fa";

const AboutSection = ({ icon, title, description }) => (
  <div className='bg-white bg-opacity-80 rounded-lg p-6 shadow-lg'>
    {icon}
    <h3 className='text-xl font-bold mb-2 text-text'>{title}</h3>
    <p className='text-text text-opacity-90'>{description}</p>
  </div>
);

function AboutUs() {
  return (
    <div className='bg-background min-h-screen py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8 text-center text-text'>
          About Flavor Fusion
        </h1>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <p className='text-xl text-text text-opacity-90'>
            At Flavor Fusion, we&apos;re passionate about delivering delicious meals
            right to your doorstep. Our journey began with a simple idea: to
            make quality dining accessible to everyone.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <AboutSection
            icon={<FaUtensils className='text-4xl text-accent mb-4' />}
            title='Quality Ingredients'
            description='We source only the freshest, highest-quality ingredients to ensure every meal is a delight.'
          />
          <AboutSection
            icon={<FaLeaf className='text-4xl text-accent mb-4' />}
            title='Sustainable Practices'
            description="We're committed to eco-friendly packaging and sustainable sourcing to reduce our environmental impact."
          />
          <AboutSection
            icon={<FaTruck className='text-4xl text-accent mb-4' />}
            title='Fast Delivery'
            description='Our efficient delivery system ensures your food arrives hot and fresh, right when you want it.'
          />
          <AboutSection
            icon={<FaHeart className='text-4xl text-accent mb-4' />}
            title='Customer Satisfaction'
            description="Your satisfaction is our top priority. We're always here to listen and improve our services."
          />
        </div>
      </div>
    </div>
  );
}

AboutSection.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutUs;

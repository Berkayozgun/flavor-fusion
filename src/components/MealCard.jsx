import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Button from "./Button";
import { FaUtensils, FaShoppingCart } from 'react-icons/fa';

function MealCard({ meal }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(meal));
  };

  return (
    <div className="bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={meal.image} alt={meal.title} />
        <div className="absolute top-0 right-0 bg-accent text-white px-2 py-1 m-2 rounded-full text-sm font-bold">
          ${meal.price.toFixed(2)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-text flex items-center">
          <FaUtensils className="mr-2 text-accent" />
          {meal.title}
        </h3>
        <p className="text-text text-opacity-90 text-sm mb-4">{meal.about}</p>
        <div className="flex items-center justify-between">
          <span className="text-accent font-semibold">{meal.category}</span>
          <Button 
            onClick={handleAddToCart}
              color="accent"
            className="flex items-center"
          >
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    about: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealCard;

import Button from "../components/Button";
import PropTypes from "prop-types";

const CartSummary = ({ totalPrice, onCreateOrder }) => (
  <div className='mt-8 text-right'>
    <p className='text-2xl font-bold mb-4 text-text'>
      Total: <span className='text-accent'>${totalPrice.toFixed(2)}</span>
    </p>
    <Button color='accent' onClick={onCreateOrder}>
      Place Order
    </Button>
  </div>
);

CartSummary.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  onCreateOrder: PropTypes.func.isRequired,
};

export default CartSummary;

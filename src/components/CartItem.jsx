import Button from '../components/Button';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => (
  <li className='bg-primary rounded-lg shadow-sm p-4 flex justify-between items-center'>
    <div>
      <h2 className='font-semibold text-lg text-text'>{item.title}</h2>
      <p className='text-text'>Price: <span className='font-bold'>${item.price.toFixed(2)}</span></p>
      <div className='flex items-center mt-2'>
        <Button color="danger" onClick={() => onDecrease(item.id, item.quantity)} className="p-2">
          <FaMinus />
        </Button>
        <span className='bg-white py-1 px-4 mx-2 rounded'>{item.quantity}</span>
        <Button color="accent" onClick={() => onIncrease(item.id)} className="p-2">
          <FaPlus />
        </Button>
      </div>
    </div>
    <Button color="danger" onClick={() => onRemove(item.id)} className="p-2">
      <FaTrash />
    </Button>
  </li>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;

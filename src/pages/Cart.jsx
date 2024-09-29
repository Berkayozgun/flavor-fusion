import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";
import Modal from "../components/Modal";
import CartItem from "../components/CartItem"; // Yeni bileşeni içe aktar
import CartSummary from "../components/CartSummary"; // Yeni bileşeni içe aktar
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 0),
      0
    );
  }, [cartItems]);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId, quantity) => {
    if (quantity === 1) {
      handleRemoveFromCart(itemId);
    } else {
      dispatch(decreaseQuantity(itemId));
    }
  };

  const handleCreateOrder = () => {
    setShowPopup(true);
  };

  const handleConfirmOrder = () => {
    setShowPopup(false);
    dispatch(clearCart());
    navigate("/");
  };

  const orderSummary = cartItems
    .map((item) => `${item.title} (${item.quantity} items)`)
    .join(", ");

  return (
    <div className='bg-background min-h-screen py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8 text-center text-text flex items-center justify-center'>
          <FaShoppingCart className='mr-4 text-accent' />
          My Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className='text-center text-text text-xl bg-white rounded-lg p-8 shadow-md'>
            Your cart is empty.
          </p>
        ) : (
          <div className='bg-white bg-opacity-90 rounded-lg p-8 shadow-lg'>
            <ul className='space-y-4'>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={handleIncreaseQuantity}
                  onDecrease={handleDecreaseQuantity}
                  onRemove={handleRemoveFromCart}
                />
              ))}
            </ul>
            <CartSummary
              totalPrice={totalPrice}
              onCreateOrder={handleCreateOrder}
            />
          </div>
        )}

        <Modal
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          title='Order Summary'
          onConfirm={handleConfirmOrder}
          confirmText='Confirm'
          cancelText='Cancel'
        >
          <p className='mb-4 text-text'>{orderSummary}</p>
          <p className='font-bold text-xl mb-6 text-accent'>
            Total Amount: ${totalPrice.toFixed(2)}
          </p>
        </Modal>
      </div>
    </div>
  );
}

export default Cart;

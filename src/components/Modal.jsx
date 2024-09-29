import PropTypes from "prop-types";
import Button from "./Button";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText,
  cancelText,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-8 max-w-md w-full shadow-lg'>
        <h2 className='text-2xl font-bold mb-4 text-text'>{title}</h2>
        <div className='mb-6 text-text'>{children}</div>
        <div className='flex justify-end space-x-4'>
          <Button color='secondary' onClick={onClose}>
            {cancelText || "Cancel"}
          </Button>
          <Button color='accent' onClick={onConfirm}>
            {confirmText || "Confirm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
};
export default Modal;

import React from 'react';
import Spinner from './Spinner';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Content</h2>
        {/* Spinner */}
        <Spinner />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

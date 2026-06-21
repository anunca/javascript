'use client';

import React, { useState } from 'react';
import Modal from '../components/Modal';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Home;

import React from 'react';
import './Spinner.scss';

// const Spinner: React.FC = () => {
//   return (
//     <div className="spinner">
//       <div className="spinner-inner"></div>
//     </div>
//   );
// };

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="tire">
        <div className="rim"></div>
        <div className="rim"></div>
        <div className="rim"></div>
      </div>
    </div>
  );
};

export default Spinner;

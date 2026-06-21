import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <MyComponent text="Hello, world!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

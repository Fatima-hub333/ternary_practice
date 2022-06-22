import React from 'react';
import './index.css';

export default function App() {
  const isGoingOut = true;

  const answer = isGoingOut ? 'Yes' : 'No';

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value">
        <h1>{answer}</h1>
      </div>
    </div>
  );
}

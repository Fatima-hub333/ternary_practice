/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './index.css';

/**
     * Challenge:
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

export default function App() {
  const [isGoingOut, setIsGointOut] = React.useState(true);

  function changeMind() {
    setIsGointOut(prevState => !prevState);
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div onClick={changeMind} className="state--value">
        <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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

// export default function App() {
//   const [isGoingOut, setIsGointOut] = React.useState(true);

//   function changeMind() {
//     setIsGointOut(prevState => !prevState);
//   }

//   return (
//     <div className="state">
//       <h1 className="state--title">Do I feel like going out tonight?</h1>
//       <div onClick={changeMind} className="state--value">
//         <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
//       </div>
//     </div>
//   );
// }

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: false,
  });

  const starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" />
        <div className="card--info">
          <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName}
            {' '}
            {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>

      </article>
    </main>
  );
}

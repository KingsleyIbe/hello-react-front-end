/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const greeting = 'Greetings';
    const logo = 'Greeting App';
    return (
      <header className="shadow-lg border-b-2 border-purple-600 py-5">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl text-purple-600">{logo}</Link>
          <nav>
            <Link to="/greetings" className="py-2 px-6 bg-purple-600 rounded-md text-white">{greeting}</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

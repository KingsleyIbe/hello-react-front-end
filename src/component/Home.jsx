/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Home extends React.Component {
  render() {
    const displayText = 'Rails React Greeting App';
    return (
      <>
        <div className="flex justify-center items-center">
          <div className="mt-64">
            <h1 className="text--2xl md:text-4xl font-semibold text-purple-600">{displayText}</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

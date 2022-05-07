// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// import Greeting from './component/Greeting';

// function App() {
//   return (
//     <Router className="App">
//       <Routes>
//         <Route path="/" element={<Greeting />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './component/Greeting';
import Home from './component/Home';
import store from './redux/store';
import Header from './component/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/greetings" element={<Greeting />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;

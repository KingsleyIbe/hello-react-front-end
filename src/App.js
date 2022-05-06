import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Greeting from './component/Greeting';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;

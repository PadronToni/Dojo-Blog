import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/create/Create';

function App() {
  return (
    <Router>

      <main className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;

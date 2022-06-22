import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/create/Create';
import BlogDetail from './components/blog-detail/BlogDetail';

function App() {
  return (
    <Router>
      <main className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
            <Route path='/blogs/:id' element={<BlogDetail></BlogDetail>}></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;

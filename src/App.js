import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <main className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </main>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer.js"
import AllPlants from "./pages/AllPlants.js"
import AllSeeds from "./pages/AllSeeds.js"
import Blogs from "./pages/blogs/Blogs.js"
import Register from "./pages/authFolder/Register.js"
import Login from "./pages/authFolder/Login.js"

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='all_plants' element={<AllPlants />} />
              <Route path='all_seeds' element={<AllSeeds />} />
              <Route path='blogs' element={<Blogs />} />
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

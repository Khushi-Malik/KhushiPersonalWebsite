// import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact, Blog, Achievement, BlogPost } from './pages';
// import Social from './components/Social';

const App = () => {
  console.log("Rendering App component");
  return (
     <main className='bg-slate-300/20 min-h-screen'> 
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path='/achievement' element={<Achievement />} />
        </Routes>
        {/* <Social /> */}
      </Router>
     </main>
  )
}
 
export default App

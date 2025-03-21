import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar'
import Resumes from './components/Resumes';

function App() {

  return (
    <AuthContextProvider>
      <div className="App">
        {/* by default authentic routes */}
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resumes" element={<Resumes />} />
              <Route path="/login" element={<LogIn/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AuthContextProvider>

  )
}

export default App

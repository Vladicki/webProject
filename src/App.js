import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx';
import Home from './pages/Home.jsx';
import LogIn from './components/LogIn.jsx';
import Navbar from './components/Navbar.jsx'

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
              <Route path="/login" element={<LogIn/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AuthContextProvider>

  )
}

export default App

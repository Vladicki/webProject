import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import Resumes from './components/Resumes';
import Footers from './components/Footers';  // Import Footer

function App() {
  return (
    <AuthContextProvider>
      <div className="flex flex-col min-h-screen"> {/* Full screen height */}
        <BrowserRouter>
          <Navbar />
          <main className="flex-grow"> {/* Main content grows to fill space */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resumes" element={<Resumes />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </main>
          <Footers /> {/* Add Footer here */}
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;

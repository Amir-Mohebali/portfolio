import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import Header from "./components/header/Header"
import Home from "./pages/Home"

function App() {

  return (
    <div className="app">
      <ThemeProvider>  
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App

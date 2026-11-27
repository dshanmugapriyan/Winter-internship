import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/service" Component={Service} />
                <Route path="/contact" Component={Contact} />
            </Routes>
        </>
    )
}

export default App

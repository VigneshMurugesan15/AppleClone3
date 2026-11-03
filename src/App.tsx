import Navbar from './components/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import Watch from './pages/Watch'
import Mac from './pages/Mac'
import Ipad from './pages/Ipad'
import Iphone from './pages/Iphone'
import Airpods from './pages/Airpods'
import Accessories from './pages/Accessories'
import Entertainment from './pages/Entertainment'
import Tvhome from './pages/Tvhome'
import Vision from './pages/Vision'
import Support from './pages/Support'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/airpods" element={<Airpods />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/tvhome" element={<Tvhome />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
    

       </>
  )
}

export default App

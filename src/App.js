import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JawbreakerSection from './pages/JawbreakerSection'


export default function App()
{
    return (
        <div>
          <BrowserRouter>
              <Routes>
                  <Route index element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/jawbreakersection' element={<JawbreakerSection />} />
                  
              </Routes>                
          </BrowserRouter>
        </div>
    )
    
       
    
}
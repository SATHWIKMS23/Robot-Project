import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Items } from './components/items.tsx'
import { Steps } from './components/steps.tsx'
import { Aboutus } from './components/about.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='/items' element={<Items />}></Route>
    <Route path='/steps' element={<Steps />}></Route>
    <Route path = '/aboutus' element={<Aboutus />} ></Route>
   </Routes>
  </BrowserRouter>,
)

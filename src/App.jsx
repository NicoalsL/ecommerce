import { Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import Catalogue from './pages/Catalogue'
import Pays from './pages/pays'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Catalogue/>}/>
        <Route path='/pays/:name' element={<Pays></Pays>}/> 
      </Routes>
    </>
  )

}

export default App
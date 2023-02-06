import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import AddSales from './pages/AddSales'
import Login from './pages/Login'
import Register from './pages/Register'
import TodaysRevenue from './pages/TodaysRevenue'
import Top5Sales from './pages/Top5Sales'

function App() {

  return (
    // ! defining all my routes here
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navbar />}>
      {/* ! this will automatically open up because it has the index prop */}
      <Route index  element={<AddSales/>}  />
      <Route path='top-five-sales' element={<Top5Sales/>}  />
      <Route path='todays-revenue' element={<TodaysRevenue/>}  />
      <Route path='register' element={<Register/>}  />
      <Route path='login' element={<Login/>}  />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App

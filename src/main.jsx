import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home.jsx'
import About from './About.jsx'
import Product from './Product.jsx'
import Customer from './Customer.jsx'
import Seller from './Seller.jsx'
import Data from './Data.jsx'
import DataLayout from './DataLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> {/* tampilkan component berdasarkan url. */}
        <Route path="/about" element={<About/>}/>
        <Route path="/data" element={<DataLayout/>}> {/* implement outlet as parent child */}
            <Route index element={<Data/>}/> {/* as index path "data" */}
            {/* Nested Route */}
            <Route path="products" element={<Product/>}/>
            <Route path="customers" element={<Customer/>}/>
            <Route path="sellers" element={<Seller/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

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
import ProductDetail from './ProductDetail.jsx'
import Image from './Image.jsx'
import NotFound from './NotFound.jsx'
import ProductSearch from './ProductSearch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> {/* tampilkan component berdasarkan url. */}
        <Route path="/about" element={<About/>}/>
        <Route path="/images/*" element={<Image/>}/> {/* akan mengambil semua data menggunakan star segment */}
        <Route path="/data" element={<DataLayout/>}> {/* implement outlet as parent child */}
            <Route index element={<Data/>}/> {/* as index path "data" */}
            {/* Nested Route */}
            <Route path="products" element={<Product/>}/>
            <Route path="products/search" element={<ProductSearch/>}/>
            <Route path="customers" element={<Customer/>}/>
            <Route path="sellers" element={<Seller/>}/>
            <Route path="productid/:id/productname/:name" element={<ProductDetail/>}/> {/* menambahkan param di routing/url */}
        </Route>
        <Route path="/*" element={<NotFound/>}/> {/* menerapkan star segment untuk url yang tidak ditemukan */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

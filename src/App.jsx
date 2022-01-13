// #region 'Importing'
import Header from "./components/Header"

import "../src/App.css"
import "../src/main.css"

import BasketPage from '../src/Pages/BasketPage'
import CategoriesPage from '../src/Pages/CategoriesPage'

import ProductsPage from '../src/Pages/ProductsPage'
import ProductDetailPage from '../src/Pages/ProductDetailPage'

import HomePage from "./Pages/HomePage"
import NotFoundPage from './Pages/NotFoundPage'

import {Routes, Route} from 'react-router-dom'

import { useState } from "react"
import { useEffect } from "react"
// #endregion

function App() {

  // #region 'State Object'
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const [categoriesChecked, setCategoriesChecked] = useState(null)
  // #endregion

  // #region 'Server Functions'
  function getProductsFromServer() {

    fetch('http://localhost:8000/products')
      .then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))

  }

  function getCategoriesFromServer() {

    fetch('http://localhost:8000/categories')
      .then(resp => resp.json())
      .then(categoriesFromServer => setCategories(categoriesFromServer)) 

  }

  useEffect(getProductsFromServer, [])
  useEffect(getCategoriesFromServer, [])
  // #endregion
  
  // #region 'App Html Returning'
  return (

    <div className="app">

      <main>
        
        <Header />

        <Routes>

          <Route 
            path = '/home' 
            element = {<HomePage />}>
          </Route>

          <Route 
            path = '/categories' 
            element = {<CategoriesPage categories = {categories} setCategoriesChecked = {setCategoriesChecked} setCategories = {setCategories}/>}>
          </Route>

          <Route 
            path = '/basket' 
            element = {<BasketPage />}>
          </Route>
          
          <Route 
            path = '/products' 
            element = {<ProductsPage products = {products}/>}>
          </Route>

          <Route 
            path='*' 
            element = {<NotFoundPage />}>
          </Route>
          
          <Route 
            path = '/products/:id' 
            element = {<ProductDetailPage />}>
          </Route>
        
        </Routes>

      </main>

    </div>

  )
  // #endregion

}

export default App
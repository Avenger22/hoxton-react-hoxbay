// #region 'Importing'
import Header from "./components/Header"

import "../src/App.css"

import BasketPage from '../src/Pages/BasketPage'
import CategoriesPage from '../src/Pages/CategoriesPage'

import ProductsPage from '../src/Pages/ProductsPage'
import ProductDetailPage from '../src/Pages/ProductDetailPage'
import CategoriesProducts from '../src/Pages/CategoriesProducts'

import HomePage from "./Pages/HomePage"
import NotFoundPage from './Pages/NotFoundPage'

import {Routes, Route, Navigate} from 'react-router-dom'

import { useState } from "react"
import { useEffect } from "react"
// #endregion

function App() {

  // #region 'State Object'
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const [basketProducts, setBasketPrdoucts] = useState([])
  const [categoryValue, setCategoryValue] = useState(null)

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

  // #region 'Conditionals'
  // if (basketProducts.length > 0) {
  //   window.location.href = '/basket'
  // }

  function filterProductsByCategory(filteredProductsParam) {
    return filteredProductsParam.filter(product => product.categoryId === categoryValue)
  }

  let filteredProducts = [...products]
  console.log(filteredProducts)

  if (categoryValue !== 0) {
    filteredProducts = filterProductsByCategory(filteredProducts)
  }

  // #endregion

  // #region 'App Html Returning'
  return (

    <div className="app">

      <main>
        
        <Header />

        {
          //#region 'Routes'
        }

        <Routes>

          <Route 
            index 
            element={<Navigate replace to="/home" />} 
          />

          <Route 
            path = '/home' 
            element = {<HomePage />}>
          </Route>

          <Route 
            path = '/categories' 
            element = {
              <CategoriesPage 
                categories = {categories} 
                setCategoryValue = {setCategoryValue}
              />}
            >
          </Route>

          <Route 
            path = '/categories/:id' 
            element = {<CategoriesProducts />}>
          </Route>

          <Route 
            path = '/basket' 
            element = {
              <BasketPage 
                basketProducts = {basketProducts} 
                setBasketPrdoucts = {setBasketPrdoucts}
              />}
            >
          </Route>
          
          <Route 
            path = '/products' 
            element = {
              <ProductsPage 
                products = {products} 
                filteredProducts = {filteredProducts}
              />}
            >
          </Route>

          <Route 
            path='*' 
            element = {<NotFoundPage />}>
          </Route>
          
          <Route 
            path = '/products/:id' 
            element = {
              <ProductDetailPage  
                basketProducts = {basketProducts} 
                setBasketPrdoucts = {setBasketPrdoucts}
              />}
            >
          </Route>
        
        </Routes>

        {
          //#endregion
        }

      </main>

    </div>

  )
  // #endregion

}

export default App
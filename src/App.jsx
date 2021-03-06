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

import { Routes, Route, Navigate, useParams } from 'react-router-dom'

import { useState } from "react"
import { useEffect } from "react"
// #endregion

function App() {


  // #region 'State Object'

  const [products, setProducts] = useState([])

  const [categories, setCategories] = useState([])

  const [categoryValue, setCategoryValue] = useState({ value: null, clicked: false })
  const [searchTerm, setSearchTerm] = useState('')
  // #endregion

  // #region 'Server Functions'
  function getProductsFromServer() {
    fetch('http://localhost:8000/products')
      .then(resp => resp.json())
      .then(productsFromServer1 => {
        setProducts(productsFromServer1)
      })

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
  function filterProductsByCategory(filteredProducts) {
    return filteredProducts.filter(product => product.categoryId === categoryValue.value)
  }

  // function filterProductsByName(filteredProductsParam) {
  //   return filteredProductsParam.filter(product => product.title.toUpperCase().includes(searchTerm.toUpperCase()))
  // }

  let filteredProducts = products
  let initialFilteredProducts = JSON.parse(JSON.stringify(products))

  // if (searchTerm !== '' && categoryValue.clicked === false) {
  //   filteredProducts = filterProductsByName(filteredProducts)
  //   console.log(filteredProducts)
  // }
  if (categoryValue.clicked === true) {
    filteredProducts = filterProductsByCategory(filteredProducts)
  }

  else if (categoryValue.clicked === false) {
    filteredProducts = initialFilteredProducts
  }

  // #endregion

  // #region 'App Html'
  return (

    <div className="app">

      <main>

        <Header
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
        />

        {
          //#region 'Routes'
        }

        <Routes>

          <Route
            index
            element={<Navigate replace to="/home" />}
          />

          <Route
            path='/home'
            element={<HomePage />}>
          </Route>

          <Route
            path='/categories'
            element={
              <CategoriesPage
                categories={categories}
                setCategoryValue={setCategoryValue}
                categoryValue={categoryValue}
              />}
          >
          </Route>

          <Route
            path='/categories/:id'
            element={<ProductsPage
              products={products}

              filteredProducts={filteredProducts}
              setCategoryValue={setCategoryValue}

              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />}
          >
          </Route>

          <Route
            path='/basket'
            element={
              <BasketPage
                products={products.filter(item => item?.quantity > 0)}
                setProducts={setProducts}
              />}
          >
          </Route>

          <Route
            path='/products'
            element={
              <ProductsPage
                products={products}
                filteredProducts={filteredProducts}

                categoryValue={categoryValue}
                setCategoryValue={setCategoryValue}

                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />}
          >
          </Route>

          <Route
            path='*'
            element={<NotFoundPage />}>
          </Route>

          <Route
            path='/products/:id'
            element={
              <ProductDetailPage
                products={products}
                setProducts={setProducts}
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
// #region 'Importing'
import Header from "./components/Header"
import "../src/App.css"

import {Routes, Route} from 'react-router-dom'
// #endregion

function App() {

  // #region 'App Html Returning'
  return (

    <div className="app">

      <Header />

      <main>
        {
          //Create your routes here
        }
      </main>

    </div>

  )
  // #endregion

}

export default App
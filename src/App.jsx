import './App.css'
import {RouterProvider} from "react-router";
import root from "./Router/root.jsx";
import {HelmetProvider} from "react-helmet-async";
function App() {

  return (
      <HelmetProvider>
          <RouterProvider router={root}>
          </RouterProvider>
      </HelmetProvider>
  )
}

export default App


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"

import About from "./pages/About"
import Layout from "./Components/root/Layout"
import Pricing from "./pages/Pricing"
import Features from "./pages/Features"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element ={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Pricing" element={<Pricing/>}></Route>
    <Route path="/Features" element={<Features/>}></Route>
  </Route>
))

function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App

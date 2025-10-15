import { BrowserRouter, Route, Routes } from "react-router-dom"

import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"


function App() {
  

  return (
    <>
        <BrowserRouter basename="/">
         <Routes>
            <Route path="/" element={<Body/>}> 
            
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>

            
            
            </Route>
         
         
         </Routes>
        </BrowserRouter>



        {/* <NavBar/> */}
        {/* <h1 className=" text-3xl font-bold underline">hello world</h1> */}
    </>
  )
}

export default App


import Home from "./pages/Home"
import About from "./pages/About"
import Content from "./pages/Content"
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){

  return(

    <BrowserRouter>
<ScrollToTop />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/content" element={<Content/>}/>
      </Routes>


    </BrowserRouter>

  )

}

export default App
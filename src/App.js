import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"



function App() {
  const [country,setcountry]=useState("in")
  const [progress,setProgress]=useState(10)


  return (
    <BrowserRouter>
    <section className="bg-secondary" >
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
      <Route  exact path="/" element={<News setProgress ={setProgress}  category="general"  country={country}/>} />
      <Route exact path="/business" element={<News  setProgress ={setProgress}    category="business"  country={country}/>} />
      <Route exact path="/entertainment" element={<News setProgress ={setProgress}    category="entertainment"  country={country}/>} />
      <Route exact path="/health" element={<News  setProgress ={setProgress}   category="health"  country={country}/>} />
      <Route exact path="/science" element={<News   setProgress ={setProgress}  category="science"  country={country}/>} />
      <Route exact path="/technology" element={<News  setProgress ={setProgress}   category="technology"  country={country}/>} />
      <Route exact path="/sports" element={<News  setProgress ={setProgress}   category="sports"  country={country}/>} />
     
     
      
      </Routes>
    </section>
    </BrowserRouter>
  );
}

export default App;

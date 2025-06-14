import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import FutureInLife from "./components/FutureInLife";
import Skills from "./components/Skills";
import ChallengesAndLearnings from "./components/ChallengesAndLearnings";
import MoreAboutMe from "./components/MoreAboutMe";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route index element={<Hero/>}/>
          <Route path="/Hero" element={<Hero/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/ChallengesAndLearnings" element={<ChallengesAndLearnings/>}/>
          <Route path="/FutureInLife" element={<FutureInLife/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/MoreAboutMe" element={<MoreAboutMe/>}/>
          
          
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
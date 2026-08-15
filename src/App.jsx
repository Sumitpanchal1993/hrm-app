import React, { useState } from "react";
import "./App.css";
import SideNavbar from "./Components/SideNavbar";
import TopNav from "./Components/TopNav";
import { useAppContext } from "./Context Store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import handleEmployeeRoutes from "./Utils/EmployeeRoutes";
import FAQ from "./Pages/FAQ"

function App() {
 const {isLoggedIn} = useAppContext()

  return (
    <>
      <Router>
        <header>
          <TopNav />
        </header>
        <main>
          {isLoggedIn &&
            <aside className="side-navbar">
              <SideNavbar />
            </aside>
          }
          <section>
            <Routes>
              <Route path="/" element={!isLoggedIn?<Home />:""} />
              {isLoggedIn && handleEmployeeRoutes()}  
              <Route path="/setting" element={isLoggedIn?"Settings":""} />
              <Route path="/faq" element={isLoggedIn?<FAQ/>:""} />        
            </Routes>
          </section>
        </main>
      </Router>
      {/* <footer>
        <p>&copy; 2026 My App. All rights reserved.</p>
      </footer> */}

    </>
  );
}

export default App;
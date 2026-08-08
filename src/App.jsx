import React, { useState } from "react";
import "./App.css";
import SideNavbar from "./Components/SideNavbar";
import Main from "./Pages/Main";
import TopNav from "./Components/TopNav";
import { useAppContext } from "./Context Store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <header>
          <TopNav />
        </header>
        <main>
          <aside className="side-navbar">
            <SideNavbar />
          </aside>
          <section>
            <Main />
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
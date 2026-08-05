import React, { useState } from "react";
import "./App.css";
import SideNavbar from "./Components/SideNavbar";
import Main from "./Pages/Main";
import TopNav from "./Components/TopNav";
import { useAppContext } from "./Context Store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { login, login_func, login_func2, user, setUser, isSideBarOpen, setIsSideBarOpen } = useAppContext();

  return (
    <>
      <Router>
        <header>
          <TopNav loginStatus={login} func={login_func} func2={login_func2} />
        </header>
        <main className="mainpg">
          <aside>
            <SideNavbar loginStatus={login} />
          </aside>
          <section>
            <Main loginStatus={login} />
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
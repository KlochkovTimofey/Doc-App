import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Helloarticle from "./helloarticle";
import Tasks from "./tasks";
import Html from "./html";
import Css from "./css";
import Jscript from "./jscript";
import ReactJs from "./reactjs";
import Other from "./other";
function Main() {
    return (
        <BrowserRouter>
            <div className="window-container">


                <div className="main-menu">

                    <div className="nav-bar">
                        <Link to="/ex">Задачи</Link>
                        <Link to="/html">Html</Link>
                        <Link to="/css">Css</Link>
                        <Link to="/js">JavaScript</Link>
                        <Link to="/react">ReactJs</Link>
                        <Link to="/other">Другое</Link>


                    </div>

                </div>


                <div className="main-window">

                    <Routes>

                        <Route exact path="/" element={<Helloarticle />} />
                        <Route exact path="/ex" element={<Tasks />} />
                        <Route exact path="/html" element={<Html />} />
                        <Route exact path="/css" element={<Css />} />
                        <Route exact path="/js" element={<Jscript />} />
                        <Route exact path="/react" element={<ReactJs />} />
                        <Route exact path="/other" element={<Other />} />

                    </Routes>
                    {/* <nav>
                        <Link to="/">Home</Link>
                        <Link to="/ex">Задачи</Link>
                        <Link to="/html">Html</Link>
                        <Link to="/css">Css</Link>
                        <Link to="/js">JavaScript</Link>
                        <Link to="/react">ReactJs</Link>
                        <Link to="/other">Другое</Link>
                    </nav> */}

                </div>
            </div>
        </BrowserRouter>

    );
}

export default Main;
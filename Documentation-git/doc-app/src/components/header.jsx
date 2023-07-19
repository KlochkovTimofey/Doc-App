import React from "react";
import SearchIcon from "../img/search.png"
import GitHub from "../img/git.png"
function Header() {
    return (
      <div className="header">

        <h2>knowledge base</h2>

          <div className="header-search">
            <img src={SearchIcon}/>
            <input placeholder="Поиск"/>
          </div>

          <div className="header-links">
            <a href="#"><img src={GitHub}/>GitHub</a>
          </div>      
  
      </div>
      
    );
  }
  
  export default Header;
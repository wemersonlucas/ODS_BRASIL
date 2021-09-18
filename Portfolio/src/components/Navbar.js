import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Wemerson Lucas
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Trabalhos</button>
            <button onClick={() => scrollTo("#about")}>Sobre</button>
            <button onClick={() => scrollTo("#contact")}>Contato</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

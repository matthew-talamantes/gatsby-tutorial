import React from "react"

import styled from "styled-components"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="site-title">SimplyRecipes</span>. Build with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer

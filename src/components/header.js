// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, about, reflection, resume, projects }) => (
<div class="container">
  <div class="page-header">
  <div class="bs-component">

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Will Schweitzer</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class={about}>
          <a class="nav-link" href="/">About<span class="sr-only">(current)</span></a>
        </li>
        <li class={reflection}>
          <a class="nav-link" href="/reflection">Reflection<span class="sr-only"></span></a>
        </li>
        <li class={resume}>
          <a class="nav-link" href="/resume">Resume</a>
        </li>
        <li class={projects}>
          <a class="nav-link" href="/projects">Projects</a>
        </li>
      </ul>
    </div>
  </nav>

  </div>
</div>
</div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

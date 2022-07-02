import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import "../../public/static/bootstrap/css/theme/lux/bootstrap.css"
// import "../../public/static/css/responsive.css"
import "./bootstrap.css"
import "./responsive.css"

const IndexPage = () => (
  <Layout about="nav-link active" reflection="nav-link" resume="nav-link" projects="nav-link">
    <SEO title="About" />
    <div class="container" style={{padding: "15px"}}>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
          <div class="card text-white bg-primary mb-3 profile-contianer">
            <div class="card-body">
              <img class="rounded" style={{height: "auto", maxWidth: "100%", display: "block"}} src="/../../profile-noloop.gif" alt="Will Schweiter in GIF form!" />
            </div>
          </div>
          <div class="profile-contianer">
            <div class="alert alert-dark" role="alert">
              <h4 class="alert-heading">Hello! About me:</h4>
              <p class="mb-0">Gaming inspired me to pursue technology. Ever since I was a kid, I went to games for comfort and competition.</p>
              <p class="mb-0">However, after gaining experience in web development, I obtained a greater appreciation for software as a whole. I love the process of building something through many iterations to accomplish an idea.</p>
              <p class="mb-0">I also have experience with the software development life cycle. I know that people, their emotions, and working together are what makes the software work.</p>
            </div>
          </div>
          <div class="profile-contianer">
            <div class="alert alert-info" role="alert">
              <h4 class="alert-heading">Employment:</h4>
              <p class="mb-0">I am actively seeking new seeking software engineering opportunities, feel free to contact me on Linkedin!</p>
            </div>
            <a download class="btn btn-primary btn-lg" href="/../../will-schweitzer-resume.pdf" style={{width: "100%", marginBottom: "1rem"}}>
              Download Resume
            </a>
            <a class="btn btn-info btn-lg" href="https://www.linkedin.com/in/william-schweitzer" style={{width: "100%", marginBottom: "1rem"}}>
              Linkedin Profile
            </a>
            {/* <a class="btn btn-outline-primary btn-lg" style={{width: "100%"}} data-toggle="modal" href="#signupModal">
              Contact Me
            </a> */}
          </div>
        </div>
        <hr />
        <h4 class="text-primary">Professional Experience</h4>
        <p class="lead">
          I am currently working fulltime at Tata Consultancy Services (TCS). A critical aspect of my personality is the idea of lifelong education gained through my hard work as well as the experiences of those surrounding me.
        </p>
        <p class="lead">
          My main passions lie in Application Development, Cloud Computing, and Video Games. It is my goal to gain a greater understanding of Computer Science to contribute to the advancement of these technologies to enrich the lives of others.
        </p>
        {/* <p class="lead">
          My current strengths lie in AGILE(scrum) Web Development using the .NET MVC Framework, Preact.js with TypeScript, SQL, Node, NPM, HTML/CSS, Azure Dev Ops, Git, as well as many other interwoven pieces.
        </p> */}
        <div style={{display: "flex", justifyContent: "space-evenly", flexFlow: "wrap"}}>
        <div class="card" style={{width: "18rem", margin: "1rem"}}>
          <img class="card-img-top" src="/../../tcs_logo.png" alt="TCS" style={{height: "165.06px"}} />
          <div class="card-body">
            <h5 class="card-title">Tata Consultancy Services - TCS</h5>
            <h6 class="card-subtitle mb-2 text-muted">Software Engineer</h6>
            <h6 class="card-subtitle mb-2 text-muted">Feb 2021 - Present</h6>
            <p class="card-text">I have been working with the client Kroger for over a year now. Some technologies I have been exposed to include Grafana, Dynatrace, GCP, ELK Stack, Xcode, Swift, React, Rancher, Kubernetes, etc.</p>
          </div>
        </div>
        </div>
        <hr class="my-4" />
        <h4 class="text-primary">Co-op Experiences</h4>
        <p class="lead">
          My Co-op experiences at the University of Cincinnati.
        </p>
        <div style={{display: "flex", justifyContent: "space-evenly", flexFlow: "wrap"}}>
        <div class="card" style={{width: "18rem", margin: "1rem"}}>
          <img class="card-img-top" src="/../../lendogram-logo.png" alt="Lendogram" style={{height: "165.06px"}} />
          <div class="card-body">
            <h5 class="card-title">Lendogram</h5>
            <h6 class="card-subtitle mb-2 text-muted">International Co-op</h6>
            <h6 class="card-subtitle mb-2 text-muted">Spring 2017</h6>
            <p class="card-text">Web development in Ruby on Rails. My first introduction to web development and git. Gained international work experience.</p>
          </div>
        </div>
        <div class="card" style={{width: "18rem", margin: "1rem"}}>
          <img class="card-img-top" src="/../foxsports.webp" alt="Foxsports" />
          <div class="card-body">
            <h5 class="card-title">Fox Sports</h5>
            <h6 class="card-subtitle mb-2 text-muted">Software Engineer</h6>
            <h6 class="card-subtitle mb-2 text-muted">Summer 2018</h6>
            <p class="card-text">Implemented the 2018 FIFA Men's World Cup Schedule Widget</p>
          </div>
        </div>
        <div class="card" style={{width: "18rem", margin: "1rem"}}>
          <img class="card-img-top" src="/../foxsports.webp" alt="Fox Sports" />
          <div class="card-body">
            <h5 class="card-title">Fox Sports</h5>
            <h6 class="card-subtitle mb-2 text-muted">Software Engineer</h6>
            <h6 class="card-subtitle mb-2 text-muted">Spring 2019</h6>
            <p class="card-text">NCAA Bracket Redesign. Fox Sports streaming migration to "Foxsports.com".</p>
          </div>
        </div>
        <div class="card" style={{width: "18rem", margin: "1rem"}}>
          <img class="card-img-top" src="/../foxsports.webp" alt="Fox Sports" />
          <div class="card-body">
            <h5 class="card-title">Fox Sports</h5>
            <h6 class="card-subtitle mb-2 text-muted">Software Engineer</h6>
            <h6 class="card-subtitle mb-2 text-muted">Summer 2019</h6>
            <p class="card-text">Worked on the 2019 FIFA Women's World Cup. Created stats pages using .NET, C#, HTML, and LESS.</p>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      {/* <p>Feel free to contact me!</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg"  data-toggle="modal" href="#signupModal">Contact Me</a>
      </p>  */}

      </div>
  </Layout>
)

export default IndexPage

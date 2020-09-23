import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout about="nav-link" reflection="nav-link" active resume="nav-link" projects="nav-link active">
    <SEO title="Projects" />
    
    <div class="container">
    <div class="card border-primary mb-3">
        <h3 class="card-header">About Me Website - Netlify + Gatsby Migration</h3>
        <div class="card-body">
          <h5 class="card-title">Learning Goal: Netlify + Gatsby Learning</h5>
          <h6 class="card-subtitle text-muted">willschweitzer.io - This website <span role="img" alt="Smiley Face" aria-label="Emoji">&#128540;</span></h6>
        </div>
        <div class="card-body">
          <img class="mx-auto" style={{maxWidth: "50%", height: "auto"}} src="/../../gatsby-logo.png" alt="Gatsby Logo" />
          <img class="mx-auto float-left" style={{maxWidth: "50%", height: "auto"}} src="/../../netlify-logo.png" alt="Netlify Logo" />
        </div>
        <div class="card-body">
          <p class="card-text">
            My primary motivation behind this project was to explore all that Netlify has to offer and to make use of their amazing pricing! I also had never used a Jamstack and Gatsby has turned out to be another great tool.
          </p>
          <p class="card-text">
            Now this website is hosted using Netlify and developed using the Gatsby Jamstack.
          </p>
        </div>
        <div class="card-footer text-muted">
          May 22, 2020
        </div>
      </div>
      <div class="card text-white bg-primary mb-3" style={{maxWidth: "100%"}}>
        <div class="card-body">
          <h4 class="card-title">Projects</h4>
          <p class="card-text">Welcome to my projects view! Below, find projects I have either completed or am currently working on.</p>
        </div>
      </div>
      <div class="card border-primary mb-3">
        <h3 class="card-header">Senior Design Porject - Auditory Horizons</h3>
        <div class="card-body">
          <img class="mx-auto" style={{maxWidth: "100%", height: "auto"}} src="/../../poster-final.png" alt="Senior Design Expo Poster" />
        </div>
        <div class="card-body">
          <p class="card-text">
            I developed the web application called Auditory Horizons with a group of four people during my senior year at the University of Cincinnati. I handled the design and implementation of the Frontend as well as integration with the backend and machine learning module.
          </p>
          <p class="card-text">
            Auditory Horizons makes use of React.js, Tensorflow, and an Eclipse Tomcat server.
          </p>
        </div>
        <div class="card-footer text-muted">
          April, 2020
        </div>
      </div>
      <div class="card border-primary mb-3">
        <h3 class="card-header">About Me Website</h3>
        <div class="card-body">
          <h5 class="card-title">Learning Goal: AWS Cloud Computing applications to Web Development</h5>
          <h6 class="card-subtitle text-muted">willschweitzer.io - This website <span role="img" alt="Smiley Face" aria-label="Emoji">&#128540;</span></h6>
        </div>
        <div class="card-body">
          <img class="mx-auto" style={{maxWidth: "50%", height: "auto"}} src="/../../amazon-logo.png" alt="AWS Logo" />
          <img class="mx-auto float-left" style={{maxWidth: "50%", height: "auto", marginTop: "13%"}} src="/../../nodejs-logo.png" alt="Node.js Logo" />
        </div>
        <div class="card-body">
          <p class="card-text">
            The primary AWS services used in this project are Elastic Beanstalk, EC2, DynamoDB, Route 53, Certificate Manager, and S3.
          </p>
          <p class="card-text">
            I used Node.js to develop this web application.
          </p>
        </div>
        <div class="card-body">
          <a href="/projects/website">
            <button type="button" class="btn btn-info btn-lg">Brief Report</button>
          </a>
        </div>
        <div class="card-footer text-muted">
          Feburary, 2020
        </div>
      </div>
    </div>


  </Layout>
)

export default ProjectsPage

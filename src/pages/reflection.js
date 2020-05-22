import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const ReflectionPage = () => (
  <Layout about="nav-link" reflection="nav-link active" active resume="nav-link" projects="nav-link">
    <SEO title="Reflection" />
    
    <div class="jumbotron">
      <div class="card text-white bg-primary mb-3" style={{maxWidth: "100%"}}>
        <div class="card-body">
          <h4 class="card-title">Summative Reflection</h4>
          <p class="card-text">University of Cincinnati</p>
        </div>
      </div>
      <h5>Academic and Professional Journey</h5>
        <p class="lead">
          My academic journey started in 2015 and is set to complete in 2020. It primarily consists of my four co-op rotations split between all the semesters of class I have taken. My first co-op was in Canada for a startup company called Lendogram. Living and working in Canada was a great experience that taught me many things and gave me my first taste of the professional world. My next three co-ops took place in Ohio at Fox Sports where I saw substantial development in my ability as a software engineer. I am so grateful to have been able to gain such great experience at Fox Sports, when I left I felt like I was a necessary part of the team, and not just an intern. 
        </p>
      <h5>Co-op Impact on my Computer Science Journey</h5>
        <p class="lead">
          I cannot stress enough how much my co-op experiences have impacted me and my computer science journey. Gaining on the job experience really made me realize my love for computer science and technology. I love the process of creating things.
        </p>
      <h5>Co-op Learning</h5>
        <p class="lead">
          The co-op program was surprising to me because I learned that there is nothing like on the job experience. I took concepts I learned in school to my co-ops and was able to learn what it is like to actually be a software engineer.  I could not imagine graduating without this experience. Not to mention the experience interviewing and searching for multiple jobs.
        </p>
      <h5>If I Could Start Over</h5>
        <p class="lead">
          I cannot stress enough how important your first co-op and early semesters are. 
        </p>
      </div>
  </Layout>
)

export default ReflectionPage

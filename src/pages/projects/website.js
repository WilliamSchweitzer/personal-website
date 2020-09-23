import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const WebsiteProjectPage = () => (
  <Layout about="nav-link" reflection="nav-link" resume="nav-link" projects="nav-link active">
    <SEO title="Website" />
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/projects">Projects</a></li>
        <li class="breadcrumb-item active">Website</li>
      </ol>
      <h2 class="text">AWS Cloud Computing applications to Web Development</h2>
      <hr class="my-4" />
      <h4 class="text-primary">AWS Services</h4>
      <p>
        The primary AWS services used in this project are Elastic Beanstalk, EC2, DynamoDB Route 53, Certificate Manager, and S3.
      </p>
      <hr class="my-4" />
      <h4 class="text-primary">Elastic Beanstalk</h4>
      <p>
        Elastic Beanstalk is the environment I am using to deploy my Node.js Application. It also makes use of Auto Scaling of EC2 instances, a Load Balancer, and a DynamoDB.
      </p>
      <hr class="my-4" />
      <h4 class="text-primary">EC2 - Load Balancer - Auto Scaling</h4>
      <p>
        This website primarily runs on 1 EC2 instance. However, in the event of high traffic, the load balancer scales up to 4 instances! This process is similar to a Hadoop Distributed File System. HDFS uses a cluster of CPUs, a master process runs, and a worker process is created for each CPU in use. In my case, the worker process is my Node.js application, and the CPU is an EC2 instance.
      </p>
      <p>
        Each EC2 instance has environment properties defined in the Elastic Beanstalk environment, and the properties are passed through to the Node.js application. This feature allows dynamic code changes directly from the Elastic Beanstalk UI. This website makes use of this feature to allow instant Bootstrap theme changes from the click of a button.
      </p>
      <hr class="my-4" />
      <h4 class="text-primary">DynamoDB</h4>
      <p>
        The database in use, DynamoDB, is Amazon's NoSQL Database. My Node.js application passes an object via a POST request, through to my DynamoDB, when a user submits my "Contact Me" form. I am then immediately notified via email with the contents of the variables, pretty cool!
      </p>
      <hr class="my-4" />
      <h4 class="text-primary">Route 53 - Certificate Manager</h4>
      <p>
        Route 53 handles DNS resolution, where I registered my domain and aliased the IPv4 address of my running EC2 instance to be "*.willschweiter.io." I used the Certificate Manager to obtain an SSL/TLS public certificate quickly.
      </p>
      <hr class="my-4" />
      <h4 class="text-primary">Load Balancer - HTTPS Redirect</h4>
      <p>
        The load balancer allows both HTTP and HTTPS connection. To secure my website, by redirecting HTTP to HTTPS, I added Amazon's open-source HTTPS redirect config file to my config folder.
      </p>
      <hr class="my-4" />
      <h4 class="text-primary">S3</h4>
      <p>
        S3 is used to store load balancer logs.
      </p>
      <hr class="my-4" />
      <p>
        <a class="btn btn-danger btn-lg" href="/projects"> <span role="img" alt="Back Arrow" aria-label="Emoji">&#x2190;</span> Back </a>
      </p>
    </div>
  

  </Layout>
)

export default WebsiteProjectPage

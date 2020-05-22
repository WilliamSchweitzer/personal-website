import React from "react"
import { Document, Page } from 'react-pdf';
import Layout from "../components/layout"
import SEO from "../components/seo"

const pageNumber = 1;
const numPages = 1;



const ResumePage = () => (
  <Layout about="nav-link" reflection="nav-link" resume="nav-link active" projects="nav-link">
    <SEO title="Resume" />
    <div class="jumbotron">
      <Document
            file="/../../will-schweitzer-resume.pdf"
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
    </div>
  

  </Layout>
)

export default ResumePage

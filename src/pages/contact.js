import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return <Layout>
    <SEO title="Contact me"/>
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form action="https://formspree.io/xeqrgnrw" method="POST">
          <div className="form-group">
            <input type="text" name="name" className="form-control" placeholder="name" />
            <input type="email" name="_replyto" className="form-control" placeholder="email" />
            <textarea name="message" name="message" id="" rows="5" placeholder="message" className="form-control"></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            submit here
          </button>
        </form>  
      </article>
    </section>
  </Layout>
}

export default contact

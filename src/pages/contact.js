import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Semiotics crucifix glossier, normcore blog etsy ennui ethical
              beard snackwave pork belly. Vaporware locavore raw denim prism
              XOXO. Raw denim etsy XOXO shaman, mlkshk aesthetic brunch umami.
              Vinyl listicle wolf poutine neutra. Sartorial fixie viral
              vaporware vegan. Biodiesel food truck vape, raw denim VHS salvia
              scenester. Ethical heirloom PBR&B cray ramps taxidermy vape.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message..."
                ></textarea>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact

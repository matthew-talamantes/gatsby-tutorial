import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Asymmetrical jean shorts 3 wolf moon</h2>
            <p>
              Stumptown readymade cold-pressed jean shorts. Twee distillery palo
              santo green juice air plant selfies mustache banh mi narwhal.
              Typewriter jianbing cardigan hot chicken pork belly, letterpress
              waistcoat squid organic small batch pok pok helvetica.
            </p>
            <p>
              Flexitarian hell of cray blue bottle locavore salvia readymade
              cliche selfies lomo umami. Woke vape raw denim, leggings tbh air
              plant gastropub cred salvia iceland. Kickstarter shoreditch beard,
              art party four loko brunch occupy iceland mustache marfa actually.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About

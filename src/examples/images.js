import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained</h4>
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="Eggs and flour"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="Eggs and flour"
          placeholder="dominantColor"
          layout="fixed"
          width={200}
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fullwidth</h4>
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="Eggs and flour"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="section"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    height: 300px;
    border-radius: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;

    .example-img {
      height: 200px;
    }
  }
`

export default Images

import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <StaticImage
        src="../assets/images/main.jpeg"
        alt="Eggs and flour"
        placeholder="tracedSVG"
        layout="fullWidth"
      />
      <h1>Home</h1>
    </Layout>
  )
}

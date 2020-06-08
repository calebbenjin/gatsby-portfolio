import React from "react"
import Image from "gatsby-image"
// import meImg from "../assets/me.svg"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: {eq: "hero-img.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const { file: { childImageSharp: { fluid }, }, } = useStaticQuery(query);
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Frontend Developer.</h1>
            <h4>I like to craft solid and scalable FE products with great user experiences.</h4>
            <p></p>
            <Link to="/contact" className="btn">
              contact me
          </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero;

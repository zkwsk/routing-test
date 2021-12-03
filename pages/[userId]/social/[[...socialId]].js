import React from 'react'

function Social() {
  return (
    <div>
      This page should render for both /user-123/social and /user-123/social/social-123
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: process.env.ENABLE_ISR === "blocking" ? 'blocking' : process.env.ENABLE_ISR !== "false" ? true : false,
  }
}
export async function getStaticProps(props) {
  return {
    props: {
      test: 'test',
    }
  }
}

export default Social

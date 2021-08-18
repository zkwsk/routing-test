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
    fallback: true,
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

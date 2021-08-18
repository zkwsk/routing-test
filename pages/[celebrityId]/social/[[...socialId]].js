import { useRouter } from 'next/router'
import React from 'react'

function TextStar() {
  const router = useRouter()
  console.log('router', router)
  return (
    <div>
      Social
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

export default TextStar

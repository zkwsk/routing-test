import { useRouter } from 'next/router'
import React from 'react'

function TextStar() {
  const router = useRouter()
  console.log('router', router)
  console.log('inside index')
  return (
    <div>
      Celebrity
    </div>
  )
}

export default TextStar

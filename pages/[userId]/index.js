import { useRouter } from 'next/router'
import React from 'react'

function User() {
  const router = useRouter()
  console.log('router', router)
  console.log('inside index')
  return (
    <div>
      User page is here
    </div>
  )
}

export default User

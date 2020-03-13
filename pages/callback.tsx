import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Callback: NextPage = () => {
  const router = useRouter()
  console.log(router.query)

  return (
    <>
      <p>{JSON.stringify(router.query)}</p>
    </>
  )
}

export default Callback

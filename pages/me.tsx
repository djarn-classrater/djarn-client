import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { UserType } from '~/generated/graphql'
import { useRouter } from 'next/router'

const STUDENT_INFO = gql`
  query getStudentInfo {
    me {
      firstNameTH
      lastNameTH
      organizationNameTH
    }
  }
`

const Me = () => {
  const router = useRouter()
  const { loading, error, data } = useQuery<{ me: UserType }>(STUDENT_INFO)
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  router.push('/search')
  return <p>{JSON.stringify(data.me)}</p>
}

export default Me

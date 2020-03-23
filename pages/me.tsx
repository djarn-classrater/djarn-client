import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { StudentInfo } from '~/generated/graphql'

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
  const { loading, error, data } = useQuery<{ me: StudentInfo }>(STUDENT_INFO)
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  return <p>{JSON.stringify(data.me)}</p>
}

export default Me
